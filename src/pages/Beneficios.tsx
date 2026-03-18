import { useState } from "react";
import { useBeneficios, Beneficio } from "@beneficios/hooks/useBeneficios";
import { useAuth } from "@core/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import BeneficioForm from "@beneficios/components/beneficios/BeneficioForm";
import ImportBeneficiosDialog from "@beneficios/components/beneficios/ImportBeneficiosDialog";
import { Plus, Upload, Pencil, Trash2 } from "lucide-react";

const Beneficios = () => {
  const { beneficios, isLoading, insert, update, remove, toggleAtivo, insertMany } = useBeneficios();
  const { isAdmin } = useAuth();

  const [formOpen, setFormOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [editing, setEditing] = useState<Beneficio | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleSubmit = async (data: { nome: string; descricao?: string; categoria?: string }) => {
    if (editing) {
      await update({ id: editing.id, ...data });
    } else {
      await insert(data);
    }
    setEditing(null);
  };

  const handleDelete = async () => {
    if (deleting) {
      await remove(deleting);
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">Repositório de Benefícios</h1>
          <p className="text-muted-foreground text-sm mt-1">Gestão de benefícios da empresa</p>
        </div>
        {isAdmin && (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setImportOpen(true)}>
              <Upload className="h-4 w-4 mr-2" />Importar Documento
            </Button>
            <Button onClick={() => { setEditing(null); setFormOpen(true); }}>
              <Plus className="h-4 w-4 mr-2" />Adicionar
            </Button>
          </div>
        )}
      </div>

      {isLoading ? (
        <p className="text-muted-foreground text-center py-8">Carregando...</p>
      ) : beneficios.length === 0 ? (
        <div className="h-[400px] rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground">
          Nenhum benefício cadastrado
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(b => (
            <Card key={b.id} className={!b.ativo ? "opacity-60" : ""}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{b.nome}</CardTitle>
                  {isAdmin && (
                    <div className="flex items-center gap-2">
                      <Switch checked={b.ativo} onCheckedChange={checked => toggleAtivo({ id: b.id, ativo: checked })} />
                    </div>
                  )}
                </div>
                {b.categoria && <Badge variant="secondary" className="w-fit mt-1">{b.categoria}</Badge>}
              </CardHeader>
              <CardContent>
                {b.descricao && <p className="text-sm text-muted-foreground mb-3">{b.descricao}</p>}
                {isAdmin && (
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" onClick={() => { setEditing(b); setFormOpen(true); }}>
                      <Pencil className="h-3.5 w-3.5 mr-1" />Editar
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setDeleting(b.id)}>
                      <Trash2 className="h-3.5 w-3.5 mr-1 text-destructive" />Excluir
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <BeneficioForm open={formOpen} onOpenChange={v => { setFormOpen(v); if (!v) setEditing(null); }} onSubmit={handleSubmit} beneficio={editing} />
      <ImportBeneficiosDialog open={importOpen} onOpenChange={setImportOpen} onImport={insertMany} />

      <AlertDialog open={!!deleting} onOpenChange={v => { if (!v) setDeleting(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir benefício</AlertDialogTitle>
            <AlertDialogDescription>Tem certeza que deseja excluir este benefício? Esta ação não pode ser desfeita.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Beneficios;
