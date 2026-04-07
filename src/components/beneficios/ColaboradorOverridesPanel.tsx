import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { useColaboradores } from "@beneficios/hooks/useColaboradores";
import { useColaboradorOverrides } from "@beneficios/hooks/useColaboradorOverrides";
import { useBeneficios } from "@beneficios/hooks/useBeneficios";

const ColaboradorOverridesPanel = () => {
  const [selectedColaboradorId, setSelectedColaboradorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newBeneficioId, setNewBeneficioId] = useState<string>("");
  const [newTipo, setNewTipo] = useState<'adicional' | 'excluido'>('adicional');
  const [isSaving, setIsSaving] = useState(false);

  const { colaboradores, isLoading: isLoadingColaboradores } = useColaboradores();
  const { overrides, isLoadingOverrides, addOverride, removeOverride } = useColaboradorOverrides(selectedColaboradorId);
  const { beneficios, isLoading: isLoadingBeneficios } = useBeneficios();

  const filteredColaboradores = colaboradores.filter((c) =>
    c.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddOverride = async () => {
    if (!selectedColaboradorId || !newBeneficioId) return;
    setIsSaving(true);
    try {
      await addOverride({ colaboradorId: selectedColaboradorId, beneficioId: newBeneficioId, tipo: newTipo });
      setAddDialogOpen(false);
      setNewBeneficioId("");
      setNewTipo('adicional');
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenAddDialog = () => {
    setNewBeneficioId("");
    setNewTipo('adicional');
    setAddDialogOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Overrides por Colaborador</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="busca-colaborador">Buscar colaborador</Label>
            <Input
              id="busca-colaborador"
              placeholder="Buscar colaborador..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="colaborador-select">Colaborador</Label>
            {isLoadingColaboradores ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Select
                value={selectedColaboradorId ?? ""}
                onValueChange={(val) => setSelectedColaboradorId(val || null)}
              >
                <SelectTrigger id="colaborador-select">
                  <SelectValue placeholder="Selecione um colaborador..." />
                </SelectTrigger>
                <SelectContent>
                  {filteredColaboradores.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.nome}
                    </SelectItem>
                  ))}
                  {filteredColaboradores.length === 0 && (
                    <div className="py-2 px-3 text-sm text-muted-foreground">
                      Nenhum colaborador encontrado
                    </div>
                  )}
                </SelectContent>
              </Select>
            )}
          </div>

          {!selectedColaboradorId ? (
            <p className="text-sm text-muted-foreground">
              Selecione um colaborador para gerenciar overrides
            </p>
          ) : (
            <div className="space-y-3">
              <Label>Overrides ativos</Label>

              {isLoadingOverrides ? (
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              ) : overrides.length === 0 ? (
                <p className="text-sm text-muted-foreground">Nenhum override cadastrado.</p>
              ) : (
                <div className="space-y-2">
                  {overrides.map((o) => (
                    <div
                      key={o.id}
                      className="flex items-center justify-between rounded-md border px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {o.pdi_beneficios?.nome ?? "—"}
                        </span>
                        <Badge
                          variant={o.tipo === 'adicional' ? 'default' : 'destructive'}
                          className={o.tipo === 'adicional' ? 'bg-green-600 hover:bg-green-700' : undefined}
                        >
                          {o.tipo === 'adicional' ? 'adicional' : 'excluído'}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeOverride(o.id)}
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remover</span>
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <Button
                size="sm"
                variant="outline"
                className="mt-2"
                onClick={handleOpenAddDialog}
              >
                <Plus className="mr-2 h-4 w-4" />
                Adicionar override
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Override</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="override-beneficio">Benefício</Label>
              {isLoadingBeneficios ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Select value={newBeneficioId} onValueChange={setNewBeneficioId}>
                  <SelectTrigger id="override-beneficio">
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
            <div className="space-y-2">
              <Label htmlFor="override-tipo">Tipo</Label>
              <Select
                value={newTipo}
                onValueChange={(val) => setNewTipo(val as 'adicional' | 'excluido')}
              >
                <SelectTrigger id="override-tipo">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adicional">Adicionar extra</SelectItem>
                  <SelectItem value="excluido">Excluir do cargo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleAddOverride} disabled={!newBeneficioId || isSaving}>
              {isSaving ? "Salvando..." : "Confirmar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ColaboradorOverridesPanel;
