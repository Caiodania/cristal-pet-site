# Cristal Pet — site institucional

Site da Cristal Pet Móvel (banho e tosa móvel em Indaiatuba/SP), em React + Vite +
Tailwind, publicado na Netlify.

## Estrutura de conteúdo

- `src/data/site.js` — telefones, e-mail, endereço, horário de atendimento, cidades e
  links de WhatsApp. É a fonte única desses dados no site.
- `src/data/stats.js` — números dos contadores da seção "Sobre" (contém um TODO de
  validação com o cliente).
- `src/data/galeria.js` — fotos da galeria, com dimensões declaradas.
- `public/img/` — imagens da marca já otimizadas em webp (as miniaturas da galeria
  ficam em `public/img/galeria/`, no par `<slug>.webp` + `<slug>-full.webp`).

## Formulários (Netlify Forms)

Os formulários "contato" e "newsletter" são enviados por `fetch` a partir do React
(`src/lib/netlifyForm.js`). Como o bot do Netlify só lê o HTML estático do build, o
`index.html` mantém uma cópia **oculta** de cada formulário — **não remover esses
blocos**, ou os envios param de ser registrados.

## Template original

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
