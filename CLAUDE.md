# Benefícios — PDI Blips

## Visão Geral

Módulo de gestão de benefícios. Mantém um catálogo de benefícios disponíveis e permite a atribuição desses benefícios a colaboradores individuais. Suporta importação em massa além de cadastro manual.

---

## Arquivos

| Arquivo | Descrição |
|---------|-----------|
| `src/pages/Beneficios.tsx` | Página principal — catálogo de benefícios e atribuições por colaborador |
| `src/components/beneficios/BeneficioForm.tsx` | Formulário (Dialog) para criar/editar benefício no catálogo |
| `src/components/beneficios/ImportBeneficiosDialog.tsx` | Dialog para importação em massa de benefícios via documento |
| `src/hooks/useBeneficios.ts` | CRUD de `pdi_beneficios` e `pdi_colaborador_beneficios` via React Query |

---

## Contexto Técnico

### Tabelas Envolvidas

| Tabela | Descrição |
|--------|-----------|
| `pdi_beneficios` | Catálogo de benefícios — campos: `nome`, `descricao`, `tipo`, `valor_referencia` |
| `pdi_colaborador_beneficios` | Atribuição de benefício a colaborador — campos: `colaborador_id`, `beneficio_id`, `data_inicio`, `data_fim`, `observacoes` |

### Arquitetura Catálogo + Atribuição

O módulo opera em dois níveis:

**Nível 1 — Catálogo (`pdi_beneficios`)**:
- Cadastro centralizado de todos os tipos de benefício disponíveis na organização
- Gerenciado via `BeneficioForm` e importação

**Nível 2 — Atribuição (`pdi_colaborador_beneficios`)**:
- Registro de quais benefícios cada colaborador possui
- Um colaborador pode ter múltiplos benefícios
- Um benefício pode ser atribuído a múltiplos colaboradores (relação N:N)

```ts
// Exemplo de query de benefícios de um colaborador
const { data } = useQuery({
  queryKey: ['pdi_colaborador_beneficios', colaboradorId],
  queryFn: () =>
    supabase
      .from('pdi_colaborador_beneficios')
      .select('*, pdi_beneficios(*)')
      .eq('colaborador_id', colaboradorId)
})
```

### Padrão de Importação

`ImportBeneficiosDialog` segue o mesmo padrão de `ImportDocumentDialog` do módulo salários:
1. Upload de documento (CSV/Excel)
2. Parse no cliente
3. Insert em batch em `pdi_beneficios`

---

## Imports

```ts
import { useBeneficios } from '@beneficios/hooks/useBeneficios'
import BeneficioForm from '@beneficios/components/beneficios/BeneficioForm'
import ImportBeneficiosDialog from '@beneficios/components/beneficios/ImportBeneficiosDialog'
```

---

## Restrições

1. **Atribuição não exclui do catálogo**: deletar um benefício do catálogo deve verificar se há atribuições ativas antes de prosseguir
2. **`data_fim` nullable**: benefício ativo tem `data_fim = null`; benefício encerrado tem data preenchida
3. **Sem duplicação**: um colaborador não pode ter o mesmo benefício ativo duas vezes (validar antes de inserir)

---

## Modo Standalone vs Delegado

**Standalone**: clonar para trabalhar no catálogo de benefícios e atribuições de forma isolada.

**Delegado**: o orquestrador injeta este módulo ao coordenar tarefas que relacionem benefícios com colaboradores (organograma) ou com visão consolidada de custo (salários + benefícios).
