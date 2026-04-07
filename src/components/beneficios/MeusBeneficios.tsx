import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Gift } from "lucide-react";
import { supabase } from "@core/integrations/supabase/client";
import { useBeneficios } from "@beneficios/hooks/useBeneficios";

const MeusBeneficios = () => {
  const { beneficios, isLoading: isLoadingBeneficios } = useBeneficios();

  const { data: meusOverrides = [], isLoading: isLoadingOverrides } = useQuery({
    queryKey: ["pdi_meus_beneficios_overrides"],
    queryFn: async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user.id;
      if (!userId) return [];

      const { data: colaborador, error: colError } = await supabase
        .from("pdi_colaboradores")
        .select("id")
        .eq("user_id", userId)
        .maybeSingle();

      if (colError || !colaborador) return [];

      const { data, error } = await supabase
        .from("pdi_colaborador_beneficios")
        .select("beneficio_id, tipo")
        .eq("colaborador_id", colaborador.id);

      if (error) throw error;
      return data ?? [];
    },
  });

  const isLoading = isLoadingBeneficios || isLoadingOverrides;

  const getOrigem = (beneficioId: string): 'extra' | 'cargo' => {
    const override = meusOverrides.find((o) => o.beneficio_id === beneficioId);
    return override?.tipo === 'adicional' ? 'extra' : 'cargo';
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-5 w-24 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (beneficios.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
        <Gift className="h-10 w-10" />
        <p className="text-sm">Você ainda não possui benefícios atribuídos.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {beneficios.map((b) => {
        const origem = getOrigem(b.id);
        return (
          <Card key={b.id}>
            <CardHeader>
              <CardTitle className="text-base">{b.nome}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {b.categoria && (
                <Badge variant="secondary">{b.categoria}</Badge>
              )}
              {b.descricao && (
                <p className="text-sm text-muted-foreground">{b.descricao}</p>
              )}
              <div className="pt-1">
                {origem === 'extra' ? (
                  <Badge className="bg-green-600 hover:bg-green-700">Benefício extra</Badge>
                ) : (
                  <Badge variant="outline">Via cargo</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MeusBeneficios;
