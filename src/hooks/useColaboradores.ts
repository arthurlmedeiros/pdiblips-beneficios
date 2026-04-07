import { useQuery } from "@tanstack/react-query";
import { supabase } from "@core/integrations/supabase/client";
import type { Tables } from "@core/integrations/supabase/types";

export type Colaborador = Tables<"pdi_colaboradores">;

export const useColaboradores = () => {
  const { data: colaboradores = [], isLoading } = useQuery({
    queryKey: ["pdi_colaboradores"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pdi_colaboradores")
        .select("id, nome")
        .order("nome", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  return {
    colaboradores,
    isLoading,
  };
};
