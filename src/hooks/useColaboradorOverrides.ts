import { useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@core/integrations/supabase/client";
import { toast } from "sonner";
import type { Tables } from "@core/integrations/supabase/types";

type Beneficio = Tables<"pdi_beneficios">;

export type OverrideRow = {
  id: string;
  colaborador_id: string | null;
  user_id: string | null;
  beneficio_id: string;
  tipo: 'adicional' | 'excluido';
  created_at: string;
  pdi_beneficios: Beneficio;
};

type AddOverrideParams =
  | { colaboradorId: string; userId?: undefined; beneficioId: string; tipo: 'adicional' | 'excluido' }
  | { colaboradorId?: undefined; userId: string; beneficioId: string; tipo: 'adicional' | 'excluido' };

export const useColaboradorOverrides = (
  selectedColaboradorId: string | null,
  selectedUserId?: string | null
) => {
  const queryClient = useQueryClient();

  const activeId = selectedColaboradorId ?? selectedUserId ?? null;
  const filterType = selectedColaboradorId ? 'colaborador' : 'user';

  const filterRef = useRef({ filterType, activeId });
  filterRef.current = { filterType, activeId };

  const { data: overrides = [], isLoading: isLoadingOverrides } = useQuery({
    queryKey: ["pdi_colaborador_beneficios_overrides", filterType, activeId],
    queryFn: async () => {
      if (!activeId) return [];

      let query = supabase
        .from("pdi_colaborador_beneficios")
        .select("*, pdi_beneficios(*)")
        .order("created_at", { ascending: false });

      if (selectedColaboradorId) {
        query = query.eq("colaborador_id", selectedColaboradorId);
      } else if (selectedUserId) {
        query = query.eq("user_id", selectedUserId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as OverrideRow[];
    },
    enabled: !!activeId,
  });

  const addOverrideMutation = useMutation({
    mutationFn: async (params: AddOverrideParams) => {
      const { error } = await supabase
        .from("pdi_colaborador_beneficios")
        .insert({
          colaborador_id: params.colaboradorId ?? null,
          user_id: params.userId ?? null,
          beneficio_id: params.beneficioId,
          tipo: params.tipo,
        });
      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      const id = variables.colaboradorId ?? variables.userId;
      const type = variables.colaboradorId ? 'colaborador' : 'user';
      queryClient.invalidateQueries({
        queryKey: ["pdi_colaborador_beneficios_overrides", type, id]
      });
      queryClient.invalidateQueries({ queryKey: ["pdi_meus_beneficios_overrides"] });
      if (variables.tipo === 'adicional') {
        toast.success("Benefício adicionado");
      } else {
        toast.success("Benefício excluído para o destinatário");
      }
    },
    onError: () => toast.error("Erro ao adicionar override"),
  });

  const removeOverrideMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("pdi_colaborador_beneficios")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      const { filterType: ft, activeId: aid } = filterRef.current;
      queryClient.invalidateQueries({
        queryKey: ["pdi_colaborador_beneficios_overrides", ft, aid]
      });
      queryClient.invalidateQueries({ queryKey: ["pdi_meus_beneficios_overrides"] });
      toast.success("Override removido");
    },
    onError: () => toast.error("Erro ao remover override"),
  });

  return {
    overrides,
    isLoadingOverrides,
    addOverride: addOverrideMutation.mutateAsync,
    removeOverride: removeOverrideMutation.mutateAsync,
  };
};
