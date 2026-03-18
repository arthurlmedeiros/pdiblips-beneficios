import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@core/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";

interface ExtractedBeneficio {
  nome: string;
  descricao: string;
  categoria: string;
  selected: boolean;
}

interface ImportBeneficiosDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImport: (items: { nome: string; descricao?: string; categoria?: string }[]) => Promise<void>;
}

const ImportBeneficiosDialog = ({ open, onOpenChange, onImport }: ImportBeneficiosDialogProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [extracting, setExtracting] = useState(false);
  const [importing, setImporting] = useState(false);
  const [results, setResults] = useState<ExtractedBeneficio[]>([]);
  const [step, setStep] = useState<"upload" | "preview">("upload");

  const reset = () => {
    setFile(null);
    setResults([]);
    setStep("upload");
    setExtracting(false);
    setImporting(false);
  };

  const handleClose = (v: boolean) => {
    if (!v) reset();
    onOpenChange(v);
  };

  const handleExtract = async () => {
    if (!file) return;
    setExtracting(true);
    try {
      const buffer = await file.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));

      const { data, error } = await supabase.functions.invoke("parse-document", {
        body: { mode: "beneficios", file: base64 },
      });

      if (error) throw error;

      const beneficios = (data?.beneficios || []).map((b: { nome: string; descricao: string; categoria: string }) => ({
        ...b,
        selected: true,
      }));

      if (beneficios.length === 0) {
        toast.info("Nenhum benefício encontrado no documento");
        return;
      }

      setResults(beneficios);
      setStep("preview");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao processar documento");
    } finally {
      setExtracting(false);
    }
  };

  const handleImport = async () => {
    const selected = results.filter(r => r.selected);
    if (selected.length === 0) return;
    setImporting(true);
    try {
      await onImport(selected.map(({ nome, descricao, categoria }) => ({ nome, descricao, categoria })));
      handleClose(false);
    } finally {
      setImporting(false);
    }
  };

  const toggleItem = (idx: number) => {
    setResults(prev => prev.map((r, i) => (i === idx ? { ...r, selected: !r.selected } : r)));
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Importar Documento de Benefícios</DialogTitle>
        </DialogHeader>

        {step === "upload" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ben-file">Documento</Label>
              <Input id="ben-file" type="file" accept=".pdf,.txt,.csv,.doc,.docx" onChange={e => setFile(e.target.files?.[0] || null)} />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => handleClose(false)}>Cancelar</Button>
              <Button onClick={handleExtract} disabled={!file || extracting}>
                {extracting ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Extraindo...</> : <><Upload className="h-4 w-4 mr-2" />Extrair Dados</>}
              </Button>
            </DialogFooter>
          </div>
        )}

        {step === "preview" && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{results.length} benefício(s) encontrado(s). Clique para selecionar/desmarcar.</p>
            <div className="flex flex-wrap gap-2 max-h-64 overflow-auto p-2">
              {results.map((r, i) => (
                <Badge
                  key={i}
                  variant={r.selected ? "default" : "outline"}
                  className="cursor-pointer text-sm py-1.5 px-3"
                  onClick={() => toggleItem(i)}
                >
                  {r.nome}
                  {r.categoria && <span className="ml-1 opacity-60">({r.categoria})</span>}
                </Badge>
              ))}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setStep("upload")}>Voltar</Button>
              <Button onClick={handleImport} disabled={importing || results.filter(r => r.selected).length === 0}>
                {importing ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Importando...</> : `Importar ${results.filter(r => r.selected).length} benefício(s)`}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImportBeneficiosDialog;
