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

const phaseTwoContent = [
  ["Hospital Peking Union Medical College", "Beijing", "servicos", "Hospitais", "Hospital de referencia no distrito de Dongcheng.", "Opcao de referencia para atendimentos hospitalares em Beijing. Antes de uma viagem, confirme idiomas atendidos, horarios e cobertura do seu seguro.", "Peking Union Medical College Hospital Beijing"],
  ["Farmacia Tong Ren Tang", "Beijing", "servicos", "Farmacias", "Rede tradicional de farmacia e medicina chinesa.", "A Tong Ren Tang e conhecida por sua historia ligada a medicina tradicional chinesa. Para medicamentos, procure sempre orientacao profissional e observe as regras locais.", "Tong Ren Tang Beijing"],
  ["Delegacia de Policia de Dongcheng", "Beijing", "servicos", "Delegacias", "Referencia de seguranca publica na regiao central.", "Este registro representa o tipo de ponto de apoio policial que deve ser identificado pelo visitante. Em emergencias, use os canais oficiais locais.", "Dongcheng Public Security Bureau Beijing"],
  ["Corpo de Bombeiros de Shanghai", "Shanghai", "servicos", "Bombeiros", "Servico de resposta a incendios e emergencias.", "Os bombeiros integram a rede de emergencia da cidade. Mantenha os numeros locais de emergencia acessiveis durante seus deslocamentos.", "Shanghai Fire and Rescue"],
  ["Banco da China - Wangfujing", "Beijing", "servicos", "Bancos", "Agencia bancaria em uma area comercial central.", "Uma referencia para servicos bancarios e cambio. Verifique documentos necessarios, taxas e horarios antes de se dirigir a uma agencia.", "Bank of China Wangfujing Beijing"],
  ["Correio de Beijing", "Beijing", "servicos", "Correios", "Servico postal para correspondencias e encomendas.", "O correio e util para enviar cartoes, documentos e encomendas. Consulte previamente os limites e as regras de itens internacionais.", "China Post Beijing"],
  ["Metro de Shanghai", "Shanghai", "servicos", "Transporte Publico", "Rede essencial para deslocamentos pela cidade.", "O metro conecta bairros, centros comerciais e atracoes. Planeje a rota com antecedencia e mantenha o destino escrito em caracteres locais quando possivel.", "Shanghai Metro"],
  ["Aeroporto Internacional de Beijing Capital", "Beijing", "servicos", "Aeroportos", "Um dos principais acessos aereos da capital.", "O aeroporto oferece conexoes nacionais e internacionais. Consulte terminais, regras de bagagem e opcoes de transporte para o centro da cidade.", "Beijing Capital International Airport"],
  ["Rodoviaria de Shanghai", "Shanghai", "servicos", "Rodoviarias", "Ponto de partida para viagens terrestres regionais.", "As rodoviarias conectam Shanghai a cidades proximas. Confirme qual terminal atende sua rota, o horario de embarque e os documentos exigidos.", "Shanghai Long-Distance Bus Station"],

  ["Linha do tempo das dinastias chinesas", "Nacional", "curiosidades", "Linha do Tempo", "Panorama dos principais periodos dinasticos.", "Uma linha do tempo ajuda a situar mudancas politicas, culturais e tecnologicas desde as primeiras dinastias ate a China contemporanea.", "China dynasties timeline"],
  ["Qin Shi Huang", "Xi'an", "curiosidades", "Personagens Historicos", "Primeiro imperador da China unificada.", "Qin Shi Huang e associado a unificacao de reinos, padronizacoes administrativas e ao mausoleu guardado pelo Exercito de Terracota.", "Mausoleum of the First Qin Emperor Xi'an"],
  ["Grande Muralha da China", "Beijing", "curiosidades", "Monumentos", "Conjunto de fortificacoes que atravessa diferentes regioes.", "A Grande Muralha foi construida e ampliada em diversos periodos. Seus trechos revelam estrategias de defesa, trabalho coletivo e a diversidade da paisagem chinesa.", "Great Wall of China Beijing"],
  ["Fundacao da Republica Popular da China", "Beijing", "curiosidades", "Eventos Marcantes", "Marco politico celebrado em 1949.", "A proclamacao da Republica Popular da China, em 1949, redefiniu a organizacao politica do pais e permanece como uma referencia central da historia contemporanea.", "Tiananmen Square Beijing"],

  ["Jiaozi", "Nacional", "culinaria", "Pratos Tipicos", "Pasteis recheados servidos em reunioes familiares.", "Os jiaozi podem receber diferentes recheios e sao preparados cozidos, no vapor ou fritos. Eles aparecem com frequencia em celebracoes, especialmente no Ano Novo Lunar.", "jiaozi Chinese dumplings"],
  ["Pimenta-de-Sichuan", "Sichuan", "culinaria", "Ingredientes", "Especiaria conhecida pela sensacao caracteristica na boca.", "A pimenta-de-Sichuan e um ingrediente importante de preparos da regiao. Seu aroma citrico e sua sensacao levemente anestesiante marcam muitos pratos locais.", "Sichuan pepper"],
  ["Historia do Pato Laqueado de Beijing", "Beijing", "culinaria", "Historia dos Pratos", "Receita ligada a tecnicas imperiais de assar aves.", "O pato laqueado de Beijing ganhou fama por sua pele crocante e pelo modo de servico em fatias, acompanhadas de panquecas, molho e vegetais.", "Peking duck Beijing"],
  ["Quanjude", "Beijing", "culinaria", "Restaurantes Recomendados", "Restaurante tradicional conhecido pelo pato laqueado.", "Quanjude e uma referencia gastronomica para experimentar pato laqueado em Beijing. Verifique unidades, reservas e horarios antes da visita.", "Quanjude Beijing"],
  ["Baijiu", "Nacional", "culinaria", "Bebidas", "Destilado tradicional feito de graos.", "O baijiu possui estilos variados conforme a regiao e costuma acompanhar banquetes e brindes. Consuma com responsabilidade e conheca o teor alcoolico antes de provar.", "baijiu"],
  ["Mooncake", "Nacional", "culinaria", "Doces", "Doce tradicional associado ao Festival do Meio Outono.", "Os mooncakes sao bolos recheados, muitas vezes compartilhados em familia durante o Festival do Meio Outono. Os sabores e formatos variam entre regioes.", "mooncake China"],

  ["Museu Nacional da China", "Beijing", "turismo", "Museus", "Museu dedicado a historia e cultura chinesas.", "Localizado na Praca Tiananmen, o museu reune acervos que ajudam a compreender longos periodos da historia do pais. Consulte exposicoes e necessidade de reserva.", "National Museum of China Beijing"],
  ["Catedral de Xujiahui", "Shanghai", "turismo", "Igrejas", "Igreja catolica de destaque no distrito de Xuhui.", "A Catedral de Xujiahui e uma referencia da arquitetura religiosa em Shanghai. Respeite os horarios de culto e as orientacoes de visita.", "Xujiahui Cathedral Shanghai"],
  ["Praca Tiananmen", "Beijing", "turismo", "Pracas", "Grande praca publica no centro de Beijing.", "A Praca Tiananmen esta cercada por marcos civicos e culturais. Planeje a visita considerando controles de acesso, seguranca e a movimentacao do local.", "Tiananmen Square Beijing"],
  ["Parque Beihai", "Beijing", "turismo", "Parques", "Parque imperial com lago e pavilhoes historicos.", "O Parque Beihai combina jardins, arquitetura tradicional e vistas sobre o lago. E uma opcao para caminhar e observar a paisagem historica de Beijing.", "Beihai Park Beijing"],
  ["Trilha do Monte Huangshan", "Huangshan", "turismo", "Trilhas", "Caminhos entre picos, pinheiros e formacoes rochosas.", "As trilhas de Huangshan exigem planejamento por causa dos desníveis e do clima. Use calcados adequados, leve agua e acompanhe os avisos de seguranca.", "Huangshan Mountain trails"],
  ["Mirante da Torre de Shanghai", "Shanghai", "turismo", "Mirantes", "Vista panoramica da cidade a partir de Pudong.", "O observatorio da Torre de Shanghai permite observar o rio Huangpu e a paisagem urbana. Confirme condicoes de visibilidade e disponibilidade de ingressos.", "Shanghai Tower Observatory"],
  ["Cachoeira Huangguoshu", "Anshun", "turismo", "Cachoeiras", "Uma das cachoeiras mais conhecidas da China.", "A Cachoeira Huangguoshu integra uma area natural com passarelas e mirantes. A experiencia varia conforme a estacao e o volume de agua.", "Huangguoshu Waterfall"],

  ["Ano Novo Lunar", "Nacional", "tradicoes", "Festas Populares", "Principal celebracao familiar do calendario lunar.", "O Ano Novo Lunar reune deslocamentos familiares, decoracoes vermelhas, refeicoes especiais e costumes de boa sorte. As datas variam no calendario gregoriano.", "Chinese New Year"],
  ["Procissao de Nossa Senhora de Sheshan", "Shanghai", "tradicoes", "Procissoes", "Peregrinacao catolica realizada no santuario de Sheshan.", "A celebracao em Sheshan e uma referencia de pratica religiosa catolica em Shanghai. Consulte a programacao oficial e siga as orientacoes do santuario.", "Sheshan Basilica Shanghai"],
  ["Peregrinacao a Wutai Shan", "Shanxi", "tradicoes", "Romarias", "Destino de peregrinacao budista com templos historicos.", "Wutai Shan e uma das montanhas sagradas do budismo chines. Visitantes encontram templos, praticantes e percursos de valor espiritual e cultural.", "Wutai Shan China"],
  ["Festival do Barco-Dragao", "Nacional", "tradicoes", "Festivais", "Festival marcado por regatas e zongzi.", "O Festival do Barco-Dragao combina competicoes de barcos, comidas tradicionais e referencias a narrativas historicas. Ocorre no quinto mes lunar.", "Dragon Boat Festival China"],
  ["Dia Nacional da China", "Nacional", "tradicoes", "Feriados Locais", "Feriado nacional celebrado em 1 de outubro.", "O Dia Nacional marca a fundacao da Republica Popular da China. O periodo pode gerar grande movimento turistico, por isso e importante planejar deslocamentos e reservas.", "National Day China October 1"]
].map(([title, city, category, type, summary, detail, place]) => ({
  id: slugify(`${category}-${type}-${title}`),
  title,
  city,
  category,
  type,
  summary,
  detail,
  tags: [normalize(type), normalize(category), normalize(city)],
  location: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`
}));

initialContent.push(...phaseTwoContent);

const storageKeys = {
  favorites: "dragonLoreFavorites",
  nickname: "dragonloreNickname",
  lastDiscovery: "dragonloreLastDiscovery"
};

let contentItems = initialContent;
let favorites = loadFavorites();
const requestedCategory = new URLSearchParams(window.location.search).get("categoria");
const requestedItem = new URLSearchParams(window.location.search).get("item");
let activeCategory = categories.some((category) => category.id === requestedCategory) ? requestedCategory : "todas";
let selectedItemId = initialContent.some((item) => item.id === requestedItem) ? requestedItem : null;

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
  detailModal: document.querySelector("#detail-modal"),
  closeDetail: document.querySelector("#close-detail"),
  nicknameForm: document.querySelector("#nickname-form"),
  nicknameInput: document.querySelector("#nickname-input"),
  nicknameDisplay: document.querySelector("#nickname-display"),
  nicknameValue: document.querySelector("#nickname-value"),
  editNickname: document.querySelector("#edit-nickname"),
  favoritesCount: document.querySelector("#favorites-count"),
  lastDiscovery: document.querySelector("#last-discovery")
};

function loadFavorites() {
  const saved = localStorage.getItem(storageKeys.favorites);
  return saved ? JSON.parse(saved) : [];
}

function saveFavorites() {
  localStorage.setItem(storageKeys.favorites, JSON.stringify(favorites));
}

function getFavoriteItems() {
  return contentItems.filter((item) => favorites.includes(item.id));
}

function renderExplorerStatus() {
  if (!elements.nicknameForm) return;

  const nickname = localStorage.getItem(storageKeys.nickname) || "";
  const lastDiscovery = localStorage.getItem(storageKeys.lastDiscovery) || "Nenhuma ainda";

  elements.nicknameForm.hidden = Boolean(nickname);
  elements.nicknameDisplay.hidden = !nickname;
  elements.nicknameInput.value = nickname;
  elements.nicknameValue.textContent = nickname;
  elements.favoritesCount.textContent = getFavoriteItems().length;
  elements.lastDiscovery.textContent = lastDiscovery;
}

function getCategory(id) {
  return categories.find((category) => category.id === id);
}

const defaultCategoryImages = {
  "guia-cultural": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  "servicos": "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  "curiosidades": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  "culinaria": "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=80",
  "turismo": "https://images.unsplash.com/photo-1504851149312-4006c90434a1?auto=format&fit=crop&w=1200&q=80",
  "tradicoes": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
};

function getContentImage(item) {
  return item.image || defaultCategoryImages[item.category] || defaultCategoryImages["guia-cultural"];
}

function normalize(value) {
  return value.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function shouldShowMap(item) {
  if (!item.location || normalize(item.city) === "nacional") {
    return false;
  }

  const locationCategories = ["turismo", "servicos"];
  if (locationCategories.includes(item.category)) {
    return true;
  }

  const locationKeywords = [
    "restaurantes",
    "restaurante",
    "museus",
    "igrejas",
    "pracas",
    "trilhas",
    "mirantes",
    "aeroporto",
    "rodoviarias",
    "rodoviaria",
    "hospitais",
    "farmacias",
    "delegacias",
    "bombeiros",
    "bancos",
    "correios",
    "monumento",
    "terminal",
    "estacao",
    "metro",
    "parque"
  ];

  return locationKeywords.some((keyword) => normalize(item.type).includes(keyword));
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
  if (elements.categoryGrid) {
    elements.categoryGrid.innerHTML = categories
      .map(
        (category) => `
          <article class="category-card">
            <span class="category-icon" aria-hidden="true">${category.icon}</span>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <a class="text-button" href="conteudos.html?categoria=${category.id}#conteudos">
              Ver categoria
            </a>
          </article>
        `
      )
      .join("");
  }

  if (elements.categoryFilters) {
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
  }

}

function renderCities() {
  if (!elements.cityFilter) return;

  const currentValue = elements.cityFilter.value || "todas";
  const cities = [...new Set(contentItems.map((item) => item.city))].sort();

  elements.cityFilter.innerHTML = [
    `<option value="todas">Todas as cidades</option>`,
    ...cities.map((city) => `<option value="${city}">${city}</option>`)
  ].join("");

  elements.cityFilter.value = cities.includes(currentValue) ? currentValue : "todas";
}

function renderContent() {
  if (!elements.contentGrid) return;

  const filtered = getFilteredContent();
  elements.resultMeta.textContent = "";
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
        <div class="card-actions">
          <button class="icon-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${item.id}" aria-label="Favoritar ${item.title}">
            ${isFavorite ? "★" : "☆"}
          </button>
          <button class="icon-button share" type="button" data-share="${item.id}" aria-label="Compartilhar ${item.title}">
            ⤴
          </button>
        </div>
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
  if (!elements.favoritesGrid) return;

  const favoriteItems = getFavoriteItems();
  elements.favoritesEmpty.hidden = favoriteItems.length > 0;
  elements.favoritesGrid.innerHTML = favoriteItems.map(renderCard).join("");
}

function renderDetail(itemId) {
  if (!elements.detailCard) return;

  const item = contentItems.find((content) => content.id === itemId);

  if (!item) {
    selectedItemId = null;
    elements.detailModal?.close();
    return;
  }

  selectedItemId = item.id;
  localStorage.setItem(storageKeys.lastDiscovery, item.title);
  renderExplorerStatus();
  const category = getCategory(item.category);
  const related = contentItems
    .filter((candidate) => candidate.id !== item.id && candidate.category === item.category)
    .slice(0, 3);

  elements.detailCard.innerHTML = `
    <button class="modal-close" id="close-detail" type="button" aria-label="Fechar detalhes">Fechar</button>
    <div class="detail-hero">
      <img src="${getContentImage(item)}" alt="Imagem de ${item.title}" />
    </div>
    <p class="eyebrow">${category?.name || "Categoria"} - ${item.city}</p>
    <h2 id="detail-title">${item.title}</h2>
    <p>${item.detail}</p>
    <div class="detail-meta">
      <span>${item.type}</span>
      ${shouldShowMap(item) ? `<span class="detail-location">Localização disponível</span>` : `<span class="detail-location">Referência: ${item.city}</span>`}
    </div>
    <div class="tag-list">
      ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      <button class="button primary" type="button" data-favorite="${item.id}">
        ${favorites.includes(item.id) ? "Remover favorito" : "Adicionar favorito"}
      </button>
      <button class="button secondary" type="button" data-share="${item.id}">Compartilhar</button>
      ${shouldShowMap(item) ? `<a class="button ghost" href="${item.location}" target="_blank" rel="noreferrer">Abrir mapa</a>` : ""}
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

  if (elements.detailModal && !elements.detailModal.open) {
    elements.detailModal.showModal();
  }
}

function renderAll() {
  renderExplorerStatus();
  renderCategories();
  if (elements.contentGrid) {
    renderCities();
    renderContent();
  }
  renderFavorites();
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
    url: `${window.location.origin}${window.location.pathname}?item=${encodeURIComponent(item.id)}`
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
  alert("Link copiado para a area de transferencia.");
}

function bindEvents() {
  elements.menuToggle?.addEventListener("click", () => {
    const isOpen = elements.navLinks.classList.toggle("open");
    elements.menuToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  elements.search?.addEventListener("input", renderContent);
  elements.cityFilter?.addEventListener("change", renderContent);
  elements.nicknameForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = elements.nicknameInput.value.trim();
    if (!nickname) return;

    localStorage.setItem(storageKeys.nickname, nickname);
    renderExplorerStatus();
  });

  elements.editNickname?.addEventListener("click", () => {
    elements.nicknameForm.hidden = false;
    elements.nicknameDisplay.hidden = true;
    elements.nicknameInput.focus();
  });

  elements.detailModal?.addEventListener("close", () => {
    selectedItemId = null;
  });

  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category]");
    const favoriteButton = event.target.closest("[data-favorite]");
    const detailButton = event.target.closest("[data-detail]");
    const shareButton = event.target.closest("[data-share]");

    if (categoryButton) {
      activeCategory = categoryButton.dataset.category;
      renderAll();
    }

    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.favorite);
    }

    if (detailButton) {
      if (elements.detailCard) {
        renderDetail(detailButton.dataset.detail);
      } else {
        window.location.href = `conteudos.html?item=${encodeURIComponent(detailButton.dataset.detail)}`;
      }
    }

    if (event.target.closest("#close-detail")) {
      elements.detailModal?.close();
    }

    if (shareButton) {
      shareItem(shareButton.dataset.share);
    }

  });
}

bindEvents();
renderAll();
