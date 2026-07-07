const categories = [
  {
    id: "guia-cultural",
    name: "Guia Cultural Local",
    icon: "文化",
    description: "Historia, costumes, musica, dancas, artesanato, literatura, idiomas e vestimentas."
  },
  {
    id: "servicos",
    name: "Servicos Uteis",
    icon: "便",
    description: "Hospitais, transporte, seguranca, bancos, correios e pontos de apoio ao visitante."
  },
  {
    id: "curiosidades",
    name: "Curiosidades Historicas",
    icon: "史",
    description: "Linha do tempo, personagens, monumentos e eventos marcantes."
  },
  {
    id: "culinaria",
    name: "Culinaria Tradicional",
    icon: "茶",
    description: "Pratos tipicos, ingredientes, bebidas, doces e restaurantes recomendados."
  },
  {
    id: "turismo",
    name: "Pontos Turisticos",
    icon: "山",
    description: "Museus, templos, pracas, parques, mirantes e locais historicos."
  },
  {
    id: "tradicoes",
    name: "Tradicoes Religiosas e Comemorativas",
    icon: "灯",
    description: "Festas populares, festivais, feriados e celebracoes tradicionais."
  }
];

const initialContent = [
  {
    id: "beijing-historia-imperial",
    title: "Beijing e a memoria imperial",
    city: "Beijing",
    category: "guia-cultural",
    type: "Historia resumida",
    summary: "Capital historica marcada por dinastias, palacios, hutongs e rituais civis.",
    detail:
      "Beijing concentra camadas importantes da historia chinesa, com referencias a periodos imperiais, planejamento urbano simbolico e areas tradicionais como os hutongs. Para o MVP, este conteudo serve como ponto de entrada para estudantes, turistas e pesquisadores.",
    tags: ["historia", "imperio", "hutongs", "cidade proibida"],
    location: "https://www.google.com/maps/search/?api=1&query=Beijing+China"
  },
  {
    id: "xian-exercito-terracota",
    title: "Exercito de Terracota",
    city: "Xi'an",
    category: "curiosidades",
    type: "Monumento",
    summary: "Conjunto arqueologico ligado ao mausoleu do primeiro imperador Qin.",
    detail:
      "O Exercito de Terracota e um dos simbolos arqueologicos mais conhecidos da China. Suas figuras ajudam a contar a centralizacao politica do periodo Qin e o valor das praticas funerarias na antiguidade chinesa.",
    tags: ["arqueologia", "qin", "monumento", "historia"],
    location: "https://www.google.com/maps/search/?api=1&query=Terracotta+Army+Xi'an"
  },
  {
    id: "hangzhou-cha-longjing",
    title: "Cha Longjing",
    city: "Hangzhou",
    category: "culinaria",
    type: "Bebida tradicional",
    summary: "Cha verde associado a Hangzhou, ao Lago Oeste e a rituais de hospitalidade.",
    detail:
      "O Longjing, conhecido como cha Poco do Dragao, representa a relacao entre paisagem, agricultura e refinamento cotidiano. Ele pode aparecer no site com historia, ingredientes, modo de preparo e locais recomendados.",
    tags: ["cha", "longjing", "gastronomia", "bebida"],
    location: "https://www.google.com/maps/search/?api=1&query=Longjing+Tea+Hangzhou"
  },
  {
    id: "shanghai-transporte",
    title: "Metro de Shanghai",
    city: "Shanghai",
    category: "servicos",
    type: "Transporte publico",
    summary: "Sistema essencial para deslocamentos urbanos, turismo e conexoes com bairros comerciais.",
    detail:
      "Para servicos uteis, o MVP apresenta itens como transporte publico, hospitais e seguranca. O metro de Shanghai e um exemplo de conteudo com finalidade pratica para turistas e moradores.",
    tags: ["transporte", "metro", "servico", "mobilidade"],
    location: "https://www.google.com/maps/search/?api=1&query=Shanghai+Metro"
  },
  {
    id: "beijing-templo-ceu",
    title: "Templo do Ceu",
    city: "Beijing",
    category: "turismo",
    type: "Ponto turistico",
    summary: "Complexo cerimonial associado a ritos imperiais e arquitetura simbolica.",
    detail:
      "O Templo do Ceu ajuda o visitante a compreender a relacao entre politica, cosmologia e arquitetura na China imperial. No Dragon Lore, o item pode reunir contexto historico, imagens futuras e localizacao.",
    tags: ["templo", "turismo", "arquitetura", "beijing"],
    location: "https://www.google.com/maps/search/?api=1&query=Temple+of+Heaven+Beijing"
  },
  {
    id: "festival-lanternas",
    title: "Festival das Lanternas",
    city: "Nacional",
    category: "tradicoes",
    type: "Festival",
    summary: "Celebracao que marca o encerramento das festividades do Ano Novo Lunar.",
    detail:
      "O Festival das Lanternas combina celebracoes familiares, lanternas decoradas, charadas e comidas tradicionais. E uma boa porta de entrada para apresentar festivais, feriados e praticas comemorativas.",
    tags: ["festival", "lanternas", "ano novo lunar", "tradicao"],
    location: ""
  }
];

