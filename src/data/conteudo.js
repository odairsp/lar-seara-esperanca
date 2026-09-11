// Todo o texto e as informações do centro ficam aqui.
// Para atualizar o site, basta editar este arquivo — não é
// necessário mexer nos componentes.
// Conteúdo adaptado de https://larsearaesperanca.com/

export const navegacao = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Ação Social", href: "#acao-social" },
  { label: "Cursos", href: "#cursos" },
  { label: "Doações", href: "#doacoes" },
  { label: "Localização", href: "#localizacao" },
];

export const redesSociais = [
  { label: "Facebook", href: "http://www.facebook.com/larseara.esperanca" },
  { label: "YouTube", href: "https://www.youtube.com/user/searaesperanca" },
];

export const hero = {
  eyebrow: "Centro Espírita",
  titulo: "Lar Seara ",
  tituloEmDestaque: "Esperança",
  tituloFinal: "",
  subtitulo: "Fora da caridade, não há salvação!",
  texto:
    "Há mais de 27 anos trabalhamos com amor e caridade em Taboão da Serra, unindo atendimento espiritual e assistência social a famílias que mais precisam. As portas estão sempre abertas, e todas as atividades são gratuitas.",
};

export const sobre = {
  eyebrow: "Nossa história",
  titulo: "Desde 1994, portas abertas para quem precisa.",
  paragrafos: [
    "O Lar Seara Esperança iniciou suas atividades em 2 de abril de 1994, regularmente constituído conforme seu Estatuto Social. Somos uma casa espírita que segue a Codificação de Allan Kardec, com forte atuação em assistência social como exercício pleno de solidariedade e amor ao próximo.",
    "Nossa fundadora, Dona Matilde, seguiu para o plano espiritual em 2 de maio de 2014. Hoje a casa é administrada por seus filhos, Marta Inês e Julio Cesar Machado, que dão continuidade ao amparo espiritual e fraterno a todos que buscam conforto e auxílio material, espiritual, emocional ou mediúnico.",
    "Atendemos centenas de famílias todos os meses, e esse número só cresce.",
  ],
  citacao: "Fora da caridade não há salvação.",
  citacaoFonte: "Allan Kardec",
};

export const atendimentos = {
  eyebrow: "Atendimentos",
  titulo: "Trabalhos espirituais da casa",
  texto:
    "Todos os atendimentos são gratuitos. Procure a triagem na sua primeira visita para ser orientado sobre qual atividade melhor atende sua necessidade.",
  servicos: [
    {
      nome: "Triagem",
      texto: "Primeiro acolhimento, para entender a necessidade de quem chega e encaminhar ao atendimento certo.",
    },
    {
      nome: "Passes Energéticos",
      texto: "Transmissão de energia para equilíbrio físico, emocional e espiritual.",
    },
    {
      nome: "Desobsessão",
      texto: "Trabalho de esclarecimento e auxílio a espíritos ainda ligados a padrões de sofrimento.",
    },
    {
      nome: "Cirurgia Espiritual",
      texto: "Atendimento mediúnico voltado ao tratamento de questões de saúde física e espiritual.",
    },
    {
      nome: "Mesa do Evangelho",
      texto: "Estudo e reflexão do Evangelho à luz do Espiritismo, em grupo.",
    },
    {
      nome: "Reiki",
      texto: "Terapia energética complementar para relaxamento e equilíbrio.",
    },
    {
      nome: "Cromoterapia",
      texto: "Uso terapêutico das cores como apoio ao equilíbrio físico e emocional.",
    },
    {
      nome: "Tratamentos Espirituais",
      texto: "Acompanhamento espiritual contínuo para quem enfrenta dificuldades diversas.",
    },
    {
      nome: "Tratamento Infantil",
      texto: "Atendimento espiritual voltado especificamente para crianças.",
    },
  ],
};

export const acaoSocial = {
  eyebrow: "Ação social",
  titulo: "Assistência que vai além da casa",
  paragrafos: [
    "Nossos trabalhos sociais começaram em 1995. Hoje atendemos famílias carentes de comunidades vizinhas e do município de Embu das Artes, com entrega regular de cestas básicas.",
    "Também realizamos encontros com gestantes e mães sobre maternidade, cuidados com o bebê e saúde, além de fornecer em média 20 enxovais por mês.",
    "No fim de ano, montamos sacolinhas de Natal com roupas, calçados e brinquedos novos para apadrinhar crianças, e distribuímos cerca de 600 cestas básicas — em 2021, mesmo em meio à pandemia, foram cerca de 1.035 crianças e 515 famílias atendidas.",
  ],
  doacoesAceitas: {
    titulo: "Doações de materiais",
    texto: "Aceitamos doações de alimentos e itens úteis aos nossos trabalhos, como:",
    itens: [
      "Garrafas de água (510 ml)",
      "Sacolinhas plásticas",
      "Material didático infantil e adulto",
      "Brinquedos, roupas e calçados em bom estado",
      "Parcerias em eventos",
    ],
  },
};

export const cursos = {
  eyebrow: "Cursos",
  titulo: "Aprenda e ensine com a gente",
  lista: [
    {
      titulo: "Curso de Espiritismo",
      texto: "Formação para quem quer estudar a Doutrina Espírita com mais profundidade, com inscrições abertas.",
      link: "Inscreva-se",
    },
    {
      titulo: "Evangelização Infantil",
      texto: "Encontros semanais para crianças, com histórias, música e ensinamentos do Evangelho.",
      link: "Saiba mais",
    },
  ],
};

export const doacoes = {
  eyebrow: "Doações",
  titulo: "Ajude a manter a casa de portas abertas",
  texto:
    "Todas as nossas atividades são gratuitas e mantidas por doações. Ainda assim temos despesas como água, luz, aluguel e impostos — por isso, qualquer contribuição faz diferença para quem mais precisa.",
  banco: {
    titulo: "Transferência bancária",
    itens: [
      { rotulo: "Favorecido", valor: "Seara Esperança" },
      { rotulo: "Banco", valor: "Bradesco" },
      { rotulo: "Agência", valor: "2403-1" },
      { rotulo: "Conta corrente", valor: "4853-4" },
      { rotulo: "CNPJ", valor: "01.568.213/0001-87" },
    ],
  },
  pix: {
    titulo: "Pix",
    texto: "Use a chave abaixo (CNPJ) ou o QR Code disponível na recepção da casa e em nosso site.",
    chave: "01568213000187",
  },
};

export const contato = {
  eyebrow: "Localização e contato",
  titulo: "Venha nos fazer uma visita",
  mapaLabel: "Parque Assunção, Taboão da Serra — SP",
  informacoes: [
    { rotulo: "Endereço", valor: "Rua das Camélias, 20 — Parque Assunção, Taboão da Serra – SP" },
    { rotulo: "CEP", valor: "06754-110" },
    { rotulo: "CNPJ", valor: "01.568.213/0001-87" },
  ],
};

export const rodape = {
  citacao: "Fora da caridade, não há salvação!",
  navegacao: [
    { label: "Sobre", href: "#sobre" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Cursos", href: "#cursos" },
  ],
  contatoLinks: [
    { label: "Localização", href: "#localizacao" },
    { label: "Doações", href: "#doacoes" },
  ],
  nomeCentro: "Lar Seara Esperança",
  aviso: "Casa espírita fundada em 1994 · Todas as atividades são gratuitas",
};
