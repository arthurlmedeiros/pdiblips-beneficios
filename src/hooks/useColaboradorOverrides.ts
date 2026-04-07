import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@core/integrations/supabase/client";
import { toast } from "sonner";
import type { Tables } from "@core/integrations/supabase/types";

type Beneficio = Tables<"pdi_beneficios">;

export type OverrideRow = {
  id: string;
  colaborador_id: string;
  beneficio_id: string;
  tipo: 'adicional' | 'excluido';
  created_at: string;
  pdi_beneficios: Beneficio;
};

export const useColaboradorOverrides = (selectedColaboradorId: string | null) => {
  const queryClient = useQueryClient();

  const { data: overrides = [], isLoading: isLoadingOverrides } = useQuery({
    queryKey: ["pdi_colaborador_beneficios_overrides", selectedColaboradorId],
    queryFn: async () => {
      if (!selectedColaboradorId) return [];

      const { data, error } = await supabase
        .from("pdi_colaborador_beneficios")
        .select("*, pdi_beneficios(*)")
        .eq("colaborador_id", selectedColaboradorId)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as OverrideRow[];
    },
    enabled: !!selectedColaboradorId,
  });

  const addOverrideMutation = useMutation({
    mutationFn: async ({ colaboradorId, beneficioId, tipo }: { colaboradorId: string; beneficioId: string; tipo: 'adicional' | 'excluido' }) => {
      const { error } = await supabase
        .from("pdi_colaborador_beneficios")
        .insert({
          colaborador_id: colaboradorId,
          beneficio_id: beneficioId,
          tipo,
        });
      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["pdi_colaborador_beneficios_overrides", variables.colaboradorId]
      });
      if (variables.tipo === 'adicional') {
        toast.success("Benefício adicionado ao colaborador");
      } else {
        toast.success("Benefício excluído para o colaborador");
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
      queryClient.invalidateQueries({
        queryKey: ["pdi_colaborador_beneficios_overrides", selectedColaboradorId]
      });
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
