import { useQuery } from "@tanstack/react-query";
import { supabase } from "@core/integrations/supabase/client";

export type UsuarioParaBeneficios = {
  id: string;
  nome: string;
};

export const useUsuariosParaBeneficios = () => {
  const { data: usuarios = [], isLoading, error } = useQuery({
    queryKey: ["pdi_usuarios_para_beneficios"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pdi_profiles")
        .select("id, nome, email")
        .order("nome", { ascending: true });
      if (error) throw error;
      return data.map((u) => ({
        id: u.id,
        nome: u.nome ?? u.email ?? u.id,
      })) as UsuarioParaBeneficios[];
    },
  });
  return { usuarios, isLoading, error };
};
