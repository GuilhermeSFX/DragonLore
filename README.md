# 🐉 Dragon Lore

<p align="center">
  <strong>Guia cultural inteligente para explorar histórias, tradições, sabores, lugares e serviços de uma região.</strong>
</p>

<p align="center">
  <img alt="Status do projeto" src="https://img.shields.io/badge/status-planejamento-blue">
  <img alt="Frontend" src="https://img.shields.io/badge/frontend-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange">
  <img alt="Versão" src="https://img.shields.io/badge/vers%C3%A3o-MVP%20inicial-lightgrey">
  <img alt="Licença" src="https://img.shields.io/badge/licen%C3%A7a-a%20definir-inactive">
</p>

---

## 📖 Sobre o Projeto

**Dragon Lore** é uma plataforma web de guia cultural inteligente criada para reunir informações sobre **história, cultura, gastronomia, turismo, serviços essenciais e tradições** de uma cidade ou região.

Nesta primeira versão, o projeto será desenvolvido como um portal cultural responsivo, utilizando **HTML5**, **CSS3** e **JavaScript**, sem necessidade de backend na fase inicial.

A proposta é centralizar conteúdos culturais confiáveis em uma experiência simples, organizada e acessível para turistas, moradores, estudantes, professores e pesquisadores.

---

## 🎯 Propósito

O Dragon Lore tem como objetivo facilitar o acesso a informações culturais relevantes, conectando pessoas à identidade local de uma região.

A plataforma foi pensada para funcionar como:

- Guia turístico.
- Guia cultural.
- Guia histórico.
- Catálogo gastronômico.
- Central de serviços úteis.
- Plataforma de preservação da cultura local.

---

## 👥 Público-Alvo

### Público primário

- Turistas.
- Viajantes.
- Estudantes.
- Professores.
- Moradores.

### Público secundário

- Secretarias de turismo.
- Guias turísticos.
- Museus.
- Instituições culturais.
- Restaurantes.
- Organizadores de eventos.

---

## ✨ Funcionalidades Previstas

- Busca por cidade ou região.
- Navegação por categorias culturais.
- Busca global por palavra-chave.
- Favoritos salvos no navegador.
- Compartilhamento de conteúdos.
- Galeria de imagens.
- Mapas ou links de localização.
- Conteúdos relacionados.
- Painel administrativo simulado para CRUD local.

---

## 🧭 Categorias de Conteúdo

O conteúdo do Dragon Lore será organizado em categorias principais:

| Categoria | Descrição |
| --- | --- |
| **Guia Cultural Local** | História resumida, costumes, música, danças, artesanato, literatura, idiomas e vestimentas típicas. |
| **Serviços Úteis** | Hospitais, farmácias, delegacias, bombeiros, bancos, correios, transporte público, aeroportos e rodoviárias. |
| **Curiosidades Históricas** | Linha do tempo, personagens históricos, monumentos e eventos marcantes. |
| **Culinária Tradicional** | Pratos típicos, ingredientes, história dos pratos, restaurantes recomendados, bebidas e doces. |
| **Pontos Turísticos** | Museus, igrejas, praças, parques, trilhas, mirantes e cachoeiras. |
| **Tradições Religiosas e Comemorativas** | Festas populares, procissões, romarias, festivais e feriados locais. |

---

## 🛠️ Stack Prevista

### Frontend

- **HTML5** para estrutura semântica.
- **CSS3** para estilos, responsividade e identidade visual.
- **JavaScript** para interações, navegação dinâmica e manipulação de dados locais.

### Backend

Nesta primeira fase, o backend **não será necessário**.

Futuramente, o projeto poderá evoluir para incluir:

- Autenticação.
- API própria.
- Banco de dados.
- Painel administrativo real.
- Persistência de dados.
- Suporte a múltiplas cidades, estados e países.

---

## 📁 Estrutura do Projeto

Estrutura inicial planejada para o frontend:

```text
Dragon-Lore/
│
├── index.html
├── main.js
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── pages/
├── data/
└── README.md
```

### Organização das pastas

| Caminho | Finalidade |
| --- | --- |
| `index.html` | Página principal da aplicação. |
| `main.js` | Arquivo principal de scripts do frontend. |
| `assets/css/` | Arquivos de estilo da aplicação. |
| `assets/images/` | Imagens utilizadas no projeto. |
| `assets/icons/` | Ícones e elementos visuais auxiliares. |
| `assets/fonts/` | Fontes locais, caso sejam necessárias. |
| `pages/` | Páginas internas futuras. |
| `data/` | Dados locais em arquivos estáticos, como JSON. |

> No momento, os arquivos base foram criados vazios para preparar a arquitetura inicial, sem implementação de HTML, CSS ou JavaScript.

---

## 🗺️ Roadmap

| Fase | Objetivo |
| --- | --- |
| **0. Preparação do projeto** | Estrutura de arquivos, modelo de dados local e padrões visuais. |
| **1. MVP cultural** | Página inicial, navegação por categorias e conteúdos culturais iniciais. |
| **2. Categorias principais** | Implementação completa das categorias previstas no PRD. |
| **3. Busca e filtros** | Busca global, busca por cidade/região, filtros e conteúdos relacionados. |
| **4. Interações** | Favoritos, compartilhamento, galeria de imagens e mapas. |
| **5. Administração simulada** | CRUD local usando memória ou `localStorage`. |
| **6. Qualidade** | Responsividade, acessibilidade, performance e revisão visual. |
| **7. Escalabilidade futura** | Preparação para backend, JWT, API, banco de dados e múltiplas regiões. |

---

## ✅ Requisitos Não Funcionais

- Tempo de resposta inferior a **2 segundos** nas principais interações.
- Interface responsiva para desktop, tablet e mobile.
- Estrutura preparada para evoluir para múltiplas cidades, estados e países.
- Organização de código pensada para crescimento gradual.
- Futuro suporte a HTTPS, JWT e maior disponibilidade em produção.

---

## 📚 Documentação do Projeto

- [PRD.md](./PRD.md): documento de requisitos do produto.
- [implementation-plan.md](./implementation-plan.md): plano de implementação dividido por fases.
- [README.md](./README.md): visão geral do projeto e guia rápido.

---

## 🚀 Como Executar Futuramente

Como esta etapa contém apenas a estrutura inicial, ainda não há uma aplicação implementada.

Quando o frontend for desenvolvido, a execução inicial poderá ser feita abrindo o arquivo:

```text
index.html
```

Ou utilizando uma extensão de servidor local, como o **Live Server**, durante o desenvolvimento.

---

## 📌 Próximos Passos

- Definir o modelo inicial de dados local.
- Planejar a identidade visual do projeto.
- Implementar a página inicial.
- Criar a navegação por categorias.
- Adicionar os primeiros conteúdos culturais.
- Preparar componentes e padrões reutilizáveis.

---

## 📊 Status

Projeto em fase de **planejamento e preparação do MVP**.

A base inicial de pastas e arquivos foi organizada para permitir uma evolução gradual do frontend, mantendo o foco em clareza, escalabilidade e documentação.

---

<p align="center">
  Feito para valorizar culturas, histórias e territórios por meio da tecnologia.
</p>
