import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@core/integrations/supabase/client";
import { toast } from "sonner";

type PdiRole = 'admin_geral' | 'admin_ceo' | 'admin_diretor' | 'gerente';

export type BeneficioRole = {
  id: string;
  beneficio_id: string;
  role: PdiRole;
  created_at: string;
};

export const useBeneficioRoles = (selectedBeneficioId: string | null) => {
  const queryClient = useQueryClient();

  const { data: rolesByBeneficio = [], isLoading: isLoadingRoles } = useQuery({
    queryKey: ["pdi_beneficio_roles", selectedBeneficioId],
    queryFn: async () => {
      if (!selectedBeneficioId) return [];

      const { data, error } = await supabase
        .from("pdi_beneficio_roles")
        .select("*")
        .eq("beneficio_id", selectedBeneficioId)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!selectedBeneficioId,
  });

  const setRolesMutation = useMutation({
    mutationFn: async (roles: PdiRole[]) => {
      if (!selectedBeneficioId) throw new Error("Benefício não selecionado");

      // Delete existing roles for this beneficio
      const { error: deleteError } = await supabase
        .from("pdi_beneficio_roles")
        .delete()
        .eq("beneficio_id", selectedBeneficioId);
      if (deleteError) throw deleteError;

      // Insert new roles
      if (roles.length > 0) {
        const rolesToInsert = roles.map(role => ({
          beneficio_id: selectedBeneficioId,
          role,
        }));
        const { error: insertError } = await supabase
          .from("pdi_beneficio_roles")
          .insert(rolesToInsert);
        if (insertError) throw insertError;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pdi_beneficio_roles", selectedBeneficioId]
      });
      toast.success("Cargos atualizados");
    },
    onError: () => toast.error("Erro ao atualizar cargos"),
  });

  return {
    rolesByBeneficio,
    isLoadingRoles,
    setRolesForBeneficio: setRolesMutation.mutateAsync,
  };
};
