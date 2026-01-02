📍 Visão Geral

Bar do Bispo é um website institucional e comercial para um bar fictício, implementado com React, React Router, Vite e hospedado no Vercel.
O objetivo é apresentar um bar moderno com:

Página inicial com hero/banner

Cardápio com filtros e modal de detalhes

Seção Sobre nós

Página de contato com formulário e WhatsApp

Navegação fluida com Navbar

SEO e estrutura profissional

🔗 Link de visualização (deploy): https://bispobar.vercel.app/

🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

Tecnologia	Função
React	Framework front-end
Vite	Build tool rápida
React Router	Navegação entre páginas
CSS puro	Estilização customizada
Vercel	Hospedagem e deploy contínuo
SEO básico	Metatags para indexação no Google
🗂 Estrutura de Pastas
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── MenuCard.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── index.ts
│
├── style/
│   ├── App.css
│   ├── Home.css
│   ├── Menu.css
│   ├── About.css
│   └── Contact.css
│
├── App.tsx
├── main.tsx
└── index.html

📌 Funcionalidades do Site
🔹 Navbar

Navegação entre páginas sem recarregar

Itens: Início, Cardápio, Sobre, Contato

Design responsivo

🏠 Home

Seção Hero com título e chamada

Texto de boas-vindas

Acesso rápido para Cardápio e Contato

🥘 Cardápio (Menu)

Lista de itens (drinks e comidas)

Filtros: “Todos”, “Drinks”, “Comidas”

Cartões clicáveis com imagem, nome e preço

Modal com descrição e botão “Pedir no WhatsApp”

Imagens via URLs públicas

🍺 Sobre Nós

História institucional do bar

Conteúdo ficcional sobre fundação em 2025

Missão, visão e valores do negócio

📞 Contato

Formulário com nome, WhatsApp e mensagem

Informações de endereço e horário

Botão direto para WhatsApp

📈 SEO e Marketing

O site contém:

Tags meta (title, description, keywords)

Open Graph para compartilhamento no Facebook/WhatsApp

Twitter card configurado

Marca e nome otimizados para busca

Isso melhora as chances do site aparecer nos resultados de pesquisa do Google.

🛠️ Deploy

Este site está hospedado no Vercel com deploy automático a cada push no repositório.

Configuração no Vercel:

Build command: vite build

Output directory: dist

O domínio atual do deploy público é:

https://bispobar.vercel.app/

📌 Como Rodar Localmente

Clone o repositório:

git clone https://github.com/SEU-USUARIO/SEU-REPO.git


Instale dependências:

npm install


Inicie o servidor:

npm run dev

🧠 Padrões de Qualidade

Este projeto segue boas práticas:

✔ Componentização
✔ SEO básico implementado
✔ Estrutura lógica e escalável
✔ Design responsivo
✔ Deploy contínuo com Vercel

👥 Sobre o Bar do Bispo

O site Bar do Bispo foi criado como um projeto profissional para demonstrar uma aplicação real de site institucional para um bar, com foco em:

Experiência do usuário

Marca forte

Navegação simples

Conteúdo claro e atrativo

Integração com WhatsApp para pedidos

📌 Possíveis Melhorias Futuras

✔ Integração com backend real para pedidos
✔ Mapas com localização no Google Maps
✔ Sistema de reservas completo
✔ Conteúdo dinâmico via API
✔ Otimização para SEO avançado
