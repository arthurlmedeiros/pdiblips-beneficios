// Pesquisa de Mercado — Benefícios Executivos Brasil 2025–2026
// Fonte: Carreira Muller, Page Executive, Robert Half 2026

export const CATEGORY_CONFIG: Record<string, { lbl: string; colorClass: string }> = {
  '1': { lbl: 'Variável ICP', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
  '2': { lbl: 'ILP / Equity', colorClass: 'bg-green-500/10 text-green-400 border-green-500/30' },
  '3': { lbl: 'Saúde', colorClass: 'bg-red-500/10 text-red-400 border-red-500/30' },
  '4': { lbl: 'Mobilidade', colorClass: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
  '5': { lbl: 'Previdência', colorClass: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
  '6': { lbl: 'Educação', colorClass: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' },
  '7': { lbl: 'Moradia', colorClass: 'bg-sky-500/10 text-sky-400 border-sky-500/30' },
  '8': { lbl: 'Bem-Estar', colorClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  '9': { lbl: 'Flexibilidade', colorClass: 'bg-gray-500/10 text-gray-400 border-gray-500/30' },
  '10': { lbl: 'Outros', colorClass: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
};

export type BeneficioEstudo = {
  cat_num: string;
  categoria: string;
  beneficio: string;
  subcategoria: string;
  como_funciona: string;
  prevalencia: string;
  elegibilidade: string;
  valor: string;
  custeio: string;
  trib_exec: string;
  trib_empresa: string;
  obrigatorio: string;
  tendencia: string;
  base_legal: string;
  obs: string;
};

export type Prevalencia = {
  beneficio: string;
  ceo: string;
  clevel: string;
  diretor: string;
  ger_senior: string;
  gerente: string;
  notas: string;
  fonte?: string;
};

export type Tributario = {
  beneficio: string;
  natureza: string;
  ir_exec: string;
  inss_exec: string;
  inss_patronal: string;
  dedutivel: string;
  base_legal: string;
};

export type GlossarioTerm = {
  termo: string;
  traducao: string;
  definicao: string;
  como?: string;
  exemplo?: string;
  relevancia: string;
};

export type TipoILP = {
  sigla: string;
  tipo: string;
  como: string;
  paga: string;
  recebe: string;
  tributacao: string;
  melhor_para?: string;
  fintechs?: string;
  obs?: string;
};

export type TipoVesting = {
  tipo: string;
  como: string;
  estrutura: string;
  vantagens: string;
  desvantagens: string;
  quando_usar: string;
  exemplo_blips?: string;
};

export type ErroComum = {
  erro: string;
  consequencia: string;
  como_evitar: string;
};

export const estudoData = {
  benefits: [
  {
    cat_num: "1",
    categoria: "1 – Remun. Variável (Curto Prazo – ICP)",
    beneficio: "Bônus Anual de Desempenho (Performance Bonus)",
    subcategoria: "ICP Individual / Empresa",
    como_funciona: "Pago 1x/ano após avaliação de metas (KPIs). Estruturado com 'aceleradores' (paga mais se supera meta) e 'redutores' (paga menos se fica abaixo). Metas podem ser: Financeiras (EBITDA, Receita, Lucro), Operacionais (KPIs de área) e Individuais (OKRs). Pago em dinheiro.",
    prevalencia: "~50% dos executivos BR (RH 2026). Quase universal em grandes empresas.",
    elegibilidade: "A partir de Gerente Sênior; obrigatório para C-Level",
    valor: "20–100% do salário fixo anual para diretores; 100–300% para CEOs de grandes empresas",
    custeio: "100% empresa",
    trib_exec: "IRPF tabela progressiva até 27,5% + INSS",
    trib_empresa: "Dedutível como despesa operacional (Lucro Real). Incide INSS patronal (20%)",
    obrigatorio: "Não obrigatório por lei; comum em política interna",
    tendencia: "🔺 Alta. 55% dos profissionais veem como fator decisivo (MP 2026)",
    base_legal: "Lei 10.101/2000 (PLR); Robert Half 2026; Page Executive 2025",
    obs: "Diferença entre bônus discricionário e PLR: o PLR tem regras específicas (Lei 10.101). Confundir os dois gera risco trabalhista e fiscal."
  },
  {
    cat_num: "1",
    categoria: "1 – Remun. Variável (Curto Prazo – ICP)",
    beneficio: "PLR – Participação nos Lucros e Resultados",
    subcategoria: "ICP Coletivo / Empresa",
    como_funciona: "Distribuição de parte dos lucros/resultados. Negociado com sindicato ou comissão paritária. Pago até 2x/ano com intervalo mínimo de 90 dias entre parcelas. Critérios: lucro líquido, EBITDA, metas operacionais. ISENTO de INSS/FGTS quando cumprida a lei. Tabela IR exclusiva.",
    prevalencia: "~50% dos executivos BR (RH 2026). Quase universal em empresas médias e grandes.",
    elegibilidade: "Todos os CLTs. Diretores estatutários: aplica-se IR mas não isenção previdenciária.",
    valor: "Equivalente a 1–6 salários mensais dependendo do cargo e da empresa",
    custeio: "100% empresa; empregado pode co-contribuir opcionalmente",
    trib_exec: "IRPF tabela exclusiva progressiva: isento até R$7.311 (2025); alíquota máx 27,5%",
    trib_empresa: "Dedutível no Lucro Real. ISENTO de INSS patronal e FGTS (quando regular)",
    obrigatorio: "Não obrigatório; obrigatório se previsto em convenção coletiva",
    tendencia: "🔺 Alta. Quase metade recebe PLR (RH 2026). Foco crescente em metas ESG",
    base_legal: "Lei 10.101/2000; CF/88 art.7º XI; IN RFB 1.515/2014",
    obs: "ATENÇÃO: pagamento mensal descaracteriza PLR → vira salário (incide INSS/FGTS). Registro no sistema Mediador (MTE) obrigatório desde 2022."
  },
  {
    cat_num: "1",
    categoria: "1 – Remun. Variável (Curto Prazo – ICP)",
    beneficio: "Bônus de Contratação (Signing Bonus / Hiring Bonus)",
    subcategoria: "Bônus de Atração",
    como_funciona: "Pago na admissão para compensar o executivo por abrir mão de benefícios da empresa anterior (bônus pendente, vesting em curso, etc). Pode ser parcelado em 2–3 anos com cláusula de 'clawback' (devolução proporcional se sair antes do prazo).",
    prevalencia: "Prática comum para C-Level e diretores em posições críticas. Muito usado em fintechs e tech.",
    elegibilidade: "C-Level e Diretores",
    valor: "Equivalente a 1–6 salários mensais. Pode chegar a 12 salários em casos excepcionais.",
    custeio: "100% empresa",
    trib_exec: "IRPF tabela progressiva até 27,5% + INSS. CARF (Ago/2025) considerou remuneratório.",
    trib_empresa: "Dedutível como despesa. Incide INSS patronal e FGTS",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. Fintechs e big techs usam intensamente para atrair talentos de concorrentes",
    base_legal: "CARF Acórdão 2201-012.154/2025; Robert Half 2025",
    obs: "Cláusula de clawback é fortemente recomendada. Sem ela, a empresa não pode exigir devolução se o executivo sair antes do prazo."
  },
  {
    cat_num: "1",
    categoria: "1 – Remun. Variável (Curto Prazo – ICP)",
    beneficio: "Bônus de Retenção (Retention Bonus)",
    subcategoria: "Bônus de Permanência",
    como_funciona: "Pago para reter executivo em momentos críticos (fusões, M&A, reestruturações, projetos estratégicos). Geralmente pago em parcelas ao longo de 1–3 anos, condicionado à permanência. Clawback proporcional em caso de saída antecipada.",
    prevalencia: "~30–40% das empresas em processo de M&A ou reestruturação (estimativa mercado)",
    elegibilidade: "C-Level, Diretores e posições-chave",
    valor: "Equivalente a 3–12 salários mensais",
    custeio: "100% empresa",
    trib_exec: "IRPF tabela progressiva até 27,5% + INSS. CARF: natureza remuneratória.",
    trib_empresa: "Dedutível. Incide INSS patronal e FGTS",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. Mercado de M&A em recuperação em 2025–2026 aumenta a demanda",
    base_legal: "CARF Acórdão 2201-012.154/2025; Page Executive 2025",
    obs: "Muito usado em M&A. O executivo-chave que aceita ficar durante a integração pós-aquisição quase sempre negocia retention bonus."
  },
  {
    cat_num: "2",
    categoria: "2 – Incentivos de Longo Prazo (ILP)",
    beneficio: "Stock Options (Plano de Opções de Compra de Ações)",
    subcategoria: "ILP – Equity / Mercantil",
    como_funciona: "Direito de comprar ações da empresa a preço pré-fixado (strike price) após período de vesting (geralmente 3–5 anos). Vesting pode ser cliff (tudo de uma vez) ou gradual. Se a ação valorizar, o executivo ganha a diferença. Há risco de a ação não valorizar. STJ Set/2024: natureza mercantil.",
    prevalencia: "Empresas abertas: quase universal. Fintechs/tech: crescente. Empresas nacionais fechadas: ~15–20% (PE 2016→2025).",
    elegibilidade: "C-Level e Diretores estatutários; ampliando para gerentes sênior",
    valor: "Variável. Em empresas abertas pode representar 50–200% do fixo anual. Em fintechs pré-IPO: pode superar o fixo em 10–50x.",
    custeio: "Empresa (emite opções); executivo paga o strike price para exercer",
    trib_exec: "STJ Set/2024: NATUREZA MERCANTIL. Tributação: 15% de ganho de capital na venda das ações. NÃO incide IRPF tabela progressiva nem INSS na aquisição.",
    trib_empresa: "NÃO incide INSS patronal nem FGTS (natureza mercantil per STJ). Despesa dedutível no exercício da concessão da opção.",
    obrigatorio: "Não obrigatório. Voluntário e regulado internamente",
    tendencia: "🔺🔺 Muito Alta. STJ Set/2024 definiu mercantil: incentivou adoção. CARF 2025: suspendeu cobrança de INSS.",
    base_legal: "Lei 6.404/1976 art.168; STJ Tema 1.226 (Set/2024); CARF Acórdão 2201-012.154 (Ago/2025); PRIS Blog 2025",
    obs: "ATENÇÃO: STJ decidiu mercantil em Set/2024 mas CARF ainda tem decisões divergentes (Matching Shares, RSU). Acompanhe jurisprudência. Cláusula de vesting + clawback são essenciais."
  },
  {
    cat_num: "2",
    categoria: "2 – Incentivos de Longo Prazo (ILP)",
    beneficio: "RSU – Restricted Stock Units (Ações Restritas)",
    subcategoria: "ILP – Equity / Remuneratório",
    como_funciona: "Executivo recebe ações GRATUITAMENTE após período de vesting (tempo de permanência). Sem custo de aquisição para o executivo — por isso o CARF tende a classificar como remuneratório. STJ: em análise diferenciada vs. Stock Options.",
    prevalencia: "Muito comum em multinacionais e empresas listadas em bolsa. Crescendo em big techs brasileiras.",
    elegibilidade: "C-Level, VP e Diretores de multinacionais",
    valor: "Usualmente 20–60% do salário fixo anual em valor de ações",
    custeio: "100% empresa (ações emitidas gratuitamente)",
    trib_exec: "CARF Ago/2025: manteve natureza REMUNERATÓRIA. Incide IRPF até 27,5% + INSS no recebimento das ações.",
    trib_empresa: "Incide INSS patronal (20%) e FGTS sobre valor das ações no vesting. Dedutível como despesa.",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta mas com risco fiscal crescente. CARF mantém remuneratório. Empresas buscam estruturar como mercantil.",
    base_legal: "CARF Acórdão 2201-012.154 (Ago/2025); STJ Tema 1.226; APET 2024",
    obs: "RSU é diferente de Stock Options: executivo não paga nada (recebe grátis). Por isso tem tratamento tributário diferente (menos favorável). Use com aconselhamento jurídico especializado."
  },
  {
    cat_num: "2",
    categoria: "2 – Incentivos de Longo Prazo (ILP)",
    beneficio: "Phantom Shares (Ações Fantasmas)",
    subcategoria: "ILP – Sintético / Remuneratório",
    como_funciona: "Executivo recebe um 'direito econômico' equivalente ao valor de ações, mas SEM receber ações reais. Pago em dinheiro (cash-settled) no vesting. Muito usado em empresas fechadas que não têm ações em bolsa. Simula a valorização da empresa sem diluir sócios.",
    prevalencia: "Crescente em fintechs, startups e empresas fechadas de médio/grande porte.",
    elegibilidade: "C-Level e Diretores de empresas fechadas",
    valor: "Variável. Atrelado ao valuation da empresa. Em empresas bem-sucedidas pode ser muito expressivo.",
    custeio: "100% empresa (pago em dinheiro no vesting)",
    trib_exec: "Natureza REMUNERATÓRIA (CARF Ago/2025). Incide IRPF até 27,5% + INSS no recebimento.",
    trib_empresa: "Incide INSS patronal e FGTS. Dedutível como despesa.",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. Empresas fechadas adotam como alternativa às stock options. Fintechs pré-IPO.",
    base_legal: "CARF Acórdão 2201-012.154 (Ago/2025); Distu.com.br 2025; PRIS Blog 2025",
    obs: "Perfeita para empresas que não querem ou não podem emitir ações. Permite alinhar interesse de longo prazo sem diluição societária. Preferida de fintechs pré-IPO como a Blips/Finza."
  },
  {
    cat_num: "2",
    categoria: "2 – Incentivos de Longo Prazo (ILP)",
    beneficio: "Matching Shares (Ações Matching)",
    subcategoria: "ILP – Co-investimento / Remuneratório",
    como_funciona: "Empresa concede ações GRATUITAS como contrapartida ao investimento do próprio executivo. Ex: para cada ação que o executivo comprar com seu dinheiro, a empresa 'dá' 1 ação extra. Condicionado ao período de permanência (vesting temporal).",
    prevalencia: "Comum em grandes corporações nacionais e multinacionais com ações em bolsa.",
    elegibilidade: "C-Level e Diretores com capacidade de co-investimento",
    valor: "Variável. Proporcional ao investimento do executivo. Pode representar 20–80% do fixo.",
    custeio: "Empresa (ações gratuitas); Executivo (ações compradas com recurso próprio)",
    trib_exec: "CARF Ago/2025: REMUNERATÓRIO. Incide IRPF até 27,5% + INSS sobre a parte gratuita.",
    trib_empresa: "Incide INSS patronal e FGTS sobre ações concedidas gratuitamente. Dedutível.",
    obrigatorio: "Não obrigatório",
    tendencia: "➡ Estável. CARF mantém remuneratório, diferente das stock options.",
    base_legal: "CARF Acórdão 2201-012.154 (Ago/2025); PRIS Blog 2025",
    obs: "Bom alinhamento de interesses: executivo só ganha ações extras se investir o próprio dinheiro. Sinal forte de comprometimento."
  },
  {
    cat_num: "2",
    categoria: "2 – Incentivos de Longo Prazo (ILP)",
    beneficio: "Partnership / Programa de Sócios",
    subcategoria: "ILP – Equity / Participação Societária",
    como_funciona: "Executivo vira sócio (minoritário) da empresa através de compra de quotas/ações a preço subsidiado. Mecanismo de retenção de longo prazo. Pode incluir 'put option' (direito de vender de volta à empresa) ou 'drag-along/tag-along'. Muito usado em consultorias, bancos e fintechs.",
    prevalencia: "Bancos de investimento, consultorias e fintechs de alto crescimento. PRIS/AGO2026: estratégia dos bancos.",
    elegibilidade: "C-Level e Top Performers identificados como 'sócios em potencial'",
    valor: "Variável. A participação pode valer de R$500k a R$50M+ dependendo do valuation da empresa.",
    custeio: "Executivo investe capital próprio a preço subsidiado. Empresa oferece financiamento em alguns casos.",
    trib_exec: "Ganho de capital na venda: 15–22,5% (STJ: mercantil). Dividendos: isentos (PJ) ou tributados (PF).",
    trib_empresa: "Empresa não tem custo direto. Pode deduzir juros de financiamento concedido ao sócio.",
    obrigatorio: "Não obrigatório; altamente estratégico",
    tendencia: "🔺🔺 Muito Alta. Fintechs e startups em crescimento adotam extensivamente.",
    base_legal: "Lei 6.404/1976; STJ Tema 1.226; PRIS AGO 2026 (estratégia bancos)",
    obs: "Mecanismo definitivo de retenção de longo prazo. Quando o executivo é sócio, pensa como dono. Essencial para empresas em preparação para IPO ou captação de rodadas."
  },
  {
    cat_num: "3",
    categoria: "3 – Saúde e Proteção",
    beneficio: "Plano de Saúde Premium (Assistência Médica)",
    subcategoria: "Benefício Obrigatório\n(por negociação)",
    como_funciona: "Plano de saúde coletivo empresarial. Para executivos: plano premium sem coparticipação, rede ampla (hospitais premium como Albert Einstein, Sírio-Libanês), coberturas especiais (check-up executivo, saúde mental, telemedicina). Operadoras: Omint, Amil Black, Bradesco Saúde Top, Porto Saúde.",
    prevalencia: "100% para CEO/VP (Carreira Muller). 96% para Diretores. 82% para Gerentes Sênior.",
    elegibilidade: "A partir de Gerente. Premium para C-Level.",
    valor: "R$800–R$2.500/vida/mês para executivos (planos premium). Em grandes empresas: sem limite de internação, cobertura global.",
    custeio: "Empresa paga 100% (executivos). Dependentes: pode ter coparticipação ou custeio parcial.",
    trib_exec: "VALOR DO BENEFÍCIO: não integra base IR quando limitado a serviços médicos. Eventual reembolso em dinheiro: incide IR.",
    trib_empresa: "Não dedutível como despesa de pessoal (custo assistencial). Dedutível em alguns regimes.",
    obrigatorio: "Não obrigatório por lei (CLT). Comum em CCT para algumas categorias.",
    tendencia: "🔺 Alta. Tendência: planos com saúde mental, telemedicina e medicina preventiva",
    base_legal: "ANS (RN 565/22); Carreira Muller Consultoria; Benefícios RH 2026; Michael Page 2026",
    obs: "Plano premium (Omint, Amil Black) é sinal de status e atrai executivos. Estender a dependentes (incluindo pais) é diferencial para C-Level."
  },
  {
    cat_num: "3",
    categoria: "3 – Saúde e Proteção",
    beneficio: "Plano Odontológico",
    subcategoria: "Benefício Complementar",
    como_funciona: "Plano odontológico coletivo empresarial. Para executivos: planos premium com procedimentos estéticos, ortodontia, implantes. Geralmente incluído junto ao plano de saúde. Operadoras: Odontoprev, Sorridents, Porto Seguro Odonto.",
    prevalencia: "~80–90% dos executivos com plano de saúde recebem odonto também.",
    elegibilidade: "A partir de Gerente",
    valor: "R$50–R$200/vida/mês (planos premium)",
    custeio: "Empresa paga 100% (executivos). Dependentes: pode ter custeio parcial.",
    trib_exec: "Mesmo tratamento fiscal do plano de saúde: não integra IR como benefício direto.",
    trib_empresa: "Dedutível como despesa operacional",
    obrigatorio: "Não obrigatório",
    tendencia: "➡ Estável. Padrão de mercado.",
    base_legal: "ANS; Michael Page 2026; Robert Half 2026",
    obs: "Planos premium incluem implantes, ortodontia e clareamento — diferenciais para C-Level."
  },
  {
    cat_num: "3",
    categoria: "3 – Saúde e Proteção",
    beneficio: "Check-up Executivo Anual",
    subcategoria: "Benefício Diferencial\nde Prevenção",
    como_funciona: "Avaliação médica completa anual com bateria de exames preventivos (exames laboratoriais, cardiovasculares, oncológicos, neurológicos). Realizado em hospitais premium (Einstein, Sírio). Duração: 1–2 dias completos. Inclui consultas com especialistas e entrega de relatório personalizado.",
    prevalencia: "Quase universal para C-Level e Diretores em grandes empresas e multinacionais.",
    elegibilidade: "C-Level e Diretores. Estendendo a Gerentes Sênior.",
    valor: "R$5.000–R$20.000/executivo/ano em hospitais premium",
    custeio: "100% empresa",
    trib_exec: "Não incide IR (serviço médico direto, não dinheiro)",
    trib_empresa: "Dedutível como despesa de saúde ocupacional",
    obrigatorio: "Não obrigatório. Boa prática de governança corporativa.",
    tendencia: "🔺 Alta. Crescente como prática de bem-estar executivo e prevenção",
    base_legal: "Hunter Hunter 2025; Exame/Page Executive 2024; Robert Half 2026",
    obs: "Para empresas: proteger o executivo-chave é proteger o negócio. Risco de perda de um CEO por problema de saúde não detectado pode ser catastrófico."
  },
  {
    cat_num: "3",
    categoria: "3 – Saúde e Proteção",
    beneficio: "Seguro de Vida (Life Insurance)",
    subcategoria: "Seguro de Vida em Grupo",
    como_funciona: "Cobertura em caso de morte ou invalidez. Para executivos: coberturas de 24–72 vezes o salário mensal, incluindo morte acidental, invalidez permanente, doenças graves (câncer, AVC, infarto). Pode incluir cobertura para dependentes e cláusula de proteção de renda.",
    prevalencia: "~95% dos executivos BR. Praticamente universal.",
    elegibilidade: "Todos os colaboradores. Premium para executivos.",
    valor: "Prêmio da empresa: R$100–R$500/executivo/mês. Indenização: 24–72x salário mensal.",
    custeio: "Empresa paga 100% (ou parcela majoritária)",
    trib_exec: "Prêmio pago pela empresa: não incide IR no empregado. Indenização recebida pela família: isenta de IR.",
    trib_empresa: "Prêmio de seguro: dedutível como despesa operacional",
    obrigatorio: "Não obrigatório por lei. Altamente difundido.",
    tendencia: "➡ Estável. Padrão de mercado.",
    base_legal: "Exame/Page Executive 2024; Michael Page 2026; Hunter Hunter 2025",
    obs: "Para executivos-chave: seguros de 'Homem-Chave' (Key Man Insurance) são contratados pela empresa como beneficiária da apólice para cobrir o risco de perda do executivo. Diferente do seguro de vida do colaborador."
  },
  {
    cat_num: "3",
    categoria: "3 – Saúde e Proteção",
    beneficio: "Seguro D&O (Directors & Officers Liability)",
    subcategoria: "Seguro de Responsabilidade\nCivil de Administradores",
    como_funciona: "Protege o patrimônio pessoal de diretores/executivos contra ações judiciais movidas por acionistas, credores, reguladores ou terceiros por decisões de gestão. Cobre: custos de defesa legal, indenizações, acordos extrajudiciais. Regulado pela SUSEP no Brasil. Tem 3 coberturas: A (pessoal), B (ressarcimento empresa), C (empresa como ré).",
    prevalencia: "Praticamente universal em empresas abertas. Crescente em empresas fechadas e fintechs. Page Executive 2019: benefício já estabelecido como prática.",
    elegibilidade: "CEO, CFO, Diretores estatutários e membros do Conselho de Administração.",
    valor: "Prêmio: R$50k–R$500k/ano dependendo do porte. Limite segurado: R$10M–R$500M+.",
    custeio: "100% empresa (empresa é quem contrata e paga)",
    trib_exec: "Não incide IR no executivo (não é renda direta; é proteção patrimonial)",
    trib_empresa: "Prêmio: dedutível como despesa operacional",
    obrigatorio: "Não obrigatório por lei, mas exigido por investidores institucionais (PE, VC, fundos) como condição de investimento.",
    tendencia: "🔺🔺 Muito Alta. Ambiente regulatório mais rigoroso (CVM, Bacen) aumenta exposição dos administradores.",
    base_legal: "Page Executive 2019; Howden Brasil; Mescla Seguros 2024; SUSEP",
    obs: "Para a Finza (instituição financeira): D&O é praticamente obrigatório. Bacen e CVM responsabilizam diretores pessoalmente por decisões de gestão. Sem D&O, dificuldade de atrair executivos qualificados."
  },
  {
    cat_num: "3",
    categoria: "3 – Saúde e Proteção",
    beneficio: "Seguro de Vida Global (Expatriados)",
    subcategoria: "Seguro Internacional",
    como_funciona: "Para executivos com mobilidade internacional: cobertura de saúde e vida global, evacuação médica de emergência, cobertura por viagens, seguro bagagem e interrupção de viagem. Contratado em seguradoras internacionais como Cigna, Aetna, AXA.",
    prevalencia: "Executivos com função global ou que viajam frequentemente internacionalmente.",
    elegibilidade: "C-Level com atuação internacional",
    valor: "R$2.000–R$10.000/executivo/ano",
    custeio: "100% empresa",
    trib_exec: "Não incide IR (serviço de proteção, não dinheiro)",
    trib_empresa: "Dedutível como despesa de viagem/internacional",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. Globalização dos negócios aumenta necessidade.",
    base_legal: "Hunter Hunter 2025; prática de multinacionais",
    obs: "Fundamental para executivos que viajam a destinos de alto risco ou que trabalham em múltiplos países."
  },
  {
    cat_num: "4",
    categoria: "4 – Mobilidade",
    beneficio: "Carro da Empresa / Veículo Executivo",
    subcategoria: "Benefício de Mobilidade\n(Frota Executiva)",
    como_funciona: "Empresa disponibiliza veículo para uso profissional e/ou pessoal. Modelos: (1) Frota própria — empresa compra o carro; (2) Leasing/locação operacional — empresa aluga (Ayvens, LM Frota, Localiza); (3) Allowance — empresa paga valor fixo mensal para que executivo use carro próprio. Pode incluir blindagem, chofer, seguro e combustível.",
    prevalencia: "100% para Presidentes/VP. 96% para Diretores. 82% para Gerentes Sênior. 64% para Gerentes (Carreira Muller).",
    elegibilidade: "A partir de Gerente Sênior. Obrigatório para C-Level.",
    valor: "Custo empresa: R$2.000–R$8.000/mês (leasing + seguro + combustível). Allowance: R$1.500–R$4.000/mês.",
    custeio: "100% empresa",
    trib_exec: "IRPF: SE o carro for para uso exclusivo profissional → não incide IR. SE houver uso pessoal → o valor do benefício integra base IR (pró-labore simulado).",
    trib_empresa: "Locação: dedutível integral como despesa operacional. Compra: depreciação em 5 anos.",
    obrigatorio: "Não obrigatório por lei. Fortemente consolidado como prática.",
    tendencia: "➡ Estável. Tendência: carros elétricos/híbridos como opção executiva premium e ESG.",
    base_legal: "Carreira Muller Consultoria; Ayvens Brasil 2025; Hunter Hunter 2025; Michael Page 2026",
    obs: "Carro com chofer é o topo do pacote. Blindagem: comum para CEOs de empresas de alto perfil público. Para cargos que viajam muito: carro + cartão combustível é mais eficiente que allowance."
  },
  {
    cat_num: "4",
    categoria: "4 – Mobilidade",
    beneficio: "Allowance de Mobilidade / Combustível",
    subcategoria: "Subsídio de Transporte\nExecutivo",
    como_funciona: "Valor fixo mensal pago ao executivo para cobertura de despesas com combustível, pedágio e estacionamento. Pode ser pago junto com o salário ou como reembolso. Mais flexível que carro da empresa. Executivo usa veículo próprio.",
    prevalencia: "Prática comum para Gerentes e posições que não justificam frota.",
    elegibilidade: "A partir de Gerente",
    valor: "R$500–R$2.500/mês",
    custeio: "100% empresa",
    trib_exec: "Incide IRPF tabela progressiva se pago em dinheiro sem comprovação de despesas",
    trib_empresa: "Dedutível se comprovado uso para fins do negócio",
    obrigatorio: "Não obrigatório. Vale-transporte CLT é obrigatório, mas o allowance executivo vai além.",
    tendencia: "➡ Estável.",
    base_legal: "Robert Half 2026; Michael Page 2026; prática de mercado",
    obs: "Reembolso com nota fiscal é mais eficiente fiscalmente do que allowance fixo. Muitas empresas preferem o modelo de reembolso comprovado."
  },
  {
    cat_num: "4",
    categoria: "4 – Mobilidade",
    beneficio: "Chofer / Motorista Particular",
    subcategoria: "Serviço de Transporte\nExecutivo Exclusivo",
    como_funciona: "Empresa contrata motorista exclusivo para o executivo ou usa serviço de app executivo (99Exec, Uber Exec, Lyft Black). Opções: (1) CLT (vínculo direto com empresa); (2) Terceirizado (empresa de motoristas executivos); (3) Serviço por demanda.",
    prevalencia: "CEOs e VP-level de grandes empresas. Executivos com agenda muito densa ou de alto perfil público.",
    elegibilidade: "CEO, CFO e Diretores-Executivos sênior",
    valor: "Motorista CLT: R$5.000–R$12.000/mês. Terceirizado: R$8.000–$20.000/mês (24h). App executivo: R$2.000–R$5.000/mês.",
    custeio: "100% empresa",
    trib_exec: "Não incide IR no executivo (serviço prestado, não dinheiro)",
    trib_empresa: "Dedutível como despesa operacional",
    obrigatorio: "Não obrigatório",
    tendencia: "➡ Estável. Crescimento de serviços por demanda (app) reduz necessidade de motorista fixo.",
    base_legal: "Hunter Hunter 2025; Exame/Page Executive 2024",
    obs: "Motorista 24h é comum para CEOs com reuniões noturnas e viagens frequentes. Modelo por demanda (app) é mais flexível e pode ser mais custo-eficiente para uso não intensivo."
  },
  {
    cat_num: "5",
    categoria: "5 – Previdência e Planejamento Financeiro",
    beneficio: "Previdência Privada Corporativa (PGBL/VGBL)",
    subcategoria: "Benefício de\nAposentadoria Complementar",
    como_funciona: "Empresa contrata plano de previdência privada (Bradesco Vida, Icatu, XP, BTG). Modalidades: PGBL (deduz IR até 12% renda bruta — indicado para quem faz declaração completa) e VGBL (sem dedução mas IR incide só sobre rendimentos — indicado para simplificada). Modelos de custeio: (1) Empresa paga 100%; (2) Empresa faz matching (paridade: 1:1, 1:0,5); (3) Apenas o executivo contribui.",
    prevalencia: "~40% dos executivos BR em 2016 (PE). Tendência crescente. Gerações mais velhas priorizam mais.",
    elegibilidade: "A partir de Gerente. Contribuição diferenciada para C-Level.",
    valor: "Empresa: R$1.000–R$10.000+/mês por executivo. Executivo: pode co-contribuir. Limite de dedução PGBL: 12% da renda bruta anual.",
    custeio: "Empresa e/ou executivo (matching ou 100% empresa)",
    trib_exec: "PGBL: contribuições dedutíveis até 12% renda bruta (IR completo). Resgate: IR sobre total. VGBL: sem dedução; IR só sobre rendimentos. Regime progressivo ou regressivo (mínimo 10% após 10 anos).",
    trib_empresa: "PGBL: empresa pode deduzir como despesa operacional em até 20% da folha de pagamento (Lucro Real, BTG info).",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺🔺 Muito Alta. Preocupação com previdência pública (INSS mais restritivo) impulsiona demanda. Gerações mais velhas priorizam.",
    base_legal: "Lei 10.101/2000; Bradesco Seguros; BTG Pactual Empresas; Exame/PE 2024; Michael Page 2026",
    obs: "ATENÇÃO: Diretores estatutários contribuem ao INSS como autônomos (não segurados obrigatórios). A previdência privada é especialmente crítica para eles. Matching 1:1 tem grande poder de retenção."
  },
  {
    cat_num: "5",
    categoria: "5 – Previdência e Planejamento Financeiro",
    beneficio: "Consultoria Financeira Pessoal (Wealth Management)",
    subcategoria: "Benefício de\nGestão Patrimonial",
    como_funciona: "Empresa contrata serviço de consultoria financeira para apoiar o executivo na gestão do patrimônio pessoal: planejamento tributário, investimentos, sucessão e proteção patrimonial. Pode incluir acesso a plataformas de investimentos institucionais.",
    prevalencia: "Crescente. Prática de grandes bancos, consultorias e multinacionais para C-Level.",
    elegibilidade: "C-Level e Diretores-Executivos",
    valor: "R$500–R$5.000/mês pela consultoria (pago pela empresa)",
    custeio: "100% empresa",
    trib_exec: "Incide IR se configurado como renda (depende da estrutura contratual)",
    trib_empresa: "Dedutível como despesa de assessoria",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. Executivos de alto patrimônio cada vez mais exigem esse benefício.",
    base_legal: "Hunter Hunter 2025; prática de mercado de bancos e consultorias",
    obs: "Muitas empresas conectam o executivo ao private banking do banco parceiro como benefício gratuito. Forma elegante de agregar valor ao pacote sem custo aparente."
  },
  {
    cat_num: "6",
    categoria: "6 – Desenvolvimento e Educação",
    beneficio: "MBA / Pós-Graduação / Especialização",
    subcategoria: "Benefício de\nDesenvolvimento Executivo",
    como_funciona: "Empresa custeia total ou parcialmente MBA nacional ou internacional (FGV, Insper, FDC, Wharton, Harvard, INSEAD). Geralmente com cláusula de permanência (Payback period): executivo fica X anos ou devolve proporcionalmente. Inclui mensalidade, livros e às vezes moradia.",
    prevalencia: "~30% das empresas oferecem (MP 2026). Mais comum para executivos em desenvolvimento (40–45 anos).",
    elegibilidade: "Gerentes Sênior a Diretores em desenvolvimento de carreira",
    valor: "MBAs nacionais: R$80k–R$200k (total). Internacionais (Harvard, Wharton): R$300k–R$600k (total + moradia)",
    custeio: "Empresa paga 50–100%. Pode ter empréstimo reembolsável.",
    trib_exec: "Incide IR sobre o valor pago pela empresa como renda indireta",
    trib_empresa: "Dedutível como despesa de treinamento",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. 47% das empresas oferecem apoio/subsídio em programas educativos (MP 2026).",
    base_legal: "Michael Page Guia 2026; Robert Half 2026; Hunter Hunter 2025",
    obs: "MBA internacional com cláusula de payback de 3–5 anos é poderoso instrumento de retenção. Executivo que sai antes precisa devolver proporcionalmente."
  },
  {
    cat_num: "6",
    categoria: "6 – Desenvolvimento e Educação",
    beneficio: "Programas de Liderança e Coaching Executivo",
    subcategoria: "Desenvolvimento de\nLiderança",
    como_funciona: "Programas internos ou externos de desenvolvimento de liderança, coaching individual com coach executivo certificado (PCC ou MCC pelo ICF), mentoria com executivos sênior, participação em conferências e eventos de alto nível (Davos, Fórum Econômico, etc).",
    prevalencia: "~49% das empresas oferecem programas de liderança (MP 2026). Crescente.",
    elegibilidade: "Gerentes Sênior a C-Level",
    valor: "Coaching executivo: R$1.000–R$5.000/sessão. Programa completo: R$30k–R$150k/ano.",
    custeio: "100% empresa",
    trib_exec: "Pode incidir IR dependendo da estrutura (serviço prestado vs. bolsa educacional)",
    trib_empresa: "Dedutível como despesa de treinamento",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. Cada vez mais valorizado como parte do pacote de atração de executivos.",
    base_legal: "Michael Page 2026; Robert Half 2026",
    obs: "O coaching executivo individual é visto como sinal de investimento no profissional e eleva o engajamento e a lealdade do executivo à empresa."
  },
  {
    cat_num: "6",
    categoria: "6 – Desenvolvimento e Educação",
    beneficio: "Auxílio Educação para Dependentes",
    subcategoria: "Benefício Familiar\n(Escola dos Filhos)",
    como_funciona: "Empresa custeia total ou parcialmente escola particular, cursos de idiomas e atividades extracurriculares dos filhos do executivo. Mais comum quando há transferência de cidade. Algumas empresas oferecem como benefício padrão para C-Level.",
    prevalencia: "Benefício mais exclusivo. Comum em multinacionais e para executivos transferidos.",
    elegibilidade: "C-Level e Diretores em transferência de cidade/estado",
    valor: "R$1.500–R$8.000/filho/mês (escola internacional ou bilíngue premium)",
    custeio: "100% empresa",
    trib_exec: "Incide IR como renda indireta (benefício extensivo ao dependente)",
    trib_empresa: "Dedutível como despesa de relocação/benefícios",
    obrigatorio: "Não obrigatório",
    tendencia: "➡ Estável. Crescente em transferências internacionais e para atrair expatriados.",
    base_legal: "Exame/Page Executive 2013–2024; Hunter Hunter 2025",
    obs: "Para transferências internacionais, inclui escola internacional (IB). Poder de retenção alto: executivo não vai querer trocar de emprego durante o período escolar dos filhos."
  },
  {
    cat_num: "7",
    categoria: "7 – Moradia e Relocação",
    beneficio: "Auxílio Moradia / Aluguel Residencial",
    subcategoria: "Benefício Habitacional",
    como_funciona: "Empresa paga total ou parcialmente o aluguel do imóvel do executivo. Geralmente concedido quando há transferência de cidade ou para atrair executivo de outra cidade/país. Pode incluir condomínio, IPTU e algumas despesas fixas do imóvel.",
    prevalencia: "Mais exclusivo. Concedido em transferências ou para atrair executivos de fora.",
    elegibilidade: "C-Level e Diretores em relocação",
    valor: "R$5.000–R$25.000/mês (variam por cidade e padrão do imóvel)",
    custeio: "100% empresa",
    trib_exec: "Incide IR (é renda indireta — valor integra base de cálculo do IR)",
    trib_empresa: "Dedutível como despesa operacional/relocação",
    obrigatorio: "Não obrigatório",
    tendencia: "➡ Estável. Uso restrito a transferências.",
    base_legal: "Exame/Page Executive 2024; Hunter Hunter 2025",
    obs: "Em SP, RJ e grandes centros: aluguel de apartamento executivo (100–150m², Pinheiros, Itaim, Leblon) pode superar R$15k/mês. Incluir condomínio eleva o custo, mas facilita muito a atração."
  },
  {
    cat_num: "7",
    categoria: "7 – Moradia e Relocação",
    beneficio: "Pacote de Relocação (Relocation Package)",
    subcategoria: "Benefício de\nTransferência",
    como_funciona: "Cobre custos de mudança: transporte de móveis, hospedagem temporária (hotel/apart-hotel por 2–3 meses), visita prévia para conhecer a cidade, auxílio na busca de imóvel, matrícula escolar dos filhos, auxílio financeiro para adaptação. Para transferências internacionais: inclui orientação cultural e serviços de expatriação.",
    prevalencia: "Padrão para qualquer transferência de executivos entre cidades ou países.",
    elegibilidade: "C-Level e Diretores em transferência",
    valor: "Nacional: R$30k–R$100k (pacote completo). Internacional: R$100k–R$500k.",
    custeio: "100% empresa",
    trib_exec: "Reembolso de despesas comprovadas: não incide IR. Valores em dinheiro: incide IR.",
    trib_empresa: "Dedutível como despesa de relocação",
    obrigatorio: "Não obrigatório por lei, mas fortemente praticado",
    tendencia: "🔺 Alta. Mobilidade global de executivos crescente.",
    base_legal: "Hunter Hunter 2025; prática de multinacionais",
    obs: "Muitas empresas têm política formal de relocação com tabelas de cobertura por cargo. Executivos verificam a política antes de aceitar propostas que envolvam mudança."
  },
  {
    cat_num: "8",
    categoria: "8 – Bem-Estar e Qualidade de Vida",
    beneficio: "Gympass / Wellhub / TotalPass (Programas de Bem-Estar)",
    subcategoria: "Benefício de\nSaúde e Lazer",
    como_funciona: "Acesso a academias, estúdios de pilates/yoga, meditação, nutrição e saúde mental por meio de plataformas (Gympass/Wellhub, TotalPass). Para executivos: planos completos com acesso ilimitado às academias e estúdios parceiros premium.",
    prevalencia: "~60–70% das empresas. Michael Page lista como benefício incluído.",
    elegibilidade: "Todos os colaboradores. Executivos: plano premium.",
    valor: "R$150–R$500/executivo/mês (planos premium)",
    custeio: "Empresa paga 100% ou parcialmente",
    trib_exec: "Não incide IR (benefício de saúde preventiva)",
    trib_empresa: "Dedutível como despesa de saúde ocupacional",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺 Alta. Saúde mental e bem-estar são top of mind pós-pandemia.",
    base_legal: "Michael Page incentivos; Robert Half 2026; Wellhub 2025",
    obs: "Para C-Level: planos Ultra com acesso a academias premium (SmartFit Black, Bodytech) e serviços de meditação (Calm, Headspace) são diferenciais de bem-estar."
  },
  {
    cat_num: "8",
    categoria: "8 – Bem-Estar e Qualidade de Vida",
    beneficio: "EAP – Programa de Assistência ao Empregado",
    subcategoria: "Saúde Mental e\nAssistência Pessoal",
    como_funciona: "Serviço confidencial de apoio psicológico, jurídico e financeiro para executivos e seus dependentes. Acesso a psicólogos, advogados e consultores financeiros por um número de sessões gratuitas. Operadoras: Careplus, Sesi, empresas especializadas.",
    prevalencia: "Crescente. Michael Page lista como benefício padrão.",
    elegibilidade: "Todos os colaboradores. Executivos usam mais a parte de saúde mental.",
    valor: "R$20–R$80/vida/mês",
    custeio: "100% empresa",
    trib_exec: "Não incide IR",
    trib_empresa: "Dedutível como despesa de saúde ocupacional",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺🔺 Muito Alta. 40% dos profissionais BR sofrem de burnout (RH 2025). EAP reduz afastamentos.",
    base_legal: "Robert Half 2025; Michael Page incentivos 2024",
    obs: "Para executivos de alto cargo: a pressão é enorme. EAP de qualidade com psicólogos executivos é diferencial que poucos percebem mas muitos precisam."
  },
  {
    cat_num: "8",
    categoria: "8 – Bem-Estar e Qualidade de Vida",
    beneficio: "Day Off / Folgas Extras Remuneradas",
    subcategoria: "Benefício de\nFlexibilidade",
    como_funciona: "Dias extras de folga além das férias legais de 30 dias. Pode incluir: day off no aniversário, Sexta-feira de agosto, semana de recesso extra (dezembro/janeiro), folga por performance (quando bate meta). Modelos: dias fixos extras (5–10 dias) ou banco de horas flexível.",
    prevalencia: "Crescente. Robert Half 2026: 'mais dias de descanso' entre os mais valorizados.",
    elegibilidade: "Todos os colaboradores. Políticas diferenciadas para executivos.",
    valor: "Custo: equivalente ao dia de trabalho por folga concedida",
    custeio: "100% empresa",
    trib_exec: "Não gera encargo adicional (folga ≠ pagamento extra)",
    trib_empresa: "Custo implícito no salário fixo (dia de trabalho não realizado)",
    obrigatorio: "Não obrigatório",
    tendencia: "🔺🔺 Muito Alta. Equilíbrio vida/trabalho é top prioridade em 2025–2026.",
    base_legal: "Robert Half Guia Salarial 2026 (benefícios mais valorizados)",
    obs: "Para executivos: unlimited PTO (férias ilimitadas) é tendência internacional mas ainda rara no Brasil. Day off no aniversário e semanas de recesso extra são mais comuns."
  },
  {
    cat_num: "9",
    categoria: "9 – Trabalho e Flexibilidade",
    beneficio: "Modelo de Trabalho Flexível / Home Office",
    subcategoria: "Modelo Híbrido\nou Remoto",
    como_funciona: "Flexibilidade de local e horário de trabalho. Modelos: (1) Híbrido: 2–3 dias presencial/semana; (2) Remoto total: raro para executivos sênior em 2026; (3) Flexibilidade de horário: ajuste do horário de entrada/saída. Para executivos: autonomia de agenda quase total.",
    prevalencia: "Robert Half 2026: 'modelo de trabalho flexível' é o 2º benefício mais valorizado pelos profissionais.",
    elegibilidade: "Todos os níveis. Executivos têm maior autonomia naturalmente.",
    valor: "Custo implícito: auxílio home office (R$150–R$500/mês para equipamentos e internet)",
    custeio: "Empresa paga auxílio home office",
    trib_exec: "Auxílio home office: não incide IR se destinado a despesas de trabalho",
    trib_empresa: "Dedutível como despesa operacional",
    obrigatorio: "Não obrigatório (salvo norma interna)",
    tendencia: "🔺 Alta. Mas reversão parcial: executivos sênior voltam mais ao presencial em 2025–2026.",
    base_legal: "Robert Half Guia Salarial 2026; Michael Page 2026",
    obs: "Para executivos: flexibilidade é quase sempre negociada individualmente, não depende de política geral. Muitos CEOs e Diretores têm autonomia total de horário e local."
  },
  {
    cat_num: "10",
    categoria: "10 – Benefícios Complementares",
    beneficio: "Vale-Refeição / Vale-Alimentação Premium",
    subcategoria: "Alimentação",
    como_funciona: "Além dos benefícios padrão CLT, executivos recebem valores mais altos: cartões de benefícios (Caju, Swile, Flash) com valores maiores. Pode incluir almoço na empresa, restaurante executivo interno ou cartão-refeição com limite premium (R$80–R$150/dia).",
    prevalencia: "Universal. Michael Page e Robert Half listam como benefício padrão.",
    elegibilidade: "Todos os colaboradores",
    valor: "VR/VA padrão: R$30–R$50/dia. Premium (executivos): R$80–R$150/dia",
    custeio: "Empresa paga 100%",
    trib_exec: "Isento de IR dentro dos limites legais",
    trib_empresa: "Dedutível como despesa de alimentação",
    obrigatorio: "Vale-transporte e VA: obrigatórios por lei/CCT em muitas categorias",
    tendencia: "➡ Estável. Digitalização: cartões multifuncionais (Caju, Flash, Swile) substituindo VR/VA tradicionais.",
    base_legal: "Michael Page incentivos; Robert Half 2026",
    obs: "Para executivos: cartão de despesas corporativo (Amex Corporate, Mastercard Corporate) para gastos de negócios é mais relevante do que VR/VA."
  },
  {
    cat_num: "10",
    categoria: "10 – Benefícios Complementares",
    beneficio: "Cartão Corporativo / Budget de Despesas",
    subcategoria: "Despesas\nCorporativas",
    como_funciona: "Cartão de crédito corporativo (Amex Platinum Business, Mastercard Corporate) para despesas de negócios: viagens, hospedagem, refeições com clientes, eventos. Budget anual pode chegar a R$100k–R$500k para C-Level. Sem prestação de contas individual por item pequeno.",
    prevalencia: "Universal para C-Level e Diretores. Limite varia por cargo.",
    elegibilidade: "A partir de Gerente Sênior",
    valor: "Limite mensal: R$5.000–R$50.000+ dependendo do cargo e função",
    custeio: "100% empresa",
    trib_exec: "Gastos comprovados para fins do negócio: não incidem IR. Uso pessoal: renda indireta.",
    trib_empresa: "Dedutível como despesa operacional (despesas comprovadas)",
    obrigatorio: "Não obrigatório. Padrão para executivos comerciais e com viagens frequentes.",
    tendencia: "➡ Estável.",
    base_legal: "Prática universal de mercado",
    obs: "Política de despesas clara é fundamental para evitar problemas fiscais e de governança. Viagens internacionais em classe executiva são padrão para C-Level."
  },
  {
    cat_num: "10",
    categoria: "10 – Benefícios Complementares",
    beneficio: "Clube / Associações / Networking",
    subcategoria: "Filiação e\nNetworking",
    como_funciona: "Empresa custeia filiação a clubes executivos (LIDE, Associação Comercial, Rotary), clubes esportivos (clube de golfe, tênis), e anuidades de associações profissionais (CFP, CFA, IBGC, ABF). Para ampliar networking e visibilidade da empresa.",
    prevalencia: "Prática em grandes empresas e para executivos de alto perfil.",
    elegibilidade: "C-Level e Diretores comerciais",
    valor: "R$500–R$5.000/mês (anuidade/mensalidade)",
    custeio: "100% empresa",
    trib_exec: "Pode incidir IR se caracterizado como renda indireta",
    trib_empresa: "Dedutível como despesa comercial/representação",
    obrigatorio: "Não obrigatório",
    tendencia: "➡ Estável.",
    base_legal: "Prática de mercado; Hunter Hunter 2025",
    obs: "LIDE (Grupo de Líderes Empresariais) e IBGC são referências para executives de governança corporativa. Golf club: ainda relevante em alguns setores (financeiro, agro)."
  },
  {
    cat_num: "10",
    categoria: "10 – Benefícios Complementares",
    beneficio: "Viagens em Classe Executiva / Hospitality",
    subcategoria: "Política de\nViagens Executivo",
    como_funciona: "Política de viagens diferenciada: voos em classe executiva para voos acima de X horas, hotéis 5 estrelas, salas VIP nos aeroportos (Amex Centurion, Priority Pass). Hospitality: ingressos VIP para eventos, jantares com clientes, camarotes corporativos em eventos esportivos.",
    prevalencia: "Universal para C-Level. Padrão para Diretores em viagens longas.",
    elegibilidade: "C-Level: sem restrição. Diretores: classe executiva em voos > 4h.",
    valor: "Custo variável. Classe executiva internacional: R$10k–R$50k/bilhete",
    custeio: "100% empresa",
    trib_exec: "Gastos de negócios comprovados: não incide IR no executivo",
    trib_empresa: "Dedutível como despesa de viagem",
    obrigatorio: "Não obrigatório. Definido por política interna de viagens.",
    tendencia: "➡ Estável. Premium: acesso a aviões particulares (charter) para diretores-executivos.",
    base_legal: "Prática universal de mercado; Hunter Hunter 2025",
    obs: "Aviões particulares (charter, jato executivo) são a evolução máxima do benefício de viagem. Usado por CEOs de grandes grupos em viagens urgentes ou para destinos sem voos diretos."
  }
] as BeneficioEstudo[],
  prevalencia: [
  {
    beneficio: "Bônus Anual de Desempenho",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "🔵",
    gerente: "🟡",
    notas: "Quase universal para líderes. Para gerentes: variável por setor.",
    fonte: "Robert Half 2026; Page Executive 2025"
  },
  {
    beneficio: "PLR (Participação nos Lucros)",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "✅",
    gerente: "✅",
    notas: "Universal quando a empresa tem PLR. Valor varia por nível.",
    fonte: "Lei 10.101/2000; Robert Half 2026"
  },
  {
    beneficio: "Bônus de Contratação (Signing)",
    ceo: "🔵",
    clevel: "🔵",
    diretor: "🟡",
    ger_senior: "🔶",
    gerente: "❌",
    notas: "Reservado para posições críticas ou muito disputadas.",
    fonte: "CARF 2025; Mercado"
  },
  {
    beneficio: "Bônus de Retenção",
    ceo: "🔵",
    clevel: "🔵",
    diretor: "🟡",
    ger_senior: "🔶",
    gerente: "❌",
    notas: "Período de M&A ou reestruturação. Posições-chave.",
    fonte: "Page Executive 2025; Mercado"
  },
  {
    beneficio: "Stock Options",
    ceo: "✅",
    clevel: "✅",
    diretor: "🔵",
    ger_senior: "🟡",
    gerente: "🔶",
    notas: "Empresas abertas: quase universal. Fechadas: crescendo.",
    fonte: "PE 2016 (15% nacionais); STJ 2024"
  },
  {
    beneficio: "RSU (Restricted Stock Units)",
    ceo: "🔵",
    clevel: "🔵",
    diretor: "🟡",
    ger_senior: "🔶",
    gerente: "❌",
    notas: "Multinacionais e empresas abertas. CARF: remuneratório.",
    fonte: "CARF Ago/2025"
  },
  {
    beneficio: "Phantom Shares",
    ceo: "🟡",
    clevel: "🟡",
    diretor: "🔶",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Fintechs e startups fechadas. Alternativa às stock options.",
    fonte: "PRIS 2025; Mercado fintech"
  },
  {
    beneficio: "Partnership / Programa de Sócios",
    ceo: "🔵",
    clevel: "🟡",
    diretor: "🔶",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Bancos, consultorias e fintechs de alto crescimento.",
    fonte: "PRIS AGO 2026"
  },
  {
    beneficio: "Plano de Saúde Premium",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "🔵",
    gerente: "🟡",
    notas: "100% CEO/VP, 96% Diretores, 82% Ger. Sênior (Carreira Muller)",
    fonte: "Carreira Muller Consultoria"
  },
  {
    beneficio: "Plano Odontológico",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "🔵",
    gerente: "🟡",
    notas: "Geralmente junto ao plano de saúde.",
    fonte: "Michael Page 2026; Robert Half 2026"
  },
  {
    beneficio: "Check-up Executivo Anual",
    ceo: "✅",
    clevel: "✅",
    diretor: "🔵",
    ger_senior: "🟡",
    gerente: "🔶",
    notas: "Quase universal para C-Level. Estendendo a Gerentes.",
    fonte: "Hunter Hunter 2025; Exame/PE"
  },
  {
    beneficio: "Seguro de Vida Premium",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "✅",
    gerente: "🔵",
    notas: "~95% dos executivos. Cobertura maior para níveis mais altos.",
    fonte: "Exame/PE 2024; Michael Page 2026"
  },
  {
    beneficio: "Seguro D&O",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Universal em empresas abertas. Obrigatório para estatutários.",
    fonte: "Page Executive 2019; Howden 2024"
  },
  {
    beneficio: "Carro da Empresa",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "🔵",
    gerente: "🟡",
    notas: "100% CEO/VP, 96% Dir., 82% Ger.Sr., 64% Ger. (Carreira Muller)",
    fonte: "Carreira Muller Consultoria"
  },
  {
    beneficio: "Chofer / Motorista",
    ceo: "🔵",
    clevel: "🔶",
    diretor: "🔶",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Apenas para CEOs com agenda densa ou alto perfil público.",
    fonte: "Hunter Hunter 2025; Exame/PE"
  },
  {
    beneficio: "Previdência Privada (PGBL/VGBL)",
    ceo: "✅",
    clevel: "✅",
    diretor: "🔵",
    ger_senior: "🟡",
    gerente: "🔶",
    notas: "~40% dos executivos em 2016 (PE). Crescendo fortemente.",
    fonte: "Exame/PE 2024; BTG; Michael Page 2026"
  },
  {
    beneficio: "Consultoria Financeira Pessoal",
    ceo: "🔵",
    clevel: "🟡",
    diretor: "🔶",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Exclusivo para C-Level e Diretores de alto patrimônio.",
    fonte: "Hunter Hunter 2025"
  },
  {
    beneficio: "MBA / Pós-Graduação Custeada",
    ceo: "🔵",
    clevel: "🔵",
    diretor: "🟡",
    ger_senior: "🟡",
    gerente: "🔶",
    notas: "~30% das empresas. Mais para executivos em desenvolvimento.",
    fonte: "Michael Page 2026"
  },
  {
    beneficio: "Coaching Executivo",
    ceo: "✅",
    clevel: "🔵",
    diretor: "🟡",
    ger_senior: "🔶",
    gerente: "❌",
    notas: "Crescendo. Visto como investimento estratégico.",
    fonte: "Michael Page 2026"
  },
  {
    beneficio: "Auxílio Educação (Filhos)",
    ceo: "🟡",
    clevel: "🟡",
    diretor: "🔶",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Principalmente em transferências e multinacionais.",
    fonte: "Exame/PE 2024; Hunter Hunter"
  },
  {
    beneficio: "Auxílio Moradia / Aluguel",
    ceo: "🟡",
    clevel: "🟡",
    diretor: "🔶",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Principalmente em relocações. Exclusivo.",
    fonte: "Hunter Hunter 2025; Exame/PE"
  },
  {
    beneficio: "Pacote de Relocação",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "🔵",
    gerente: "🔶",
    notas: "Universal quando há transferência de cidade/país.",
    fonte: "Prática universal"
  },
  {
    beneficio: "Gympass / TotalPass Premium",
    ceo: "✅",
    clevel: "✅",
    diretor: "🔵",
    ger_senior: "🟡",
    gerente: "🟡",
    notas: "Muito difundido. Plano premium para executivos.",
    fonte: "Michael Page; Wellhub 2025"
  },
  {
    beneficio: "EAP (Assistência ao Empregado)",
    ceo: "✅",
    clevel: "✅",
    diretor: "🔵",
    ger_senior: "🟡",
    gerente: "🟡",
    notas: "Crescente fortemente pós-pandemia. Saúde mental prioritária.",
    fonte: "Robert Half 2025; Michael Page"
  },
  {
    beneficio: "Day Off / Folgas Extras",
    ceo: "✅",
    clevel: "✅",
    diretor: "🔵",
    ger_senior: "🟡",
    gerente: "🟡",
    notas: "2º benefício mais valorizado (RH 2026).",
    fonte: "Robert Half Guia 2026"
  },
  {
    beneficio: "Modelo Híbrido / Flexibilidade",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "✅",
    gerente: "🔵",
    notas: "Padrão de mercado pós-pandemia. Executivos têm autonomia.",
    fonte: "Robert Half 2026"
  },
  {
    beneficio: "Cartão Corporativo",
    ceo: "✅",
    clevel: "✅",
    diretor: "✅",
    ger_senior: "🔵",
    gerente: "🔶",
    notas: "Universal para funções comerciais e com viagens.",
    fonte: "Prática universal"
  },
  {
    beneficio: "Viagens em Classe Executiva",
    ceo: "✅",
    clevel: "✅",
    diretor: "🔵",
    ger_senior: "🟡",
    gerente: "❌",
    notas: "Universal para C-Level em voos longos. Diretores: política.",
    fonte: "Prática universal"
  },
  {
    beneficio: "Club / Associações / Networking",
    ceo: "🔵",
    clevel: "🟡",
    diretor: "🔶",
    ger_senior: "❌",
    gerente: "❌",
    notas: "Exclusivo para executivos de alto perfil e representação.",
    fonte: "Hunter Hunter 2025"
  }
] as Prevalencia[],
  tributario: [
  {
    beneficio: "Salário Fixo / Pró-Labore",
    natureza: "Remuneratória",
    ir_exec: "✅ Até 27,5%\n(tabela progressiva)",
    inss_exec: "✅ Até teto\n(R$908/mês - 2025)",
    inss_patronal: "✅ 20% + RAT + Terceiros",
    dedutivel: "✅ Dedutível",
    base_legal: "CLT; RFB"
  },
  {
    beneficio: "Bônus Anual de Desempenho",
    natureza: "Remuneratória",
    ir_exec: "✅ Até 27,5%\n(tabela progressiva)",
    inss_exec: "✅ Incide",
    inss_patronal: "✅ Incide 20%",
    dedutivel: "✅ Dedutível",
    base_legal: "CLT; RFB"
  },
  {
    beneficio: "PLR (dentro da Lei 10.101)",
    natureza: "Indenizatória\n(com requisitos)",
    ir_exec: "✅ Tabela exclusiva\nProgressiva até 27,5%\n(isenta até R$7.311 - 2025)",
    inss_exec: "❌ NÃO incide\n(lei 10.101)",
    inss_patronal: "❌ NÃO incide\n(lei 10.101)",
    dedutivel: "✅ Dedutível\n(Lucro Real)",
    base_legal: "Lei 10.101/2000; IN RFB 1.515/2014"
  },
  {
    beneficio: "Bônus de Contratação (Signing)",
    natureza: "Remuneratória\n(CARF Ago/2025)",
    ir_exec: "✅ Até 27,5%",
    inss_exec: "✅ Incide",
    inss_patronal: "✅ Incide 20%",
    dedutivel: "✅ Dedutível",
    base_legal: "CARF Acórdão 2201-012.154/2025"
  },
  {
    beneficio: "Bônus de Retenção",
    natureza: "Remuneratória\n(CARF Ago/2025)",
    ir_exec: "✅ Até 27,5%",
    inss_exec: "✅ Incide",
    inss_patronal: "✅ Incide 20%",
    dedutivel: "✅ Dedutível",
    base_legal: "CARF Acórdão 2201-012.154/2025"
  },
  {
    beneficio: "Stock Options (STJ Set/2024)",
    natureza: "Mercantil\n(STJ Set/2024)",
    ir_exec: "✅ 15% ganho capital\n(na VENDA das ações)",
    inss_exec: "❌ NÃO incide\n(mercantil)",
    inss_patronal: "❌ NÃO incide\n(mercantil - STJ)",
    dedutivel: "⚠️ Complexo:\nAnalisar caso a caso",
    base_legal: "STJ Tema 1.226 (Set/2024); CARF Ago/2025"
  },
  {
    beneficio: "RSU – Restricted Stock Units",
    natureza: "Remuneratória\n(CARF Ago/2025)",
    ir_exec: "✅ Até 27,5%\n(no vesting/recebimento)",
    inss_exec: "✅ Incide",
    inss_patronal: "✅ Incide 20%",
    dedutivel: "✅ Dedutível",
    base_legal: "CARF Acórdão 2201-012.154 (Ago/2025)"
  },
  {
    beneficio: "Phantom Shares",
    natureza: "Remuneratória\n(CARF Ago/2025)",
    ir_exec: "✅ Até 27,5%\n(no recebimento em dinheiro)",
    inss_exec: "✅ Incide",
    inss_patronal: "✅ Incide 20%",
    dedutivel: "✅ Dedutível",
    base_legal: "CARF Acórdão 2201-012.154 (Ago/2025)"
  },
  {
    beneficio: "Matching Shares",
    natureza: "Remuneratória\n(CARF Ago/2025)",
    ir_exec: "✅ Até 27,5%\n(na parte gratuita)",
    inss_exec: "✅ Incide",
    inss_patronal: "✅ Incide 20%",
    dedutivel: "✅ Dedutível",
    base_legal: "CARF Acórdão 2201-012.154 (Ago/2025)"
  },
  {
    beneficio: "Plano de Saúde / Odonto\n(serviço médico direto)",
    natureza: "Benefício assistencial",
    ir_exec: "❌ NÃO incide\n(serviço médico)",
    inss_exec: "❌ NÃO incide",
    inss_patronal: "❌ NÃO incide",
    dedutivel: "⚠️ Parcialmente\ndedutível",
    base_legal: "RFB; ANS"
  },
  {
    beneficio: "Check-up Executivo\n(serviço direto no hospital)",
    natureza: "Benefício assistencial",
    ir_exec: "❌ NÃO incide\n(serviço prestado diretamente)",
    inss_exec: "❌ NÃO incide",
    inss_patronal: "❌ NÃO incide",
    dedutivel: "✅ Dedutível\ncomo despesa de saúde",
    base_legal: "RFB; CLT"
  },
  {
    beneficio: "Seguro de Vida\n(prêmio pago pela empresa)",
    natureza: "Benefício assistencial",
    ir_exec: "❌ NÃO incide\nno prêmio (benefício)",
    inss_exec: "❌ NÃO incide",
    inss_patronal: "❌ NÃO incide",
    dedutivel: "✅ Dedutível\ncomo despesa operacional",
    base_legal: "CLT; RFB"
  },
  {
    beneficio: "Seguro D&O\n(prêmio pago pela empresa)",
    natureza: "Proteção patrimonial",
    ir_exec: "❌ NÃO incide\n(não é renda)",
    inss_exec: "❌ NÃO incide",
    inss_patronal: "❌ NÃO incide",
    dedutivel: "✅ Dedutível\ncomo despesa operacional",
    base_legal: "SUSEP; RFB"
  },
  {
    beneficio: "Carro da Empresa\n(uso exclusivo trabalho)",
    natureza: "Benefício in natura\n(profissional)",
    ir_exec: "❌ NÃO incide\nse uso exclusivo profissional",
    inss_exec: "❌ NÃO incide",
    inss_patronal: "❌ NÃO incide",
    dedutivel: "✅ Dedutível\n(leasing: 100%; compra: depreciação)",
    base_legal: "RFB; CLT art.458"
  },
  {
    beneficio: "Carro da Empresa\n(com uso pessoal)",
    natureza: "Benefício in natura\n(remuneratório)",
    ir_exec: "✅ INCIDE IR\nsobre o valor do uso pessoal",
    inss_exec: "✅ Incide\nsobre uso pessoal",
    inss_patronal: "✅ Incide 20%\nsobre uso pessoal",
    dedutivel: "✅ Dedutível\nproporcionalmente",
    base_legal: "RFB; CLT art.458"
  },
  {
    beneficio: "Previdência Privada PGBL\n(contribuição da empresa)",
    natureza: "Benefício previdenciário",
    ir_exec: "✅ Dedutível\naté 12% renda bruta (IR completo).\nResgate: IR total.",
    inss_exec: "❌ NÃO incide\nno momento da contribuição",
    inss_patronal: "❌ NÃO incide\nno momento da contribuição",
    dedutivel: "✅ Dedutível\naté 20% folha pagamento (Lucro Real)",
    base_legal: "Lei 6.435/1977; LC 109/2001; RFB"
  },
  {
    beneficio: "MBA / Pós-Graduação\n(custeada pela empresa)",
    natureza: "Benefício educacional",
    ir_exec: "✅ INCIDE IR\ncomo renda indireta",
    inss_exec: "⚠️ Depende\nda estrutura contratual",
    inss_patronal: "⚠️ Depende\nda estrutura",
    dedutivel: "✅ Dedutível\ncomo despesa de treinamento",
    base_legal: "RFB; CLT"
  },
  {
    beneficio: "Auxílio Moradia / Aluguel",
    natureza: "Remuneratória\n(in natura)",
    ir_exec: "✅ INCIDE IR\n(renda indireta)",
    inss_exec: "✅ Incide\ncomo salário in natura",
    inss_patronal: "✅ Incide 20%",
    dedutivel: "✅ Dedutível",
    base_legal: "CLT art.458; RFB"
  },
  {
    beneficio: "PLR para Diretores Estatutários\n(não CLT)",
    natureza: "Indenizatória\n(parcialmente)",
    ir_exec: "✅ IR tabela exclusiva\nPLR (igual CLT)",
    inss_exec: "⚠️ Contribui como\nautônomo (diferente\ndo empregado CLT)",
    inss_patronal: "⚠️ Empresa recolhe\ncomo tomadora de serviços",
    dedutivel: "✅ Dedutível",
    base_legal: "Lei 10.101; RFB; Ambitojuridico 2025"
  },
  {
    beneficio: "Gympass / TotalPass Premium",
    natureza: "Benefício de saúde",
    ir_exec: "❌ NÃO incide\n(saúde preventiva)",
    inss_exec: "❌ NÃO incide",
    inss_patronal: "❌ NÃO incide",
    dedutivel: "✅ Dedutível\ncomo despesa de saúde",
    base_legal: "RFB; Wellhub"
  },
  {
    beneficio: "Day Off / Folgas Extras",
    natureza: "Benefício trabalhista",
    ir_exec: "❌ NÃO incide\n(não é pagamento)",
    inss_exec: "❌ NÃO incide",
    inss_patronal: "❌ NÃO incide",
    dedutivel: "Custo implícito\nno salário (hora não trabalhada)",
    base_legal: "CLT; Política interna"
  }
] as Tributario[],
  glossario: [
  {
    termo: "Equity",
    traducao: "Participação acionária /\nCapital próprio",
    definicao: "Fração de propriedade da empresa (ações ou quotas). Representa o direito do titular sobre o patrimônio líquido da companhia.",
    como: "Pode ser concedido diretamente (quotas) ou indiretamente (via stock options, RSU, phantom). Para executivos: entregue gradualmente via vesting para garantir retenção.",
    exemplo: "CEO recebe 2% de equity. Se empresa vale R$100M, o equity vale R$2M nominalmente (liquidez depende de evento).",
    relevancia: "🔴 CRÍTICO. Define o quanto o executivo pode ganhar além do salário fixo em cenário de sucesso da empresa."
  },
  {
    termo: "Vesting",
    traducao: "Aquisição gradual de direitos /\nMaturação",
    definicao: "Processo pelo qual o executivo adquire progressivamente o direito ao equity ao longo do tempo ou mediante o cumprimento de metas. Protege a empresa de ter 'sócios peso morto'.",
    como: "Sem vesting: executivo vira sócio imediato → pode sair com a participação. Com vesting: garante que só fica sócio quem fica e contribui. Período típico: 4 anos. Combinado com Cliff.",
    exemplo: "4 anos de vesting + 1 ano cliff: ao completar 12 meses, adquire 25%. Depois: +1/48 ao mês.",
    relevancia: "🔴 CRÍTICO. Todo plano de equity para executivos deve ter vesting. Sem ele, é cheque em branco."
  },
  {
    termo: "Cliff",
    traducao: "Período de carência /\nCarência inicial",
    definicao: "Período mínimo que o executivo deve permanecer na empresa antes de adquirir qualquer direito ao equity. Geralmente 12 meses. Proteção contra saída prematura.",
    como: "Durante o cliff: zero ações adquiridas. Após o cliff: adquire retroativamente o % do período de cliff + continua vestindo normalmente. Sair antes do cliff = perde tudo.",
    exemplo: "Cliff de 12 meses + 4 anos total: ao completar 1 ano, adquire 25% de uma vez. Do mês 13 ao 48: +1/48 por mês.",
    relevancia: "🔴 CRÍTICO. Investidores exigem cliff mínimo de 12 meses em todos os planos de executivos."
  },
  {
    termo: "Strike Price",
    traducao: "Preço de exercício /\nPreço de outorga",
    definicao: "Preço pré-fixado pelo qual o executivo pode comprar as ações no momento do exercício das stock options. Geralmente definido no momento da outorga (concessão).",
    como: "Quanto mais baixo o strike price em relação ao valor de mercado no exercício, maior o ganho do executivo. A diferença entre strike price e valor de mercado = ganho bruto antes de impostos.",
    exemplo: "Strike price: R$10/ação (hoje). 4 anos depois, ação vale R$40. Ganho bruto: R$30/ação × 10.000 ações = R$300.000.",
    relevancia: "🟡 ALTO. O strike price baixo é o principal argumento para executivos de startup (upside ilimitado)."
  },
  {
    termo: "Option Pool / ESOP",
    traducao: "Pool de opções /\nReserva de ações para funcionários",
    definicao: "Parcela do capital social reservada para distribuição aos executivos e colaboradores via planos de stock options. É um 'limite de diluição autorizado' aprovado antecipadamente.",
    como: "Early stage: option pool de 10–20% do capital. Scale-ups: 5–10%. Deve ser criado antes de rodada de investimento (para não diluir o investidor entrante). Gerenciado pelo CA.",
    exemplo: "Startup com cap table: Fundadores 60% + Investidores 25% + Option Pool 15%. Se executivo exerce 3%: diluição dos demais proporcionalmente.",
    relevancia: "🟡 ALTO. Executivos devem perguntar: qual % do option pool já está comprometido? Quanto resta disponível para mim?"
  },
  {
    termo: "Cap Table",
    traducao: "Tabela de capitalização /\nQuadro societário",
    definicao: "Registro de todos os acionistas/quotistas da empresa com seus respectivos percentuais e tipos de participação (ordinárias, preferenciais, opções, warrants). O 'mapa' da propriedade da empresa.",
    como: "Essencial para saber: quanto vale sua participação? Em caso de liquidez, quanto você recebe? Qual sua posição na cascata de distribuição (liquidation preference)?",
    exemplo: "Cap table pós-vesting: Fundadores 55% + Série A 20% + Série B 12% + Option Pool 8% (2% vestidos por exec A, 1% por exec B, 5% a conceder).",
    relevancia: "🟡 ALTO. Executivos devem solicitar o cap table antes de aceitar qualquer oferta com equity."
  },
  {
    termo: "Evento de Liquidez",
    traducao: "Exit / Evento de saída",
    definicao: "Evento que permite ao executivo converter seu equity em dinheiro. Principais: (1) IPO (abertura de capital na bolsa), (2) M&A (venda da empresa), (3) Secondary (venda da participação a investidor).",
    como: "Sem evento de liquidez, equity é 'papel' — valor teórico. Prazo médio até liquidez em startups: 5–10 anos. Em empresas abertas: liquidez imediata após lock-up.",
    exemplo: "Executivo tem 2% da empresa. M&A a R$500M: recebe R$10M menos impostos. IPO: pode vender no mercado após lock-up (90–180 dias).",
    relevancia: "🔴 CRÍTICO. Em empresas fechadas, discutir o plano de liquidez antes de aceitar equity é fundamental."
  },
  {
    termo: "Lock-Up",
    traducao: "Período de bloqueio /\nCarência pós-vesting",
    definicao: "Período após o vesting (ou após IPO/M&A) durante o qual o executivo não pode vender as ações. Protege a empresa de pressão de venda imediata e evita desincentivo pós-evento.",
    como: "Pós-IPO: executivos geralmente têm lock-up de 90–180 dias. Pós-vesting: pode haver lock-up adicional de 12–24 meses antes de vender no secondary.",
    exemplo: "Executivo veste 100% das opções no mês 48. Lock-up de 12 meses: só pode vender a partir do mês 60.",
    relevancia: "🟠 MÉDIO. Executivos devem negociar o prazo de lock-up e condições de venda antecipada (secondary)."
  },
  {
    termo: "Aceleração de Vesting",
    traducao: "Aceleração /\nVesting acelerado",
    definicao: "Cláusula que permite antecipar o cronograma de vesting em eventos específicos. Protege o executivo em caso de M&A ou demissão sem justa causa pelo novo controlador.",
    como: "Single Trigger: qualquer M&A acelera 100% do vesting. Double Trigger (mais comum): precisa de M&A + demissão sem justa causa para acelerar. Double trigger é preferido por investidores.",
    exemplo: "Single Trigger: empresa vendida em T=2 anos. Executivo com 4 anos total: recebe 100% imediatamente. Double Trigger: recebe 100% apenas se também for demitido pelo adquirente.",
    relevancia: "🔴 CRÍTICO para executivos em empresas com potencial de M&A. Sem cláusula de aceleração, pode perder o equity no momento mais importante."
  },
  {
    termo: "Good Leaver",
    traducao: "Saída amigável /\nBoa saída",
    definicao: "Hipótese de saída do executivo em que ele mantém os direitos sobre o equity já adquirido (vestido) e pode receber valor de mercado por ele. Ex: demissão sem justa causa, doença, morte, aposentadoria.",
    como: "Good Leaver: mantém ações vestidas pelo valor de mercado (FMV). Empresa pode ter direito de preferência para recomprar pelo FMV antes que o executivo venda a terceiros.",
    exemplo: "Exec veste 50% (2 de 4 anos) e é demitido sem justa causa. Good Leaver: mantém suas ações vestidas pelo valor de mercado atual.",
    relevancia: "🔴 CRÍTICO. Executivos DEVEM garantir que sua saída seja classificada como Good Leaver para proteger o equity já ganho."
  },
  {
    termo: "Bad Leaver",
    traducao: "Saída problemática /\nMá saída",
    definicao: "Hipótese de saída do executivo em que ele perde (total ou parcialmente) o direito ao equity. Ocorre em: justa causa, violação de non-compete, fraude, má-fé, pedido de demissão durante cliff.",
    como: "Bad Leaver: obrigado a vender as ações pelo valor nominal (valor histórico/simbólico) ou perde totalmente. Atenção: STJ tem anulado cláusulas de Bad Leaver com valor nominal em empresa já valorizada.",
    exemplo: "Exec tem 2% da empresa (já vestidos). É demitido por justa causa (Bad Leaver). Empresa recompra as ações por R$1.000 (valor nominal). Empresa hoje vale R$50M: exec perde ~R$1M.",
    relevancia: "🔴 CRÍTICO. Nunca assinar contrato sem entender exatamente o que caracteriza Bad Leaver e qual o preço de recompra."
  },
  {
    termo: "Clawback",
    traducao: "Recuperação /\nDevolução de benefícios",
    definicao: "Cláusula que permite à empresa recuperar (clawback) benefícios já pagos (bônus, equity) em caso de: fraude posterior descoberta, erro material nas demonstrações financeiras, ou má conduta grave.",
    como: "Muito usado em: bônus de contratação (signing bonus clawback se sair antes de X meses), stock options (clawback por fraude), bônus anuais (restituição se resultado for revertido).",
    exemplo: "Exec recebe signing bonus de R$300k. Cláusula: se sair antes de 24 meses, devolve proporcionalmente. Sai no mês 12: devolve R$150k.",
    relevancia: "🟠 MÉDIO. Cada vez mais comum. Exigido por reguladores para empresas abertas (ex: SEC Rule 10D-1)."
  },
  {
    termo: "Direito de Preferência",
    traducao: "Preempção /\nTag Along (preferência de compra)",
    definicao: "Direito dos sócios existentes de comprar as ações do executivo antes que ele as ofereça a terceiros. Garante que a empresa ou sócios possam evitar a entrada de desconhecidos no cap table.",
    como: "Exec quer vender sua participação no secondary. Deve primeiro oferecer aos sócios/empresa pelo mesmo preço. Se recusarem, pode vender a terceiros.",
    exemplo: "Exec quer vender 1% da empresa a fundo de investimento por R$2M. Empresa tem 30 dias para exercer o direito de preferência pelo mesmo valor (R$2M).",
    relevancia: "🟠 MÉDIO. Conhecer este direito antes de tentar vender no secondary. Negociar prazos razoáveis de resposta."
  },
  {
    termo: "Drag-Along",
    traducao: "Arrasto /\nDireito de arrasto",
    definicao: "Direito dos sócios majoritários de 'arrastar' os minoritários (incluindo executivos-sócios) em uma venda da empresa. Garante que o adquirente possa comprar 100% da empresa.",
    como: "Sócio majoritário recebe oferta de M&A. Quer vender 100% mas executivo-sócio com 2% recusa. Drag-along: executivo É OBRIGADO a vender suas ações nas mesmas condições do negócio.",
    exemplo: "Empresa vale R$100M. Drag-along acionado. Exec com 2%: obrigado a vender suas ações, recebendo R$2M (proporcionalmente).",
    relevancia: "🟠 MÉDIO. Pode ser favorável (garante liquidez em M&A) ou desfavorável (não pode bloquear uma venda desvantajosa)."
  },
  {
    termo: "Tag-Along",
    traducao: "Extensão de condições /\nDireito de saída conjunta",
    definicao: "Direito do minoritário (executivo-sócio) de incluir sua participação em uma venda feita pelo majoritário, nas mesmas condições. Proteção do minoritário contra ser 'deixado para trás'.",
    como: "Sócio majoritário vende 60% da empresa. Tag-along: executivo com 2% pode exigir que o adquirente também compre seus 2% pelo mesmo preço e condições.",
    exemplo: "Majoritário vende a R$50/ação. Exec exerce tag-along: vende seus 10.000 ações a R$50 (R$500k), junto com o majoritário.",
    relevancia: "🟠 MÉDIO. Tag-along é proteção valiosa para executivos que viraram sócios. Garante que não fiquem presos quando o majoritário sair."
  },
  {
    termo: "Liquidation Preference",
    traducao: "Preferência de liquidação /\nDireito preferencial de resgate",
    definicao: "Direito dos investidores de receber o retorno primeiro (antes dos fundadores e executivos) em caso de venda ou liquidação. Define a cascata de distribuição em M&A.",
    como: "Investidores com preferência 1x: recebem seu investimento de volta antes de qualquer distribuição. Se empresa vale menos que o investimento: executivos e fundadores recebem zero.",
    exemplo: "Startup captou R$10M (Série A) com 1x liquidation preference. Empresa vendida por R$15M. Investidores recebem R$10M. Restam R$5M para fundadores + executivos (proporcionalmente).",
    relevancia: "🔴 CRÍTICO. Executivos que viram sócios devem entender a liquidation preference dos investidores. Pode tornar seu equity nulo em vendas abaixo do investimento total."
  }
] as GlossarioTerm[],
  tipos_ilp: [
  {
    tipo: "Stock Options (Opção de Compra de Ações)",
    sigla: "SO / SOP",
    como: "Direito de comprar ações a preço pré-fixado (strike price) após período de vesting. Se ação valorizar: executivo exerce e ganha a diferença. Se não valorizar: não exerce (perde o prêmio, não perde dinheiro pago).",
    paga: "✅ SIM — paga o strike price no exercício. Custo real para o executivo.",
    recebe: "Ações reais da empresa (S.A.) ou quotas (Ltda.)",
    tributacao: "🟢 MELHOR: Natureza MERCANTIL (STJ Set/2024). Tributação: 15% ganho capital na VENDA. NÃO incide IR nem INSS na aquisição.",
    melhor_para: "Empresas abertas (B3), startups com potencial de IPO, fintechs de crescimento acelerado",
    fintechs: "✅ SIM. Ideal para fintechs pré-IPO como Blips/Finza. Melhor instrumento fiscal disponível.",
    obs: "ATENÇÃO: onerosidade é requisito para natureza mercantil. Executivo DEVE pagar o strike. Cliff + vesting obrigatório. Aprovação em Assembleia."
  },
  {
    tipo: "RSU – Restricted Stock Units (Ações Restritas)",
    sigla: "RSU",
    como: "Empresa concede ações GRATUITAMENTE ao executivo após período de vesting. Sem custo para o executivo. Vinculado ao tempo de permanência e/ou metas.",
    paga: "❌ NÃO — recebe ações gratuitamente.",
    recebe: "Ações reais da empresa (S.A.)",
    tributacao: "🔴 PIOR: Natureza REMUNERATÓRIA (CARF Ago/2025). Incide IRPF até 27,5% + INSS no vesting. Mais custo para empresa e executivo.",
    melhor_para: "Multinacionais com ações em bolsa. Empresas que querem dar ações sem criar obrigação financeira no executivo.",
    fintechs: "⚠️ POSSÍVEL mas tributariamente desvantajoso. Empresas abertas preferem.",
    obs: "Caro em termos fiscais. Mas psicologicamente mais forte: executivo não precisa 'tirar dinheiro do bolso'. Usar com cautela em empresas fechadas."
  },
  {
    tipo: "Phantom Shares (Ações Fantasmas / SAR)",
    sigla: "PS / SAR",
    como: "Executivo recebe um direito econômico equivalente ao valor de ações, mas NÃO recebe ações reais. Pago em DINHEIRO (cash-settled) quando o evento de liquidez ou vesting ocorre. Simula a valorização sem diluir o cap table.",
    paga: "❌ NÃO — recebe em dinheiro quando o direito 'matura'.",
    recebe: "💰 Dinheiro (cash-settled). Não recebe ações.",
    tributacao: "🔴 MENOS VANTAJOSO: Natureza REMUNERATÓRIA (CARF Ago/2025). Incide IRPF até 27,5% + INSS no recebimento.",
    melhor_para: "Empresas FECHADAS que não querem ou não podem emitir ações. Subsidiárias de multinacionais.",
    fintechs: "✅ SIM. Perfeita para empresas fechadas como Blips e Finza antes do IPO. Não dilui sócios.",
    obs: "Apesar da tributação desfavorável vs. Stock Options, é a melhor opção para empresas que NÃO querem criar novos sócios. Flexível e simples de administrar."
  },
  {
    tipo: "Matching Shares (Ações Pareadas)",
    sigla: "MS",
    como: "Empresa dá ações GRÁTIS como contrapartida ao investimento do executivo. Ex: a cada ação comprada pelo executivo com dinheiro próprio, a empresa dá 1 ação grátis. Condicionado ao vesting de permanência.",
    paga: "✅ SIM (parte) — executivo compra com dinheiro próprio as ações de 'matching base'. A empresa dá as ações de 'matching'.",
    recebe: "Ações reais da empresa (parte comprada + parte dada gratuitamente).",
    tributacao: "🔴 MENOS VANTAJOSO: Natureza REMUNERATÓRIA (CARF Ago/2025). A parte gratuita: IRPF + INSS. A parte comprada: tributada como Stock Option se mercantil.",
    melhor_para: "Grandes corporações abertas que querem que executivos co-invistam. Banco e seguradoras.",
    fintechs: "⚠️ POSSÍVEL mas complexo. Exige que executivo tenha capital para co-investir.",
    obs: "Co-investimento cria 'pele no jogo' real. Executivo que comprou ações com seu dinheiro pensa como dono. Mas tributação menos favorável que Stock Options puras."
  },
  {
    tipo: "Partnership / Sócio (Participação Societária Direta)",
    sigla: "—",
    como: "Executivo compra quotas/ações diretamente a valor subsidiado e vira SÓCIO efetivo. Mecanismo de retenção definitivo. Pode incluir vesting reverso (empresa recompra cotas não vestidas se sair).",
    paga: "✅ SIM — compra quotas a preço abaixo do valor de mercado. Investimento real.",
    recebe: "Quotas/Ações reais. Executivo é sócio de fato desde o início.",
    tributacao: "🟡 MODERADO: Ganho de capital na venda: 15–22,5% (STJ: mercantil). Dividendos: isentos para PJ; tributados para PF.",
    melhor_para: "Fintechs e scale-ups que querem executivos com 'mentalidade de dono'. Bancos de investimento (modelo de sócios).",
    fintechs: "✅ SIM. Ideal para fintechs como Blips/Finza. Modelo de 'sócios-executivos' é poderoso para retenção.",
    obs: "Mecanismo mais forte de alinhamento. Executivo literalmente dono do negócio. Requer documentação societária robusta (Acordo de Sócios, Vesting Reverso)."
  },
  {
    tipo: "Performance Shares (Ações por Performance)",
    sigla: "PS",
    como: "Ações entregues após o atingimento de metas específicas de desempenho (ex: TSR, ROIC, ESG). Quantidade de ações varia conforme o nível de performance atingido (multiplicadores).",
    paga: "❌ NÃO — recebe ações se e quando a meta for atingida.",
    recebe: "Ações reais. Quantidade variável conforme performance.",
    tributacao: "⚠️ INDEFINIDO: Depende da estrutura. Pode ser mercantil (se houver custo) ou remuneratório (se gratuito). Consultar especialista.",
    melhor_para: "Empresas abertas (B3, NYSE). Empresas que querem alinhar executivos com metas estratégicas de longo prazo + ESG.",
    fintechs: "⚠️ INCOMUM em fechadas. Mais usado por companhias abertas (Vale, Petrobras, Itaú).",
    obs: "Tendência crescente de atrelar performance shares a metas ESG (emissões CO2, diversidade, governança). Vale: TSR + ROIC + ESG. Gerdau: 20% ILP em metas ESG."
  }
] as TipoILP[],
  tipos_vesting: [
  {
    tipo: "Time-Based Vesting (Vesting Temporal)",
    como: "Aquisição dos direitos de equity com base no TEMPO de permanência na empresa. Modelo mais simples e mais comum. Não depende de performance.",
    estrutura: "Padrão: 4 anos com 1 ano de cliff. Frequência: mensal (1/48 por mês após cliff), trimestral (1/16 por trimestre) ou anual (25% por ano).",
    vantagens: "Simples de entender. Previsível para o executivo. Fácil de gerenciar. Alinhamento básico de retenção.",
    desvantagens: "Não incentiva performance. Executivo 'desengajado' pode ficar para vestir suas ações. Sem mérito individual.",
    quando_usar: "Empresas em fase inicial. Posições de liderança senior onde a presença já é o diferencial. Executivos que não aceitam metas subjetivas.",
    exemplo_blips: "Diretores da Blips: 4 anos + 1 ano cliff. A cada mês após o 12º: +1/48 do total outorgado."
  },
  {
    tipo: "Performance-Based Vesting (Vesting por Metas/Milestones)",
    como: "Aquisição dos direitos depende do atingimento de metas específicas (KPIs individuais ou da empresa). Pode ser combinado com vesting temporal.",
    estrutura: "Metas: EBITDA, Receita, Churn, NPS, IPO, Captação de rodada, expansão para X cidades. Cada meta atingida 'libera' um % do equity outorgado.",
    vantagens: "Alinha interesse do executivo com os resultados da empresa. Mais justo por mérito. Incentiva performance de alto nível.",
    desvantagens: "Complexo de definir metas justas. Risco de conflito se metas foram mal definidas. Executivo pode sair se metas forem inalcançáveis.",
    quando_usar: "CEOs e CFOs com metas financeiras claras. M&A (vesting condicionado a fechamento do deal). Captações (vesting condicionado à rodada).",
    exemplo_blips: "Diretor Financeiro da Finza: 30% do equity vestido quando FIDC atinge R$50M captados."
  },
  {
    tipo: "Hybrid Vesting (Temporal + Metas)",
    como: "Combina vesting temporal e vesting por metas. Parte do equity veste pelo tempo (garantia de base), parte veste por performance (upside por resultados).",
    estrutura: "Ex: 50% temporal (4 anos) + 50% por metas específicas. Ou: vesting temporal com multiplicadores de aceleração por performance excepcional.",
    vantagens: "Equilibra retenção com performance. Reconhece tanto o tempo quanto o impacto. Mais sofisticado e motivador.",
    desvantagens: "Mais complexo de estruturar e comunicar. Requer métricas claras e auditáveis.",
    quando_usar: "C-Level de scale-ups e empresas em crescimento acelerado. Quando se quer tanto retenção quanto performance.",
    exemplo_blips: "CEO da Blips: 60% temporal (4 anos) + 40% atrelado a metas: crescimento de receita, valuation, número de clientes."
  },
  {
    tipo: "Reverse Vesting (Vesting Reverso)",
    como: "Executivo RECEBE as ações imediatamente mas a empresa tem o DIREITO DE RECOMPRAR as ações não vestidas se ele sair. O 'cliff' define o mínimo para evitar recompra total.",
    estrutura: "Usado quando o executivo já é sócio (fundador ou comprador de quota). Empresa pode recomprar as ações não vestidas pelo valor nominal se o executivo sair antes.",
    vantagens: "Executivo tem propriedade imediata (psicologicamente mais forte). Adequado para founders e sócios-executivos.",
    desvantagens: "Mecanismo inverso é mais complexo do ponto de vista societário (recompra vs. subscrição). Risco trabalhista se mal estruturado.",
    quando_usar: "Cofundadores de startups. Executivos que compram quotas e precisam de proteção mútua com os sócios.",
    exemplo_blips: "CTO cofundador da Finza: recebe 5% imediatamente mas empresa pode recomprar as cotas não vestidas (reverse vesting de 4 anos + 1 cliff) se ele sair."
  },
  {
    tipo: "Milestone Vesting (Vesting por Evento)",
    como: "Vesting ativado por eventos específicos e únicos: IPO, M&A, captação de rodada, lançamento de produto, expansão geográfica. Não depende de tempo.",
    estrutura: "Ex: 25% veste no IPO, 25% veste no atingimento de R$100M de receita, 50% veste em 4 anos. Cada evento libera uma tranche.",
    vantagens: "Alta motivação por objetivos estratégicos. Alinhamento perfeito com metas de negócio. Potencial upside enorme.",
    desvantagens: "Eventos podem demorar mais do que o esperado (ou nunca acontecer). Risco de o executivo não ter liquidez por anos.",
    quando_usar: "Empresas em preparação para IPO. C-Level com função específica em uma rodada de captação ou expansão.",
    exemplo_blips: "Dir. Financeira/FIDC da Finza: 50% do equity veste quando Finza atingir CVM/Bacen autorização como IF + 50% em 3 anos."
  }
] as TipoVesting[],
  erros: [
  {
    erro: "Prometer equity sem documentação formal",
    consequencia: "Litígio trabalhista. Promessa verbal pode ser caracterizada como parte do salário (incide INSS/FGTS retroativo). Passivo fiscal relevante.",
    como_evitar: "SEMPRE formalizar em Contrato de Outorga assinado antes do início das atividades. Nunca prometer equity em e-mail ou verbalmente sem contrato."
  },
  {
    erro: "Strike price simbólico (R$0,01) ou gratuito",
    consequencia: "CARF pode caracterizar como RSU remuneratório. Perde a natureza mercantil (STJ). Incide IRPF 27,5% + INSS no exercício.",
    como_evitar: "Strike price = FMV na data da outorga. Laudo de avaliação obrigatório. Onerosidade é requisito para natureza mercantil."
  },
  {
    erro: "Não ter Cliff no plano",
    consequencia: "Executivo pode sair após 1 mês com participação societária. Criação de 'sócio fantasma'. Dificuldade para investidores futuros.",
    como_evitar: "Cliff mínimo de 12 meses para todos os beneficiários. Cláusula clara sobre o que acontece se sair durante o cliff (perde tudo)."
  },
  {
    erro: "Não prever Good/Bad Leaver",
    consequencia: "Quando executivo sai, não há regra clara. Judicialização inevitável. Sócio problemático pode bloquear decisões societárias.",
    como_evitar: "Incluir cláusulas de Good/Bad Leaver no Acordo de Sócios com definições claras, preços de recompra e prazos."
  },
  {
    erro: "Option pool criado após a rodada de investimento",
    consequencia: "Dilui o investidor entrante também. Investidor paga mais caro pela mesma participação. Red flag para futuros investidores.",
    como_evitar: "Criar o option pool ANTES da rodada de captação. Deixar claro no term sheet o tamanho do pool e o impacto na diluição."
  },
  {
    erro: "Não ter cláusula de aceleração em contexto de M&A",
    consequencia: "Executivo é demitido pelo adquirente antes de vestir. Perde o equity que motivou sua permanência. Desmotivação no processo de integração.",
    como_evitar: "Incluir Double Trigger: M&A + demissão sem justa causa. Negociar no Contrato de Vesting e Acordo de Sócios."
  },
  {
    erro: "Usar percentual em vez de número de ações",
    consequencia: "A cada rodada de investimento e diluição, o % diminui. Discussões intermináveis sobre o que o executivo 'realmente tem'. Conflitos.",
    como_evitar: "Outorgar número fixo de ações (ex: 50.000 ações) e não percentuais (ex: 1%). Facilita gestão do cap table."
  },
  {
    erro: "Não atualizar o cap table regularmente",
    consequencia: "Desconhecimento da situação real. Surpresas desagradáveis em M&A ou IPO. Conflitos sobre participações.",
    como_evitar: "Usar software de gestão de cap table (Basement, Wequity, Pris). Atualizar a cada outorga, exercício e transferência."
  },
  {
    erro: "Confundir PLR com Stock Options",
    consequencia: "PLR é remuneratória (incide INSS/FGTS). Stock Option é mercantil (ganho capital). Confundir gera passivo fiscal.",
    como_evitar: "Estruturar cada instrumento separadamente com contrato e documentação específicos. Consultar advogado tributário especializado."
  },
  {
    erro: "Não ter non-compete no contrato de vesting",
    consequencia: "Executivo veste suas ações, sai e vai para o concorrente levando know-how e rede de relacionamentos.",
    como_evitar: "Incluir cláusula de non-compete (geralmente 12–24 meses, com abrangência geográfica definida) vinculada ao vesting. Considerar compensação pelo período de non-compete."
  }
] as ErroComum[],
};