const storageKeys = {
  content: "dragonLoreContent",
  favorites: "dragonLoreFavorites"
};

let contentItems = loadContent();
let favorites = loadFavorites();
let activeCategory = "todas";
let selectedItemId = null;

const elements = {
  menuToggle: document.querySelector(".menu-toggle"),
  navLinks: document.querySelector(".nav-links"),
  categoryGrid: document.querySelector("#category-grid"),
  categoryFilters: document.querySelector("#category-filters"),
  contentGrid: document.querySelector("#content-grid"),
  favoritesGrid: document.querySelector("#favorites-grid"),
  favoritesEmpty: document.querySelector("#favorites-empty"),
  emptyState: document.querySelector("#empty-state"),
  resultMeta: document.querySelector("#result-meta"),
  search: document.querySelector("#global-search"),
  cityFilter: document.querySelector("#city-filter"),
  detailCard: document.querySelector("#detail-card"),
  form: document.querySelector("#content-form"),
  resetForm: document.querySelector("#reset-form"),
  adminList: document.querySelector("#admin-list"),
  contentId: document.querySelector("#content-id"),
  titleInput: document.querySelector("#content-title-input"),
  cityInput: document.querySelector("#content-city-input"),
  categoryInput: document.querySelector("#content-category-input"),
  typeInput: document.querySelector("#content-type-input"),
  summaryInput: document.querySelector("#content-summary-input"),
  detailInput: document.querySelector("#content-detail-input"),
  tagsInput: document.querySelector("#content-tags-input")
};

function loadContent() {
  const saved = localStorage.getItem(storageKeys.content);
  return saved ? JSON.parse(saved) : initialContent;
}

function saveContent() {
  localStorage.setItem(storageKeys.content, JSON.stringify(contentItems));
}

function loadFavorites() {
  const saved = localStorage.getItem(storageKeys.favorites);
  return saved ? JSON.parse(saved) : [];
}

function saveFavorites() {
  localStorage.setItem(storageKeys.favorites, JSON.stringify(favorites));
}

function getCategory(id) {
  return categories.find((category) => category.id === id);
}

