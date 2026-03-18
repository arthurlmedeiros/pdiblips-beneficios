import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Beneficio } from "@beneficios/hooks/useBeneficios";

interface BeneficioFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { nome: string; descricao?: string; categoria?: string }) => Promise<void>;
  beneficio?: Beneficio | null;
}

const BeneficioForm = ({ open, onOpenChange, onSubmit, beneficio }: BeneficioFormProps) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (beneficio) {
      setNome(beneficio.nome);
      setDescricao(beneficio.descricao || "");
      setCategoria(beneficio.categoria || "");
    } else {
      setNome("");
      setDescricao("");
      setCategoria("");
    }
  }, [beneficio, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim()) return;
    setLoading(true);
    try {
      await onSubmit({
        nome: nome.trim(),
        descricao: descricao.trim() || undefined,
        categoria: categoria.trim() || undefined,
      });
      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{beneficio ? "Editar Benefício" : "Adicionar Benefício"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" value={nome} onChange={e => setNome(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="categoria">Categoria</Label>
            <Input id="categoria" placeholder="Ex: saúde, alimentação, transporte" value={categoria} onChange={e => setCategoria(e.target.value)} />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
            <Button type="submit" disabled={loading}>{loading ? "Salvando..." : "Salvar"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BeneficioForm;
