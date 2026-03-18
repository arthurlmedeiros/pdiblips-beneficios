import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@core/integrations/supabase/client";
import { toast } from "sonner";
import type { Tables } from "@core/integrations/supabase/types";

export type Beneficio = Tables<"pdi_beneficios">;

export const useBeneficios = () => {
  const queryClient = useQueryClient();

  const { data: beneficios = [], isLoading } = useQuery({
    queryKey: ["pdi_beneficios"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pdi_beneficios")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const insertMutation = useMutation({
    mutationFn: async (b: { nome: string; descricao?: string; categoria?: string }) => {
      const { error } = await supabase.from("pdi_beneficios").insert({ ...b, ativo: false });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pdi_beneficios"] });
      toast.success("Benefício adicionado");
    },
    onError: () => toast.error("Erro ao adicionar benefício"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: { id: string; nome?: string; descricao?: string; categoria?: string }) => {
      const { error } = await supabase.from("pdi_beneficios").update(data).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pdi_beneficios"] });
      toast.success("Benefício atualizado");
    },
    onError: () => toast.error("Erro ao atualizar benefício"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("pdi_beneficios").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pdi_beneficios"] });
      toast.success("Benefício excluído");
    },
    onError: () => toast.error("Erro ao excluir benefício"),
  });

  const toggleAtivoMutation = useMutation({
    mutationFn: async ({ id, ativo }: { id: string; ativo: boolean }) => {
      const { error } = await supabase.from("pdi_beneficios").update({ ativo }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pdi_beneficios"] });
    },
    onError: () => toast.error("Erro ao alterar visibilidade"),
  });

  const insertMany = useMutation({
    mutationFn: async (items: { nome: string; descricao?: string; categoria?: string }[]) => {
      const { error } = await supabase.from("pdi_beneficios").insert(items.map(i => ({ ...i, ativo: false })));
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pdi_beneficios"] });
      toast.success("Benefícios importados");
    },
    onError: () => toast.error("Erro ao importar benefícios"),
  });

  return {
    beneficios,
    isLoading,
    insert: insertMutation.mutateAsync,
    update: updateMutation.mutateAsync,
    remove: deleteMutation.mutateAsync,
    toggleAtivo: toggleAtivoMutation.mutateAsync,
    insertMany: insertMany.mutateAsync,
    isInserting: insertMutation.isPending,
    isUpdating: updateMutation.isPending,
  };
};