function normalize(value) {
  return value.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getFilteredContent() {
  const searchTerm = normalize(elements.search.value.trim());
  const city = elements.cityFilter.value;

  return contentItems.filter((item) => {
    const haystack = normalize(
      `${item.title} ${item.city} ${item.type} ${item.summary} ${item.detail} ${item.tags.join(" ")}`
    );
    const matchesSearch = !searchTerm || haystack.includes(searchTerm);
    const matchesCategory = activeCategory === "todas" || item.category === activeCategory;
    const matchesCity = city === "todas" || item.city === city;

    return matchesSearch && matchesCategory && matchesCity;
  });
}

function renderCategories() {
  elements.categoryGrid.innerHTML = categories
    .map(
      (category) => `
        <article class="category-card">
          <span class="category-icon" aria-hidden="true">${category.icon}</span>
          <h3>${category.name}</h3>
          <p>${category.description}</p>
          <button class="text-button" type="button" data-category-link="${category.id}">
            Ver categoria
          </button>
        </article>
      `
    )
    .join("");

  elements.categoryFilters.innerHTML = [
    { id: "todas", name: "Todas" },
    ...categories
  ]
    .map(
      (category) => `
        <button class="filter-chip ${category.id === activeCategory ? "active" : ""}" type="button" data-category="${
        category.id
      }">
          ${category.name}
        </button>
      `
    )
    .join("");

  elements.categoryInput.innerHTML = categories
    .map((category) => `<option value="${category.id}">${category.name}</option>`)
    .join("");
}

function renderCities() {
  const currentValue = elements.cityFilter.value || "todas";
  const cities = [...new Set(contentItems.map((item) => item.city))].sort();

  elements.cityFilter.innerHTML = [
    `<option value="todas">Todas as cidades</option>`,
    ...cities.map((city) => `<option value="${city}">${city}</option>`)
  ].join("");

  elements.cityFilter.value = cities.includes(currentValue) ? currentValue : "todas";
}

function renderContent() {
  const filtered = getFilteredContent();
  elements.resultMeta.textContent = `${filtered.length} conteudo(s) encontrado(s)`;
  elements.emptyState.hidden = filtered.length > 0;
  elements.contentGrid.innerHTML = filtered.map(renderCard).join("");
}

function renderCard(item) {
  const category = getCategory(item.category);
  const isFavorite = favorites.includes(item.id);

  return `
    <article class="content-card">
      <div class="card-topline">
        <span>${category?.name || "Categoria"}</span>
        <button class="icon-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${item.id}" aria-label="Favoritar ${
    item.title
  }">
          ${isFavorite ? "★" : "☆"}
        </button>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="card-meta">
        <span>${item.city}</span>
        <span>${item.type}</span>
      </div>
      <button class="button small" type="button" data-detail="${item.id}">Ver detalhes</button>
    </article>
  `;
}

function renderFavorites() {
  const favoriteItems = contentItems.filter((item) => favorites.includes(item.id));
  elements.favoritesEmpty.hidden = favoriteItems.length > 0;
  elements.favoritesGrid.innerHTML = favoriteItems.map(renderCard).join("");
}

function renderDetail(itemId) {
  const item = contentItems.find((content) => content.id === itemId);

  if (!item) {
    selectedItemId = null;
    elements.detailCard.innerHTML = `
      <p class="eyebrow">Detalhes</p>
      <h2 id="detail-title">Selecione um conteudo</h2>
      <p>Escolha um card para visualizar informacoes completas, itens relacionados e acoes uteis.</p>
    `;
    return;
  }

  selectedItemId = item.id;
  const category = getCategory(item.category);
  const related = contentItems
    .filter((candidate) => candidate.id !== item.id && candidate.category === item.category)
    .slice(0, 3);

  elements.detailCard.innerHTML = `
    <p class="eyebrow">${category?.name || "Categoria"} - ${item.city}</p>
    <h2 id="detail-title">${item.title}</h2>
    <p>${item.detail}</p>
    <div class="tag-list">
      ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <div class="detail-actions">
      <button class="button primary" type="button" data-favorite="${item.id}">
        ${favorites.includes(item.id) ? "Remover favorito" : "Adicionar favorito"}
      </button>
      <button class="button secondary" type="button" data-share="${item.id}">Compartilhar</button>
      ${item.location ? `<a class="button ghost" href="${item.location}" target="_blank" rel="noreferrer">Abrir mapa</a>` : ""}
    </div>
    <div class="related-block">
      <h3>Conteudos relacionados</h3>
      ${
        related.length
          ? related.map((relatedItem) => `<button type="button" data-detail="${relatedItem.id}">${relatedItem.title}</button>`).join("")
          : "<p>Nenhum conteudo relacionado cadastrado ainda.</p>"
      }
    </div>
  `;

  document.querySelector("#detalhes").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAdminList() {
  elements.adminList.innerHTML = contentItems
    .map(
      (item) => `
        <article class="admin-item">
          <div>
            <strong>${item.title}</strong>
            <span>${item.city} - ${getCategory(item.category)?.name || "Categoria"}</span>
          </div>
          <div class="admin-actions">
            <button class="button small" type="button" data-edit="${item.id}">Editar</button>
            <button class="button small danger" type="button" data-delete="${item.id}">Excluir</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderCategories();
  renderCities();
  renderContent();
  renderFavorites();
  renderAdminList();
  if (selectedItemId) {
    renderDetail(selectedItemId);
  }
}

function toggleFavorite(itemId) {
  favorites = favorites.includes(itemId)
    ? favorites.filter((favoriteId) => favoriteId !== itemId)
    : [...favorites, itemId];

  saveFavorites();
  renderAll();
}

async function shareItem(itemId) {
  const item = contentItems.find((content) => content.id === itemId);
  if (!item) return;

  const shareData = {
    title: `Dragon Lore - ${item.title}`,
    text: item.summary,
    url: `${window.location.origin}${window.location.pathname}#detalhes`
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
  alert("Link copiado para a area de transferencia.");
}

function fillForm(item) {
  elements.contentId.value = item.id;
  elements.titleInput.value = item.title;
  elements.cityInput.value = item.city;
  elements.categoryInput.value = item.category;
  elements.typeInput.value = item.type;
  elements.summaryInput.value = item.summary;
  elements.detailInput.value = item.detail;
  elements.tagsInput.value = item.tags.join(", ");
  elements.titleInput.focus();
}

function resetForm() {
  elements.form.reset();
  elements.contentId.value = "";
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function handleFormSubmit(event) {
  event.preventDefault();

  const title = elements.titleInput.value.trim();
  const id = elements.contentId.value || `${slugify(title)}-${Date.now()}`;
  const item = {
    id,
    title,
    city: elements.cityInput.value.trim(),
    category: elements.categoryInput.value,
    type: elements.typeInput.value.trim(),
    summary: elements.summaryInput.value.trim(),
    detail: elements.detailInput.value.trim(),
    tags: elements.tagsInput.value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    location: ""
  };

  const existingIndex = contentItems.findIndex((content) => content.id === id);

  if (existingIndex >= 0) {
    contentItems[existingIndex] = item;
  } else {
    contentItems = [item, ...contentItems];
  }

  saveContent();
  resetForm();
  renderAll();
}

function bindEvents() {
  elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.navLinks.classList.toggle("open");
    elements.menuToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  elements.search.addEventListener("input", renderContent);
  elements.cityFilter.addEventListener("change", renderContent);
  elements.form.addEventListener("submit", handleFormSubmit);
  elements.resetForm.addEventListener("click", resetForm);

  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category]");
    const categoryLink = event.target.closest("[data-category-link]");
    const favoriteButton = event.target.closest("[data-favorite]");
    const detailButton = event.target.closest("[data-detail]");
    const shareButton = event.target.closest("[data-share]");
    const editButton = event.target.closest("[data-edit]");
    const deleteButton = event.target.closest("[data-delete]");

    if (categoryButton) {
      activeCategory = categoryButton.dataset.category;
      renderAll();
    }

    if (categoryLink) {
      activeCategory = categoryLink.dataset.categoryLink;
      renderAll();
      document.querySelector("#conteudos").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.favorite);
    }

    if (detailButton) {
      renderDetail(detailButton.dataset.detail);
    }

    if (shareButton) {
      shareItem(shareButton.dataset.share);
    }

    if (editButton) {
      const item = contentItems.find((content) => content.id === editButton.dataset.edit);
      if (item) fillForm(item);
    }

    if (deleteButton) {
      const itemId = deleteButton.dataset.delete;
      contentItems = contentItems.filter((content) => content.id !== itemId);
      favorites = favorites.filter((favoriteId) => favoriteId !== itemId);
      saveContent();
      saveFavorites();
      if (selectedItemId === itemId) renderDetail(null);
      renderAll();
    }
  });
}

bindEvents();
renderAll();
