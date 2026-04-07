import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBeneficios } from "@beneficios/hooks/useBeneficios";
import { useBeneficioRoles } from "@beneficios/hooks/useBeneficioRoles";

type PdiRole = 'gerente' | 'admin_diretor' | 'admin_ceo' | 'admin_geral';

const ROLES: { value: PdiRole; label: string }[] = [
  { value: 'gerente', label: 'Gerente' },
  { value: 'admin_diretor', label: 'Diretor' },
  { value: 'admin_ceo', label: 'CEO' },
  { value: 'admin_geral', label: 'Admin Geral' },
] as const;

const BeneficioRolesPanel = () => {
  const [selectedBeneficioId, setSelectedBeneficioId] = useState<string | null>(null);

  const { beneficios, isLoading: isLoadingBeneficios } = useBeneficios();
  const { rolesByBeneficio, isLoadingRoles, setRolesForBeneficio } = useBeneficioRoles(selectedBeneficioId);

  const activeRoles = rolesByBeneficio.map((r) => r.role);

  const handleToggle = async (role: PdiRole, checked: boolean) => {
    const next = checked
      ? [...activeRoles, role]
      : activeRoles.filter((r) => r !== role);
    await setRolesForBeneficio(next);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atribuição por Cargo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="beneficio-select">Benefício</Label>
          {isLoadingBeneficios ? (
            <Skeleton className="h-10 w-full" />
          ) : (
            <Select
              value={selectedBeneficioId ?? ""}
              onValueChange={(val) => setSelectedBeneficioId(val || null)}
            >
              <SelectTrigger id="beneficio-select">
                <SelectValue placeholder="Selecione um benefício..." />
              </SelectTrigger>
              <SelectContent>
                {beneficios.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        {!selectedBeneficioId ? (
          <p className="text-sm text-muted-foreground">
            Selecione um benefício para gerenciar os cargos
          </p>
        ) : (
          <div className="space-y-2">
            <Label>Cargos com acesso</Label>
            {isLoadingRoles ? (
              <div className="space-y-2">
                {ROLES.map((r) => (
                  <Skeleton key={r.value} className="h-6 w-40" />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {ROLES.map((r) => (
                  <div key={r.value} className="flex items-center gap-2">
                    <Checkbox
                      id={`role-${r.value}`}
                      checked={activeRoles.includes(r.value)}
                      disabled={isLoadingRoles}
                      onCheckedChange={(checked) =>
                        handleToggle(r.value, checked === true)
                      }
                    />
                    <Label htmlFor={`role-${r.value}`} className="cursor-pointer font-normal">
                      {r.label}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BeneficioRolesPanel;
