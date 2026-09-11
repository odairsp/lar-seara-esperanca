# Lar Seara Esperança — Landing Page

Landing page em React + Vite + Tailwind, adaptada a partir do conteúdo real
do site https://larsearaesperanca.com/ (casa espírita em Taboão da Serra – SP,
ativa desde 1994).

## Como rodar

```bash
npm install
npm run dev
```

Site em `http://localhost:5173`.

Build de produção:

```bash
npm run build
```

Arquivos finais em `dist/`.

## Estrutura de pastas

```
lar-seara-esperanca/
├── index.html              # HTML raiz (fontes do Google Fonts entram aqui)
├── package.json
├── vite.config.js
├── tailwind.config.js      # paleta de cores e fontes do projeto
├── postcss.config.js
└── src/
    ├── main.jsx             # ponto de entrada do React
    ├── App.jsx               # monta a página juntando as seções
    ├── index.css             # diretivas do Tailwind
    ├── data/
    │   └── conteudo.js       # TODO o texto e dados do site (edite aqui)
    ├── hooks/
    │   ├── useReveal.js       # anima seções ao entrarem na tela
    │   └── useScrolled.js     # detecta rolagem para o menu fixo
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Sobre.jsx              # Nossa história
        ├── Atendimentos.jsx       # grade de atendimentos espirituais
        ├── AcaoSocial.jsx         # trabalho social e doações de materiais
        ├── Cursos.jsx             # Curso de Espiritismo, Evangelização Infantil
        ├── Doacoes.jsx            # dados bancários e chave Pix
        ├── Contato.jsx            # endereço e localização
        ├── Footer.jsx
        └── ui/
            ├── Reveal.jsx     # wrapper de animação reutilizável
            └── Eyebrow.jsx    # rótulo pequeno usado em cada seção
```

## Conteúdo replicado do site original

- Nome, motto ("Fora da caridade, não há salvação!") e história (fundação em
  1994, fundadora Dona Matilde, administração atual por Marta Inês e Julio
  Cesar Machado).
- Lista de atendimentos espirituais (Triagem, Passes, Desobsessão, Cirurgia
  Espiritual, Mesa do Evangelho, Reiki, Cromoterapia, Tratamentos Espirituais
  e Tratamento Infantil).
- Resumo do trabalho de ação social (cestas básicas, enxovais, sacolinhas de
  Natal) e lista de doações de materiais aceitas.
- Cursos oferecidos (Curso de Espiritismo e Evangelização Infantil).
- Dados de doação (banco Bradesco, agência/conta e chave Pix pelo CNPJ).
- Endereço: Rua das Camélias, 20 — Parque Assunção, Taboão da Serra – SP.
- Links reais de Facebook e YouTube da casa.

O que **não** foi trazido do site original (pode ser adicionado depois, se
quiser): o blog de "Novidades", a seção "Evangelho online", "Preces e
orações", o vídeo do hino da casa e o QR Code de Pix (a imagem em si — a
chave está incluída como texto).

## Para personalizar

- **Textos, atendimentos, dados de doação etc.:** edite `src/data/conteudo.js`.
  Nenhum componente precisa ser tocado para trocar informações.
- **Cores e fontes:** edite `tailwind.config.js` (chaves `colors` e
  `fontFamily`). As cores usadas são: `alvorada`, `papel`, `tinta`, `vela`,
  `vela-suave`, `bruma`, `noite`, `noite-2`.
- **Novas seções:** crie um componente em `src/components/` e importe-o em
  `src/App.jsx`.

## Dependências principais

- React 18
- Vite 5
- Tailwind CSS 3
