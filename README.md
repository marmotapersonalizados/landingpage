# Marmota Landing Page

Landing page estática da Marmota para publicação no Hostinger.

## Estrutura

- `index.html`: página principal.
- `css/tailwind.css`: utilitários Tailwind gerados para produção.
- `css/styles.css`: estilos customizados da marca e componentes.
- `js/main.js`: interações da galeria, FAQ e lightbox.
- `assets/images`: imagens e mockups usados na página.

## Tailwind

O site não depende mais do CDN do Tailwind em produção. Para regenerar `css/tailwind.css`, use o Tailwind CLI apontando para `tailwind.config.cjs` e `css/tailwind-input.css`.
