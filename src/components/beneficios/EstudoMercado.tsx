import { useState } from "react";
import {
  estudoData,
  CATEGORY_CONFIG,
  type BeneficioEstudo,
  type Prevalencia,
  type Tributario,
  type GlossarioTerm,
  type TipoILP,
  type TipoVesting,
  type ErroComum,
} from "@beneficios/data/estudoMercadoData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ─── helpers ────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
      {children}
    </p>
  );
}

function SectionValue({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-foreground ${className ?? ""}`}>{children}</p>;
}

function FullWidthField({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="col-span-2">
      <SectionLabel>{label}</SectionLabel>
      <SectionValue className={className}>{value}</SectionValue>
    </div>
  );
}

function HalfField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <SectionValue>{value}</SectionValue>
    </div>
  );
}

function tributarioBadge(value: string) {
  const lower = value.toLowerCase();
  if (lower.includes("não incide") || lower.includes("isento") || lower.includes("não incide")) {
    return (
      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30 whitespace-pre-line text-xs">
        {value}
      </Badge>
    );
  }
  if (lower.includes("incide") || lower.includes("27,5")) {
    return (
      <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/30 whitespace-pre-line text-xs">
        {value}
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="whitespace-pre-line text-xs">
      {value}
    </Badge>
  );
}

function naturezaColor(natureza: string) {
  if (natureza.toLowerCase().includes("mercantil")) return "text-green-600";
  if (natureza.toLowerCase().includes("remuneratória")) return "text-red-600";
  return "text-orange-500";
}

function tributacaoILPColor(tributacao: string) {
  if (tributacao.includes("MELHOR") || tributacao.includes("🟢")) return "text-green-600";
  if (tributacao.includes("PIOR") || tributacao.includes("🔴")) return "text-red-600";
  return "text-orange-500";
}

function relevanciaVariant(relevancia: string): string {
  if (relevancia.toUpperCase().includes("CRÍTICO")) return "bg-red-500/10 text-red-600 border-red-500/30";
  if (relevancia.toUpperCase().includes("ALTO")) return "bg-orange-500/10 text-orange-600 border-orange-500/30";
  return "bg-blue-500/10 text-blue-600 border-blue-500/30";
}

// ─── Tab 1: Mapa Completo ────────────────────────────────────────────────────

function TabMapa() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const categories = Array.from(
    new Map(
      (estudoData.benefits as BeneficioEstudo[]).map((b) => [b.cat_num, b.categoria])
    ).entries()
  );

  const filtered = (estudoData.benefits as BeneficioEstudo[]).filter((b) => {
    const matchesCategory = activeCategory === "todos" || b.cat_num === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      b.beneficio.toLowerCase().includes(q) ||
      b.como_funciona.toLowerCase().includes(q) ||
      b.categoria.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Mapa Completo de Benefícios</h2>
        <p className="text-sm text-muted-foreground">
          33 benefícios em 10 categorias — Pesquisa de Mercado 2025–2026
        </p>
      </div>

      <Input
        placeholder="Buscar benefício..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("todos")}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            activeCategory === "todos"
              ? "bg-primary text-primary-foreground"
              : "border border-border hover:border-primary text-muted-foreground"
          }`}
        >
          Todos
        </button>
        {categories.map(([num]) => (
          <button
            key={num}
            onClick={() => setActiveCategory(num)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              activeCategory === num
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:border-primary text-muted-foreground"
            }`}
          >
            {CATEGORY_CONFIG[num]?.lbl ?? num}
          </button>
        ))}
      </div>

      <Accordion type="multiple" className="space-y-2">
        {filtered.map((b, idx) => {
          const cfg = CATEGORY_CONFIG[b.cat_num];
          return (
            <AccordionItem
              key={`${b.cat_num}-${idx}`}
              value={`item-${b.cat_num}-${idx}`}
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline py-3">
                <span className="flex items-center gap-2 text-left">
                  {cfg && (
                    <Badge
                      variant="outline"
                      className={`${cfg.colorClass} text-xs shrink-0`}
                    >
                      {cfg.lbl}
                    </Badge>
                  )}
                  <span className="font-medium text-foreground">
                    {b.beneficio}
                    {b.subcategoria && (
                      <span className="text-muted-foreground font-normal">
                        {" "}— {b.subcategoria}
                      </span>
                    )}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 pb-4">
                  <FullWidthField label="Como Funciona" value={b.como_funciona} />
                  <HalfField label="Prevalência" value={b.prevalencia} />
                  <HalfField label="Elegibilidade" value={b.elegibilidade} />
                  <HalfField label="Valor Referência" value={b.valor} />
                  <HalfField label="Custeio" value={b.custeio} />
                  <HalfField label="Tributação Executivo" value={b.trib_exec} />
                  <HalfField label="Tributação Empresa" value={b.trib_empresa} />
                  <HalfField label="Obrigatório" value={b.obrigatorio} />
                  <HalfField label="Tendência" value={b.tendencia} />
                  <FullWidthField
                    label="Base Legal"
                    value={b.base_legal}
                    className="font-mono text-xs"
                  />
                  {b.obs && (
                    <FullWidthField
                      label="Obs. Estratégica"
                      value={b.obs}
                      className="italic text-muted-foreground"
                    />
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

// ─── Tab 2: Prevalência ──────────────────────────────────────────────────────

function TabPrevalencia() {
  const rows = estudoData.prevalencia as Prevalencia[];
  const sources = Array.from(
    new Set(rows.flatMap((r) => (r.fonte ? [r.fonte] : [])))
  )
    .slice(0, 3)
    .join(" · ");

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Prevalência por Nível Hierárquico
        </h2>
        <p className="text-sm text-muted-foreground">{sources}</p>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span>✅ &gt;90%</span>
        <span>🔵 70–90%</span>
        <span>🟡 40–70%</span>
        <span>🔶 20–40%</span>
        <span>❌ &lt;20%</span>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[160px]">Benefício</TableHead>
              <TableHead className="text-center">CEO</TableHead>
              <TableHead className="text-center">C-Level</TableHead>
              <TableHead className="text-center">Diretor</TableHead>
              <TableHead className="text-center">Ger. Sênior</TableHead>
              <TableHead className="text-center">Gerente</TableHead>
              <TableHead className="min-w-[200px]">Notas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium text-sm">{r.beneficio}</TableCell>
                <TableCell className="text-center text-base">{r.ceo}</TableCell>
                <TableCell className="text-center text-base">{r.clevel}</TableCell>
                <TableCell className="text-center text-base">{r.diretor}</TableCell>
                <TableCell className="text-center text-base">{r.ger_senior}</TableCell>
                <TableCell className="text-center text-base">{r.gerente}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{r.notas}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ─── Tab 3: Tributário ───────────────────────────────────────────────────────

function TabTributario() {
  const rows = estudoData.tributario as Tributario[];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Resumo Tributário</h2>
        <p className="text-sm text-muted-foreground">
          Atualizado com STJ Set/2024 · CARF Ago/2025
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[160px]">Benefício</TableHead>
              <TableHead>Natureza</TableHead>
              <TableHead>IR Executivo</TableHead>
              <TableHead>INSS Executivo</TableHead>
              <TableHead>INSS Patronal</TableHead>
              <TableHead>Dedutível</TableHead>
              <TableHead className="min-w-[160px]">Base Legal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium text-sm">{r.beneficio}</TableCell>
                <TableCell>
                  <span className={`text-sm font-medium ${naturezaColor(r.natureza)}`}>
                    {r.natureza}
                  </span>
                </TableCell>
                <TableCell>{tributarioBadge(r.ir_exec)}</TableCell>
                <TableCell>{tributarioBadge(r.inss_exec)}</TableCell>
                <TableCell>{tributarioBadge(r.inss_patronal)}</TableCell>
                <TableCell>
                  <span className="text-sm">{r.dedutivel}</span>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground font-mono">
                  {r.base_legal}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ─── Tab 4: Glossário ────────────────────────────────────────────────────────

function TabGlossario() {
  const terms = estudoData.glossario as GlossarioTerm[];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Glossário — Equity & Vesting</h2>
        <p className="text-sm text-muted-foreground">
          {terms.length} termos fundamentais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {terms.map((t, idx) => (
          <Card key={idx} className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{t.termo}</CardTitle>
              <p className="text-xs text-muted-foreground">{t.traducao}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground">{t.definicao}</p>
              {t.exemplo && (
                <p className="text-xs text-muted-foreground italic">💡 {t.exemplo}</p>
              )}
              <Badge
                variant="outline"
                className={`text-xs ${relevanciaVariant(t.relevancia)}`}
              >
                {t.relevancia.replace(/^[^\s]+\s/, "")}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Tab 5: Tipos de ILP ─────────────────────────────────────────────────────

function TabILP() {
  const items = estudoData.tipos_ilp as TipoILP[];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Tipos de Incentivo de Longo Prazo
        </h2>
        <p className="text-sm text-muted-foreground">
          {items.length} instrumentos — tributação 2025
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 flex-wrap">
                {item.sigla !== "—" && (
                  <Badge variant="default" className="text-xs">
                    {item.sigla}
                  </Badge>
                )}
                <CardTitle className="text-base">{item.tipo}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <SectionLabel>Como funciona</SectionLabel>
                <SectionValue>{item.como}</SectionValue>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <SectionLabel>Paga?</SectionLabel>
                  <SectionValue>{item.paga}</SectionValue>
                </div>
                <div>
                  <SectionLabel>Recebe</SectionLabel>
                  <SectionValue>{item.recebe}</SectionValue>
                </div>
              </div>
              <div>
                <SectionLabel>Tributação</SectionLabel>
                <p className={`text-sm font-medium ${tributacaoILPColor(item.tributacao)}`}>
                  {item.tributacao}
                </p>
              </div>
              {item.melhor_para && (
                <div>
                  <SectionLabel>Melhor para</SectionLabel>
                  <SectionValue>{item.melhor_para}</SectionValue>
                </div>
              )}
              {item.obs && (
                <div className="border-l-2 border-orange-400 pl-3">
                  <p className="text-xs text-muted-foreground">⚠️ {item.obs}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Tab 6: Vesting ──────────────────────────────────────────────────────────

function TabVesting() {
  const items = estudoData.tipos_vesting as TipoVesting[];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Tipos de Vesting</h2>
        <p className="text-sm text-muted-foreground">
          {items.length} modelos de retenção
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.tipo}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <SectionLabel>Como funciona</SectionLabel>
                  <SectionValue>{item.como}</SectionValue>
                </div>
                <div>
                  <SectionLabel>Estrutura</SectionLabel>
                  <SectionValue>{item.estrutura}</SectionValue>
                </div>
                <div>
                  <SectionLabel>Quando usar</SectionLabel>
                  <SectionValue>{item.quando_usar}</SectionValue>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <SectionLabel>Vantagens</SectionLabel>
                  <p className="text-sm text-green-600">{item.vantagens}</p>
                </div>
                <div>
                  <SectionLabel>Desvantagens</SectionLabel>
                  <p className="text-sm text-red-600">{item.desvantagens}</p>
                </div>
              </div>
              {item.exemplo_blips && (
                <div className="mt-3 bg-muted/40 rounded-md p-3">
                  <SectionLabel>Exemplo Blips/Finza</SectionLabel>
                  <SectionValue>{item.exemplo_blips}</SectionValue>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Tab 7: Erros Comuns ─────────────────────────────────────────────────────

function TabErros() {
  const items = estudoData.erros as ErroComum[];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Erros Mais Comuns na Implementação de Equity
        </h2>
        <p className="text-sm text-muted-foreground">
          {items.length} armadilhas
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <Card key={idx} className="border-l-4 border-l-destructive">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-destructive">{item.erro}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <SectionLabel>Consequência</SectionLabel>
                  <SectionValue>{item.consequencia}</SectionValue>
                </div>
                <div>
                  <SectionLabel>Como Evitar</SectionLabel>
                  <SectionValue>{item.como_evitar}</SectionValue>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

const EstudoMercado = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="mapa">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="mapa">Mapa Completo</TabsTrigger>
          <TabsTrigger value="prevalencia">Prevalência</TabsTrigger>
          <TabsTrigger value="tributario">Tributário</TabsTrigger>
          <TabsTrigger value="glossario">Glossário ILP</TabsTrigger>
          <TabsTrigger value="ilp">Tipos de ILP</TabsTrigger>
          <TabsTrigger value="vesting">Vesting</TabsTrigger>
          <TabsTrigger value="erros">Erros Comuns</TabsTrigger>
        </TabsList>

        <TabsContent value="mapa" className="mt-4">
          <TabMapa />
        </TabsContent>
        <TabsContent value="prevalencia" className="mt-4">
          <TabPrevalencia />
        </TabsContent>
        <TabsContent value="tributario" className="mt-4">
          <TabTributario />
        </TabsContent>
        <TabsContent value="glossario" className="mt-4">
          <TabGlossario />
        </TabsContent>
        <TabsContent value="ilp" className="mt-4">
          <TabILP />
        </TabsContent>
        <TabsContent value="vesting" className="mt-4">
          <TabVesting />
        </TabsContent>
        <TabsContent value="erros" className="mt-4">
          <TabErros />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EstudoMercado;
