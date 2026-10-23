const catalog = Array.isArray(window.WPLAY_CATALOG) ? window.WPLAY_CATALOG : [];

const journalistDeals = {
  "Steven Arce": {
    current: "Referencia verbal por validar: ≈ $8.000.000 COP mensuales con Stake.",
    proposal: "$10.000.000 COP mensuales",
    decision: "Ha manifestado interés en vincularse con Wplay bajo esta propuesta económica."
  },
  "César Augusto Londoño": {
    current: "Conversación comercial reportada por Level; sin tarifa vigente registrada en este catálogo.",
    proposal: "$10.000.000 COP mensuales",
    decision: "Ha manifestado interés en vincularse con Wplay bajo esta propuesta económica."
  }
};

const journalistSharedDeal = {
  rights: "Derechos de imagen, derechos de pauta y exclusividad de categoría, sujetos a contrato.",
  encartados: "Participación en Encartados en emisiones donde no coincidan con Juan Felipe Cadavid ni Eduardo Luis, por condición de competencia.",
  content: "Contenidos de pauta y piezas para su ecosistema de X/Twitter, YouTube, Instagram y Facebook."
};

const renewalAssets = [
  { id: "01", name: "Sheyla García", contract: "Docuverso", level: 0, docuverso: 7300000, rights: "Pendiente" },
  { id: "02", name: "Juan Felipe Cadavid", contract: "Level + Docuverso", level: 9648000, docuverso: 6500000, rights: "Pendiente" },
  { id: "03", name: "Eduardo Luis", contract: "Docuverso", level: 0, docuverso: 12500000, rights: "Pendiente" },
  { id: "04", name: "Fútbol Sin Límite", contract: "Level", level: 5035000, docuverso: 0, rights: "Pendiente" },
  { id: "05", name: "Laura Ortiz", contract: "Level", level: 2000000, docuverso: 0, rights: "Pendiente" },
  { id: "06", name: "Felipe Cerón / Chuby", contract: "Level", level: 2300000, docuverso: 0, rights: "Pendiente" },
  { id: "07", name: "Alexis Rodríguez", contract: "Docuverso", level: 0, docuverso: 2000000, rights: "Pendiente" },
  { id: "08", name: "Corresponsales", contract: "Level", level: 4800000, docuverso: 0, rights: "No aplica" },
  { id: "09", name: "Juan Pablo Gómez", contract: "Level", level: 0, docuverso: 0, rights: "Pendiente" },
  { id: "10", name: "Encartados · cinco periodistas", contract: "Docuverso", level: 0, docuverso: 5000000, rights: "Requiere negociación" },
  { id: "11", name: "HDJ · alcance por precisar", contract: "Docuverso", level: 0, docuverso: 3000000, rights: "Pendiente" },
  { id: "12", name: "Noticias / Wplay Sports", contract: "Docuverso", level: 0, docuverso: 1387000, rights: "No aplica" }
];

const renewalState = renewalAssets.map(asset => ({ ...asset, ipc: 6.29, renew: false, revealed: false }));
let renewalAmountsVisible = false;
let renewalGlobalIpc = 6.29;
let counterAnimationFrame = null;
const ugcCostState = { avatars: 1, videos: 4, avatarCost: 1000000, videoCost: 300000 };
let pautaTalentSelected = "Juan Felipe Cadavid";

const pautaPosts = [
  { talent: "Juan Felipe Cadavid", title: "La zurda mágica de Juanfer.", url: "https://www.instagram.com/p/Dadcv0_uxXG/", views: 751000, viewsLabel: "751.000", position: 1 },
  { talent: "Juan Felipe Cadavid", title: "¿Será la tarde de Harry Kane?", url: "https://www.instagram.com/p/DaoNLNfOKA9/", views: 696000, viewsLabel: "696.000", position: 2 },
  { talent: "Juan Felipe Cadavid", title: "Australia, Argentina y Colombia.", url: "https://www.instagram.com/p/DaVyEhdynw0/", views: 311000, viewsLabel: "311.000", position: 3 },
  { talent: "Fútbol Sin Límite", title: "Colombia y Luis Díaz.", url: "https://www.instagram.com/p/DaVz491RVc1/", views: 996000, viewsLabel: "996.000", position: 1 },
  { talent: "Fútbol Sin Límite", title: "Colombia ante Suiza y Juanfer.", url: "https://www.instagram.com/p/DadsW8kR_nh/", views: 799124, viewsLabel: "799.124", position: 2 },
  { talent: "Fútbol Sin Límite", title: "Argentina ante Suiza.", url: "https://www.instagram.com/p/DaoJdGfRlFt/", views: 506214, viewsLabel: "506.214", position: 3 },
  { talent: "Eduardo Luis", title: "Colombia ante Suiza y Luis Díaz.", url: "https://www.instagram.com/p/Dadeh4NJgRo/", views: 2000000, viewsLabel: "2.000.000", position: 1 },
  { talent: "Eduardo Luis", title: "Argentina–Inglaterra y Harry Kane.", url: "https://www.instagram.com/p/Daxk6DLOMUr/", views: 722000, viewsLabel: "722.000", position: 2 },
  { talent: "Eduardo Luis", title: "Messi en la final.", url: "https://www.instagram.com/p/Da56ymbAgD_/", views: 165000, viewsLabel: "165.000", position: 3 },
  { talent: "Sheyla García", title: "Inglaterra–Noruega.", url: "https://www.instagram.com/p/DaoUtA2Sjva/", views: 348000, viewsLabel: "348.000", position: 1 },
  { talent: "Sheyla García", title: "¿La final se define desde los doce pasos?", url: "https://www.instagram.com/p/Da57Rr4SBtU/", views: 136000, viewsLabel: "136.000", position: 2 },
  { talent: "Sheyla García", title: "Messi frente a Inglaterra.", url: "https://www.instagram.com/p/Dax8AidSXF4/", views: 98600, viewsLabel: "98.600", position: 3 },
  { talent: "Felipe Cerón", title: "Tres partidos de octavos.", url: "https://www.instagram.com/reel/Dad9aoupbp0/", views: 549000, viewsLabel: "549.000", position: 1 },
  { talent: "Felipe Cerón", title: "Messi y el mejor de la historia.", url: "https://www.instagram.com/reel/Da6Sdsqp3py/", views: 125000, viewsLabel: "125.000", position: 2 },
  { talent: "Felipe Cerón", title: "Messi decisivo en el Mundial.", url: "https://www.instagram.com/reel/DaoOWk4pwKs/", views: 46700, viewsLabel: "46.700", position: 3 },
  { talent: "Laura Ortiz", title: "Cuatro disparos de Messi.", url: "https://www.instagram.com/reel/DavxWDUA1TY/", views: 73400, viewsLabel: "73.400", position: 1 },
  { talent: "Laura Ortiz", title: "España campeón.", url: "https://www.instagram.com/reel/Da6MMhLgs5-/", views: 52600, viewsLabel: "52.600", position: 2 },
  { talent: "Laura Ortiz", title: "De Bruyne, James y Messi.", url: "https://www.instagram.com/reel/Dad4MSOAN9G/", views: 21700, viewsLabel: "21.700", position: 3 }
];

const pautaTalents = ["Todos", "Juan Felipe Cadavid", "Fútbol Sin Límite", "Eduardo Luis", "Sheyla García", "Felipe Cerón", "Laura Ortiz"];

const details = {
  juanFelipe: {
    eyebrow: "JUAN FELIPE · APORTE POR FORMATO",
    title: "20,99 millones de reproducciones con evidencia navegable",
    body: `
      <div class="format-grid">
        <article class="format-card"><small>VIDEO REDES · 232 CONTENIDOS</small><strong>13,01 M</strong><span>456.484 interacciones</span></article>
        <article class="format-card"><small>POSTPARTIDO · 109 CONTENIDOS</small><strong>5,30 M</strong><span>223.982 interacciones</span></article>
        <article class="format-card"><small>PAUTA · 10 CONTENIDOS</small><strong>2,33 M</strong><span>11.332 interacciones</span></article>
        <article class="format-card"><small>SHORT + CLIPS · 58 CONTENIDOS</small><strong>345.623</strong><span>7.302 interacciones</span></article>
      </div>
      <div class="proof-list">
        <a class="proof-link" href="https://www.tiktok.com/@juanfcadavid11/video/7610108928701107474" target="_blank" rel="noopener"><span><b>768.900</b> vistas · 23.726 interacciones</span><strong>Debate Rodallega ↗</strong></a>
        <a class="proof-link" href="https://www.facebook.com/reel/1611729659867242?locale=es_LA" target="_blank" rel="noopener"><span><b>669.000</b> vistas · 24.311 interacciones</span><strong>Expulsión de Jermein ↗</strong></a>
        <a class="proof-link" href="https://www.instagram.com/reel/DdAs6nZuLMm/" target="_blank" rel="noopener"><span><b>357.000</b> vistas · 5.510 interacciones</span><strong>Nacional solo ganó ↗</strong></a>
      </div><p class="fineprint">Corte enero–septiembre. Vistas e interacciones tomadas de 409 registros enlazados. Alcance único no disponible en la base.</p>`
  },
  fsl: {
    eyebrow: "FÚTBOL SIN LÍMITE · APORTE POR FORMATO",
    title: "Desahogo y Memes ya prueban su valor",
    body: `
      <div class="format-grid">
        <article class="format-card"><small>DESAHOGO · 190 CONTENIDOS</small><strong>9,11 M</strong><span>183.148 interacciones</span></article>
        <article class="format-card"><small>MEMES · 50 CONTENIDOS</small><strong>4,67 M</strong><span>84.261 interacciones</span></article>
        <article class="format-card"><small>PAUTA · 27 CONTENIDOS</small><strong>3,18 M</strong><span>43.671 interacciones</span></article>
        <article class="format-card"><small>VIDEO REDES · 63 CONTENIDOS</small><strong>2,30 M</strong><span>38.548 interacciones</span></article>
      </div>
      <div class="proof-list">
        <a class="proof-link" href="https://www.instagram.com/p/DYiJ571xGmx/" target="_blank" rel="noopener"><span><b>524.843</b> vistas · 11.366 interacciones</span><strong>Meme City vs. Arsenal ↗</strong></a>
        <a class="proof-link" href="https://www.instagram.com/p/DXBMclejEPZ/" target="_blank" rel="noopener"><span><b>365.386</b> vistas · 5.571 interacciones</span><strong>Desahogo DIM ↗</strong></a>
        <a class="proof-link" href="https://www.instagram.com/p/Da9SoRgxVft/" target="_blank" rel="noopener"><span><b>243.044</b> vistas · 5.552 interacciones</span><strong>Desahogo Millonarios ↗</strong></a>
      </div><p class="fineprint">Volumen registrado en la base anual. Para rankings comparables se mantienen aparte las filas con URL o cifra discrepante.</p>`
  },
  eduardo: {
    eyebrow: "EDUARDO LUIS · APORTE POR FORMATO",
    title: "Eduardo Luis · resultados por formato",
    body: `<div class="format-grid"><article class="format-card"><small>POSTPARTIDO · 21 CONTENIDOS</small><strong>7,50 M</strong><span>355.719 interacciones</span></article><article class="format-card"><small>PAUTA · 7 CONTENIDOS</small><strong>3,03 M</strong><span>7.551 interacciones</span></article><article class="format-card"><small>VIDEO REDES · 7 CONTENIDOS</small><strong>1,19 M</strong><span>25.398 interacciones</span></article><article class="format-card"><small>SHORT · 2 CONTENIDOS</small><strong>301.900</strong><span>10.283 interacciones</span></article></div><div class="proof-list"><a class="proof-link" href="https://www.instagram.com/p/DagvLkVght0/" target="_blank" rel="noopener"><span><b>1,50 M</b> vistas · 63.001 interacciones</span><strong>Eliminación de Colombia ↗</strong></a><a class="proof-link" href="https://www.instagram.com/p/Da_kxn_AnuY/" target="_blank" rel="noopener"><span><b>1,00 M</b> vistas · 62.060 interacciones</span><strong>España campeón ↗</strong></a></div>`
  },
  sheyla: {
    eyebrow: "SHEYLA GARCÍA · APORTE POR FORMATO",
    title: "Las 3 de la Semana sostiene una serie propia",
    body: `<div class="format-grid"><article class="format-card"><small>LAS 3 DE LA SEMANA · 21</small><strong>1,09 M</strong><span>142.405 interacciones</span></article><article class="format-card"><small>PAUTA · 8</small><strong>769.900</strong><span>8.025 interacciones</span></article><article class="format-card"><small>SHORT DINÁMICO · 1</small><strong>18.300</strong><span>996 interacciones</span></article></div><div class="proof-list"><a class="proof-link" href="https://www.instagram.com/reel/DXhsOncEoiX/" target="_blank" rel="noopener"><span><b>140.000</b> vistas · 1.931 interacciones</span><strong>DIM, Selección y Falcao ↗</strong></a><a class="proof-link" href="https://www.instagram.com/p/DW9np8tEjtv/" target="_blank" rel="noopener"><span><b>109.000</b> vistas · 1.933 interacciones</span><strong>Lucho Díaz y torneos internacionales ↗</strong></a></div>`
  },
  alexis: {
    eyebrow: "ALEXIS RODRÍGUEZ · CORTITAS",
    title: "Alexis Rodríguez · contenidos destacados",
    body: `<div class="impact-strip"><div><strong>30</strong><span>contenidos</span></div><div><strong>385.398</strong><span>reproducciones</span></div><div><strong>3.081</strong><span>interacciones</span></div></div><div class="proof-list"><a class="proof-link" href="https://www.instagram.com/reel/DUGphcIkbl4/" target="_blank" rel="noopener"><span><b>31.450</b> vistas · 468 interacciones</span><strong>Millonarios y América ↗</strong></a><a class="proof-link" href="https://www.instagram.com/reel/DUWXKmmEW-d/" target="_blank" rel="noopener"><span><b>23.100</b> vistas · 171 interacciones</span><strong>Noticias de Millonarios y Cali ↗</strong></a><a class="proof-link" href="https://www.instagram.com/reel/DY2x90QxUu0/" target="_blank" rel="noopener"><span><b>22.877</b> vistas · 251 interacciones</span><strong>Quintero y Mackalister ↗</strong></a></div>`
  },
  paquetes: {
    eyebrow: "LAURA Y FELIPE · RESULTADOS REGISTRADOS",
    title: "El contenido prueba una parte del paquete contratado",
    body: `<div class="grid-2"><article class="card highlight"><small>LAURA ORTIZ · 10 CONTENIDOS</small><h3>222.711 vistas · 1.659 interacciones</h3><div class="data-row"><span>Pauta</span><b>203.599 vistas</b></div><div class="data-row"><span>Short dinámico</span><b>19.112 vistas</b></div><a class="proof-link compact" href="https://www.instagram.com/reel/DavxWDUA1TY/?stkn=MXZhcno5YmthNTA0Mg==" target="_blank" rel="noopener"><span>73.400 vistas</span><strong>Ver contenido ↗</strong></a></article><article class="card highlight"><small>CHUBY · FELIPE CERÓN · 9 CONTENIDOS</small><h3>848.150 vistas · 9.550 interacciones</h3><div class="data-row"><span>Pauta</span><b>823.650 vistas</b></div><div class="data-row"><span>Short dinámico</span><b>24.500 vistas</b></div><a class="proof-link compact" href="https://www.instagram.com/reel/Dad9aoupbp0/" target="_blank" rel="noopener"><span>549.000 vistas</span><strong>Ver contenido ↗</strong></a></article></div>`
  },
  pauta: {
    eyebrow: "CONTENIDOS DE PAUTA 2026 · CRITERIOS PARA 2027",
    title: "Amplificar con evidencia comparable",
    body: `
      <div class="pauta-analysis-grid">
        <article class="card highlight"><small>LECTURA CORRECTA</small><h3>Capacidad creativa comprobada</h3><p>Eduardo Luis llega hasta 2 millones de vistas; Fútbol Sin Límite, 996.000; Juan Felipe, 751.000; Felipe Cerón, 549.000; Sheyla García, 348.000; y Laura Ortiz, 73.400.</p><p class="fineprint">Son resultados reportados de publicaciones individuales. No equivalen a alcance único, eficiencia, conversión o retorno. Sin inversión comparable no afirmamos que Eduardo sea más eficiente ni que Laura tenga menor valor comercial.</p></article>
        <article class="card blue"><small>DATOS QUE DEBEMOS CRUZAR</small><h3>Inversión y resultado por pieza</h3><ul><li>Inversión y alcance.</li><li>Reproducciones completas o retención.</li><li>Costo por reproducción o resultado.</li><li>Interacciones, clics y conversiones.</li><li>Resultado por talento y formato.</li></ul></article>
        <article class="card purple"><small>PAQUETES COMPETITIVOS</small><h3>Laura y Felipe aportan más que un Reel</h3><p>Laura Ortiz: $2.000.000 COP mensuales. Felipe Cerón: $2.300.000 COP mensuales. Los paquetes reportados incluyen contenidos, imagen, pauta y exclusividad, sujetos a revisión contractual por territorio, periodo, plataforma y uso con IA.</p></article>
      </div>
      <div class="card green"><small>RECOMENDACIÓN COMERCIAL</small><h3>Renovar esta línea de producción y amplificación</h3><p>El siguiente paso es identificar qué combinación de talento, mensaje y formato genera mejores resultados para Wplay y concentrar allí la inversión.</p></div>
      <p class="fineprint">Pendiente de cruce con pauta ejecutada directamente por Wplay. No se calculan indicadores de eficiencia sin los datos necesarios. Las decisiones definitivas de amplificación se revisarán cuando estén disponibles la inversión y los resultados de campaña.</p>`
  }
};

const opportunities = [
  {
    id: "01", group: "existing", groupLabel: "Integración en formato existente",
    name: "Clásico Paisa × Wplay", title: "La conversación del fútbol también se vive con Wplay.",
    type: "Integración en programa existente", medium: "Clásico Paisa", platforms: "YouTube · Redes sociales", format: "Programa de conversación y análisis",
    concept: "Clásico Paisa ya cuenta con identidad y comunidad propias. Wplay puede integrarse a su conversación sobre resultados, polémicas, actualidad y rendimiento.",
    mechanic: "Los periodistas conservan el formato remoto y su estilo editorial mientras activan secciones o preguntas patrocinadas.",
    integration: "Presencia gráfica, banners, menciones acordadas, secciones especiales y cápsulas para redes.",
    deliverables: ["Integración en programa", "Sección patrocinada", "Cápsulas en redes"],
    image: "assets/opportunities/clasico-paisa.png", alt: "Montaje aprobado de Clásico Paisa con Wplay",
    price: "≈ $6.000.000 COP", unit: "Referencia mensual de Stake", status: "Negociación por validar",
    commercialNote: "Referencia de negociación, no tarifa confirmada para Wplay. Pilar está interesada en escuchar una propuesta como embajadora; Óscar ya mantiene relación comercial con Wplay.",
    pending: "Validar disponibilidad, exclusividad de categoría, derechos y posible embajaduría de Pilar."
  },
  {
    id: "02", group: "existing", groupLabel: "Integración en formato existente",
    name: "Un Break × Wplay", title: "Las historias detrás del fútbol también merecen un break.",
    type: "Integración en programa existente", medium: "Un Break", platforms: "YouTube · Shorts · Reels · TikTok", format: "Entrevista larga + clips verticales",
    concept: "Un formato cercano para conocer las historias personales y profesionales de jugadores, entrenadores y otras figuras del deporte.",
    mechanic: "Una entrevista extensa produce historias, anécdotas y momentos que después se editan como contenidos verticales.",
    integration: "Apertura o sección presentada por Wplay, presencia visual, mención acordada e identidad en clips derivados.",
    deliverables: ["Entrevista completa", "Integración de marca", "Shorts, Reels y clips"],
    image: "assets/opportunities/un-break.png", alt: "Montaje aprobado de Un Break con Wplay",
    price: "Desde $3.500.000 COP", unit: "Tres paquetes oficiales", status: "Paquetes comerciales oficiales", unbreakPackages: true
  },
  {
    id: "03", group: "existing", groupLabel: "Integración en medio existente",
    name: "¿Y Cómo Dijo? × Wplay", title: "¿Quién sabe más de fútbol?",
    type: "Nueva sección patrocinada", medium: "¿Y Cómo Dijo?", platforms: "Reels · TikTok · Shorts", format: "Videos verticales de competencia callejera",
    concept: "Una competencia de conocimientos futboleros entre hinchas adultos, presentada por Wplay.",
    mechanic: "Dos aficionados responden preguntas rápidas, acumulan puntos y convierten sus aciertos, errores y reacciones en entretenimiento.",
    integration: "Patrocinio de la sección, micrófono, marcador, gráficas e identidad de Wplay en las publicaciones del medio.",
    deliverables: ["Video vertical", "Grabación y edición", "Publicación en el medio"],
    image: "assets/opportunities/y-como-dijo.png", alt: "Montaje aprobado de ¿Y Cómo Dijo? con Wplay",
    price: "$5.000.000–$6.000.000 COP", unit: "Por video", status: "Rango de referencia",
    pending: "Confirmar grabación, edición, publicación, derechos de pauta, uso de imagen y demás entregables incluidos."
  },
  {
    id: "04", group: "existing", groupLabel: "Integración en formato existente",
    name: "La Previa con Joga Melito × Wplay", title: "El micrófono es de los hinchas.",
    type: "Integración en formato existente", medium: "Joga Melito", platforms: "Reels · TikTok · Shorts", format: "Micrófono abierto en exteriores autorizados",
    concept: "Una experiencia previa al partido que captura respuestas espontáneas, humor, cábalas y pasión de aficionados adultos.",
    mechanic: "Un micrófono fijo y un letrero con una pregunta invitan a participar; Joga acompaña y las mejores respuestas se editan.",
    integration: "Patrocinio, identidad en micrófono y letrero, elementos gráficos, cortinillas y publicaciones.",
    deliverables: ["Activación en jornada", "Video vertical", "Publicación acordada"],
    image: "assets/opportunities/la-previa.png", alt: "Montaje aprobado de La Previa con Joga Melito y Wplay",
    price: "$2.500.000–$3.000.000 COP", unit: "Por video", status: "Rango de referencia",
    pending: "Precisar jornadas, ubicación autorizada, duración, entregables, publicaciones y derechos."
  },
  {
    id: "05", group: "new", groupLabel: "Nuevo formato para Wplay",
    name: "Creadores digitales / UGC con IA", title: "Dos caminos para producir contenido UGC con mayor velocidad.",
    type: "Avatares para contenido editorial, promocional y de pauta", medium: "Level Colombia · Producción propia", platforms: "Redes Wplay · Pauta autorizada", format: "Videos verticales con avatares digitales",
    concept: "Wplay puede crear un personaje desde cero o digitalizar a uno de sus embajadores. Ambos caminos usan el mismo modelo de producción y tienen el mismo costo.",
    mechanic: "Primero creamos o digitalizamos el avatar; después desarrollamos una bolsa de contenidos para producir versiones, probar mensajes y aprender con mayor rapidez.",
    integration: "El avatar puede protagonizar contenidos editoriales, promocionales o de pauta. Si representa a un embajador, su contrato debe autorizar expresamente el uso digital y publicitario.",
    deliverables: ["Avatar listo para producir", "Bolsa de contenidos", "Versiones para pruebas"],
    images: [
      { src: "assets/opportunities/ugc-wplay-1.jpeg", alt: "Presentadora digital de Wplay con micrófono", label: "UGC · REACCIÓN DEPORTIVA" },
      { src: "assets/opportunities/ugc-wplay-2.jpeg", alt: "Presentadora digital de Wplay durante un viaje", label: "UGC · CONTEXTO Y EXPERIENCIA" }
    ],
    price: "$1.000.000 avatar + $300.000 contenido", unit: "Mismo costo en ambas rutas", status: "Modelo comercial editable", calculator: true, avatarPaths: true,
    commercialNote: "Para digitalizar embajadores, el contrato debe incluir autorización de imagen, voz, creación del avatar, uso con IA, pauta, plataformas, territorio y vigencia."
  },
  {
    id: "06", group: "new", groupLabel: "Nuevo formato para Wplay",
    name: "Noticiero Wplay", title: "El fútbol colombiano, como nunca lo habías visto.",
    type: "Humor e inteligencia artificial", medium: "Propiedad editorial propia de Wplay", platforms: "Reels · TikTok · Shorts · YouTube Wplay", format: "Noticiero paródico recurrente",
    concept: "Un noticiero de humor con versiones digitales autorizadas de los embajadores de Wplay. Convierte la actualidad del fútbol colombiano en una propiedad editorial reconocible, recurrente y fácil de distribuir.",
    mechanic: "Cada semana Level selecciona los acontecimientos más interesantes, desarrolla el guion y produce un episodio con inteligencia artificial, animación y edición audiovisual.",
    integration: "Wplay no entra como patrocinador externo: el programa es una propiedad original de la marca, con identidad en apertura, escenario digital, gráficas y publicaciones.",
    deliverables: ["Desarrollo y piloto", "Guiones y episodios", "Adaptaciones verticales"],
    video: "assets/opportunities/noticiero/noticiero-wplay-2026.mp4", alt: "Montaje del Noticiero Wplay con embajadores convertidos en personajes digitales",
    price: "Por cotizar", unit: "Según alcance y frecuencia", status: "Propiedad editorial propuesta", noticiero: true,
    commercialNote: "Jorge Barón, Juan Felipe Cadavid, Eduardo Luis y Sheyla García conforman el elenco inicial propuesto. Las caracterizaciones, representaciones digitales, imitaciones de voz y usos de imagen requieren autorización expresa.",
    pending: "Definir el piloto, frecuencia, duración, autorizaciones y modalidad corta o extendida."
  },
  {
    id: "07", group: "new", groupLabel: "Nuevo formato · Experiencia con hinchas",
    name: "La Silla de la Suerte", title: "¿Hasta dónde llegarías por tu equipo?",
    type: "Experiencia participativa con hinchas adultos", medium: "Activación propia de Wplay", platforms: "Reels · TikTok · Shorts · Colaboraciones", format: "Activación de calle + videos verticales",
    concept: "Una silla azul instalada en puntos autorizados cerca de los estadios invita a los hinchas adultos a contar promesas futboleras memorables o asumir retos voluntarios, divertidos y seguros.",
    mechanic: "Un influenciador conversa con quien decide sentarse. La persona cuenta su promesa o elige un reto seguro; grabamos la reacción y, cuando la historia lo amerite, hacemos seguimiento.",
    integration: "La silla puede vivir sin logo. El contenido se publica en las redes de Wplay y puede amplificarse mediante colaboraciones con creadores y medios.",
    deliverables: ["Jornada de activación", "Videos verticales", "Colaboraciones y seguimiento"],
    images: [
      { src: "assets/opportunities/silla-suerte/silla-01.png", alt: "Silla azul frente al estadio con invitación a hacer lo que fuera por el equipo", label: "PROMESA FUTBOLERA" },
      { src: "assets/opportunities/silla-suerte/silla-02.png", alt: "Silla azul frente al estadio con invitación a contar una apuesta memorable", label: "APUESTA MEMORABLE" },
      { src: "assets/opportunities/silla-suerte/silla-03.png", alt: "Silla azul frente al estadio con invitación a comenzar un reto memorable", label: "RETO MEMORABLE" }
    ],
    price: "Por cotizar", unit: "Por activación y alcance", status: "Formato original", chair: true,
    commercialNote: "Puede amplificarse con talentos como La Liendra, sujeto a contratación y disponibilidad.",
    pending: "Definir frecuencia, ciudades, número de piezas, permisos de locación, imagen y publicación. Participación voluntaria y exclusiva para adultos elegibles; retos seguros, sin apuestas monetarias ni premios condicionados al juego."
  },
  {
    id: "08", group: "new", groupLabel: "Nuevo formato para Wplay",
    name: "De Frente con el Rival", title: "Fútbol, opinión y rivalidad sin filtros.",
    type: "Nuevo formato de debate", medium: "Clásico Paisa · Eduardo Luis · aliado aprobado", platforms: "YouTube · Clips para redes", format: "Debate entre dos hinchas rivales",
    concept: "Dos hinchas de equipos rivales se enfrentan con argumentos para defender a su club.",
    mechanic: "Un moderador presenta preguntas; cada hincha defiende su postura con humor, rivalidad y datos futboleros.",
    integration: "Patrocinio principal, micrófonos, pantalla, set, menciones y cápsulas derivadas.",
    deliverables: ["Episodio completo", "Fragmentos derivados", "Producción y logística"],
    image: "assets/opportunities/de-frente-rival.png", alt: "Montaje aprobado de estudio para De Frente con el Rival",
    price: "$5.000.000–$6.000.000 COP", unit: "Por episodio", status: "Rango preliminar",
    pending: "No incluye automáticamente honorarios adicionales, alquileres extraordinarios, pauta o distribución."
  },
  {
    id: "09", group: "new", groupLabel: "Nuevo formato para Wplay",
    name: "El Hincha vs. el Periodista", title: "La pasión desafía la mirada profesional.",
    type: "Nuevo formato de debate", medium: "Clásico Paisa · Eduardo Luis · aliado aprobado", platforms: "YouTube · Redes sociales", format: "Debate entre periodista e hincha",
    concept: "Un programa que enfrenta la mirada profesional del periodista con la pasión y los argumentos de los hinchas.",
    mechanic: "El periodista plantea una opinión; uno o varios hinchas sostienen una postura contraria con argumentos, datos y experiencias.",
    integration: "Patrocinio del formato, presencia visual y distribución acordada.",
    deliverables: ["Episodio completo", "Clips para redes", "Producción y logística"],
    image: "assets/opportunities/hincha-periodista.png", alt: "Montaje aprobado de El Hincha contra el Periodista",
    price: "$5.000.000–$6.000.000 COP", unit: "Por episodio", status: "Rango preliminar",
    pending: "Los honorarios de talentos y derechos adicionales requieren validación independiente."
  },
  {
    id: "10", group: "extension", groupLabel: "Evolución de activo vigente",
    name: "Juanito Pérez × Fútbol Sin Límite", title: "Un corresponsal IA dentro de un activo que Wplay ya tiene.",
    type: "Contenido adicional en activo vigente", medium: "Fútbol Sin Límite", platforms: "Ecosistema Fútbol Sin Límite", format: "Cápsulas de corresponsal con IA",
    concept: "Juanito Pérez cuenta historias, noticias, curiosidades y situaciones del fútbol colombiano a través del humor.",
    mechanic: "Los contenidos responden a la actualidad deportiva y se publican dentro de Fútbol Sin Límite según los acuerdos comerciales.",
    integration: "Identidad de Wplay en micrófono y gráficos, patrocinio de cápsulas y ampliación del contenido dentro del medio actual.",
    deliverables: ["Bolsa de 10 cápsulas", "Guion y producción", "Distribución acordada"],
    image: "assets/opportunities/juanito-perez-wplay.png", alt: "Juanito Pérez con micrófono de Wplay frente al estadio",
    price: "$4.000.000 COP", unit: "Bolsa de 10 contenidos", status: "Extensión de activo vigente", packages: true,
    commercialNote: "La bolsa equivale a $400.000 por contenido. Alternativa mensual: 4 contenidos por $2.000.000, equivalentes a $500.000 por pieza.",
    pending: "Definir vigencia, revisiones, tiempos, publicación, pauta y distribución. No sumar de nuevo la mensualidad base de Fútbol Sin Límite."
  }
];

function renderOpportunity(item) {
  const visual = item.video
    ? `<figure class="opportunity-visual noticiero-visual"><video src="${escapeHtml(item.video)}" aria-label="${escapeHtml(item.alt)}" controls autoplay muted loop playsinline preload="metadata"></video><figcaption>MONTAJE CONCEPTUAL · NOTICIERO WPLAY 2027</figcaption></figure>`
    : item.images?.length
    ? `<div class="opportunity-visual opportunity-visual-pair${item.chair ? " chair-gallery" : ""}">${item.images.map(image => `<figure><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy"><figcaption>${escapeHtml(image.label)}</figcaption></figure>`).join("")}</div>`
    : item.image
      ? `<figure class="opportunity-visual ${item.group === "extension" ? "juanito-visual" : ""}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy"></figure>`
      : `<div class="opportunity-placeholder"><div class="ai-orbit">W</div><strong>${escapeHtml(item.placeholderTitle || "Visual por definir")}</strong><p>${escapeHtml(item.placeholderCopy || "Espacio reservado para el material aprobado.")}</p><div class="placeholder-tags">${(item.placeholder || []).map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div></div>`;
  const unbreakPackages = item.unbreakPackages ? `
    <div class="unbreak-package-grid" aria-label="Paquetes comerciales oficiales de Un Break">
      <article><small>PAQUETE 1</small><strong>Presencia</strong><b>$3.500.000 COP</b><p>Fragmento orgánico · 3 historias · mención en el episodio · reporte a 7 días.</p></article>
      <article class="featured"><small>PAQUETE 2</small><strong>Integración</strong><b>$5.500.000 COP</b><p>Reel cocreado · 2 secuencias de historias · mención + banner · fragmento y reporte.</p></article>
      <article><small>PAQUETE 3</small><strong>Patrocinio Oficial</strong><b>$8–9 M COP</b><p>Exclusividad en 4 entrevistas · sección presentada · reel e historias · presencia en YouTube.</p></article>
    </div>` : "";
  const avatarPaths = item.avatarPaths ? `
    <div class="avatar-paths" aria-label="Dos caminos para crear avatares">
      <article><span>01</span><div><small>CREAR DESDE CERO</small><strong>Personaje original Wplay</strong><p>Identidad, apariencia, voz y personalidad diseñadas para la marca.</p></div></article>
      <div class="same-cost"><small>MISMO COSTO</small><strong>$1.000.000</strong><span>por creación o digitalización</span></div>
      <article><span>02</span><div><small>DIGITALIZAR EMBAJADOR</small><strong>Avatar del talento</strong><p>Imagen y voz del embajador con derechos contractuales expresos.</p></div></article>
    </div>` : "";
  const calculator = item.calculator ? `
    <div class="ugc-calculator" data-ugc-calculator>
      <div><small>ARMA LA BOLSA DE CONTENIDOS</small><p>El costo de creación es igual para avatar original o embajador digitalizado.</p></div>
      <label>Avatares<input type="number" min="0" step="1" value="${ugcCostState.avatars}" data-ugc-avatars></label>
      <label>Contenidos<input type="number" min="0" step="1" value="${ugcCostState.videos}" data-ugc-videos></label>
      <label>Creación<input type="number" value="${ugcCostState.avatarCost}" data-ugc-avatar-cost readonly aria-readonly="true"></label>
      <label>Por contenido<input type="number" min="0" step="50000" value="${ugcCostState.videoCost}" data-ugc-video-cost aria-label="Precio editable por contenido UGC"></label>
      <div class="ugc-total"><small>COSTO BASE</small><strong data-ugc-total>${formatCop(ugcCostState.avatars * ugcCostState.avatarCost + ugcCostState.videos * ugcCostState.videoCost)}</strong></div>
    </div>` : "";
  const juanitoPackages = item.packages ? `
    <div class="package-options"><article><small>PROPUESTA PRINCIPAL</small><strong>10 contenidos · $4.000.000</strong><span>$400.000 por contenido</span></article><article><small>OPCIÓN MENSUAL</small><strong>4 contenidos · $2.000.000</strong><span>$500.000 por contenido</span></article></div>` : "";
  const special = `${unbreakPackages}${avatarPaths}${calculator}${juanitoPackages}`;
  const noticieroCopy = item.noticiero ? `<div class="opportunity-copy noticiero-copy">
    <article class="noticiero-concept"><small>PROPIEDAD EDITORIAL ORIGINAL</small><p>${escapeHtml(item.concept)}</p><strong>No buscamos copiar La Gallina Azul. Creamos un producto propio de Wplay.</strong></article>
    <div class="noticiero-cast" aria-label="Elenco inicial propuesto"><article><b>JORGE BARÓN</b><span>El gran anunciador</span></article><article><b>JUAN FELIPE</b><span>El analista</span></article><article><b>EDUARDO LUIS</b><span>El narrador apasionado</span></article><article><b>SHEYLA GARCÍA</b><span>La presentadora</span></article></div>
    <div class="noticiero-sections"><span>La noticia</span><span>La polémica</span><span>La narración imposible</span><span>El cierre</span></div>
    <div class="noticiero-modes"><article><small>FORMATO CORTO</small><strong>Cápsula cada 8 días</strong><span>Reels · TikTok · Shorts</span></article><article><small>FORMATO EXTENDIDO</small><strong>Episodio + fragmentos</strong><span>YouTube Wplay · Redes</span></article></div>
    <div class="opportunity-bottom"><div><small>ENTREGABLES PROPUESTOS</small><div class="deliverable-tags">${item.deliverables.map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div></div><div class="investment-box"><small>INVERSIÓN</small><strong>${escapeHtml(item.price)}</strong><span>${escapeHtml(item.unit)}</span></div></div>
    <p class="pending-note"><b>Autorizaciones:</b> ${escapeHtml(item.commercialNote)}</p>
  </div>` : "";
  const chairCopy = item.chair ? `<div class="opportunity-copy chair-copy">
    <article class="chair-concept"><small>CONCEPTO</small><p>${escapeHtml(item.concept)}</p></article>
    <div class="chair-flow" aria-label="Mecánica de La Silla de la Suerte"><span><b>01</b>Instalamos</span><span><b>02</b>El hincha se sienta</span><span><b>03</b>Conversamos</span><span><b>04</b>Promesa o reto</span><span><b>05</b>Grabamos</span><span><b>06</b>Seguimos la historia</span></div>
    <article class="chair-integration"><small>¿CÓMO ENTRA WPLAY?</small><p>${escapeHtml(item.integration)}</p><strong>Creadores y medios amplifican la experiencia.</strong></article>
    <div class="opportunity-bottom"><div><small>ENTREGABLES PROPUESTOS</small><div class="deliverable-tags">${item.deliverables.map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div></div><div class="investment-box"><small>INVERSIÓN</small><strong>${escapeHtml(item.price)}</strong><span>${escapeHtml(item.unit)}</span></div></div>
    <p class="commercial-note"><b>Amplificación:</b> ${escapeHtml(item.commercialNote)}</p>
    <p class="pending-note"><b>Condiciones:</b> ${escapeHtml(item.pending)}</p>
  </div>` : "";
  return `
    <div class="opportunity-head">
      <div><div class="eyebrow">PROPUESTA ${item.id} · ${escapeHtml(item.groupLabel)}</div><h2 class="section-title">${escapeHtml(item.title)}</h2></div>
      <span class="proposal-status ${item.status.includes("Referencia") ? "reference" : ""}">${escapeHtml(item.status)}</span>
    </div>
    <div class="opportunity-meta"><span><b>TIPO</b>${escapeHtml(item.type)}</span><span><b>MEDIO / CANAL</b>${escapeHtml(item.medium)}</span><span><b>FORMATO</b>${escapeHtml(item.format)}</span></div>
    <div class="opportunity-layout${item.unbreakPackages ? " unbreak-layout" : item.avatarPaths ? " avatar-layout" : item.noticiero ? " noticiero-layout" : item.chair ? " chair-layout" : ""}">
      ${visual}
      ${item.noticiero ? noticieroCopy : item.chair ? chairCopy : item.unbreakPackages ? `<div class="opportunity-copy unbreak-opportunity-copy">
        <article class="unbreak-summary"><small>ENTREVISTA COMPLETA + AMPLIFICACIÓN EN REDES</small><p>Un episodio largo en YouTube genera historias, menciones y clips para Shorts, Reels y TikTok. Wplay elige el nivel de integración según el objetivo de campaña.</p></article>
        ${unbreakPackages}
        <p class="pending-note"><b>Por validar:</b> vigencia, frecuencia, derechos de pauta y condiciones definitivas con Un Break.</p>
      </div>` : item.avatarPaths ? `<div class="opportunity-copy avatar-opportunity-copy">
        <article class="avatar-use-cases"><small>UN AVATAR · TRES LÍNEAS DE CONTENIDO</small><div class="deliverable-tags"><span>Editorial</span><span>Promocional</span><span>Pauta</span></div><p>Primero creamos el activo digital. Después producimos una bolsa de piezas para probar mensajes, formatos y resultados.</p></article>
        ${avatarPaths}
        ${calculator}
        <p class="commercial-note"><b>Derecho indispensable:</b> ${escapeHtml(item.commercialNote)}</p>
      </div>` : `<div class="opportunity-copy">
        <article><small>CONCEPTO</small><p>${escapeHtml(item.concept)}</p></article>
        <div class="opportunity-info-grid"><article><small>¿CÓMO FUNCIONA?</small><p>${escapeHtml(item.mechanic)}</p></article><article><small>¿CÓMO ENTRA WPLAY?</small><p>${escapeHtml(item.integration)}</p></article></div>
        <div class="opportunity-bottom"><div><small>ENTREGABLES PROPUESTOS</small><div class="deliverable-tags">${item.deliverables.map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div></div><div class="investment-box"><small>${item.unit === "Costo base interno" ? "COSTO BASE" : "REFERENCIA"}</small><strong>${escapeHtml(item.price)}</strong><span>${escapeHtml(item.unit)}</span></div></div>
        ${special}
        ${item.commercialNote ? `<p class="commercial-note"><b>Lectura comercial:</b> ${escapeHtml(item.commercialNote)}</p>` : ""}
        ${item.pending ? `<p class="pending-note"><b>Pendiente:</b> ${escapeHtml(item.pending)}</p>` : ""}
      </div>`}
    </div>`;
}

function renderOpportunityTransition(code, title, body, labels) {
  return `
    <div class="opportunity-transition">
      <div class="transition-number">${escapeHtml(code)}</div>
      <div><div class="eyebrow">NUEVAS OPORTUNIDADES WPLAY 2027</div><h1 class="display">${title}</h1><p class="lead">${escapeHtml(body)}</p><div class="transition-tags">${labels.map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div></div>
    </div>`;
}

function renderOpportunitySummary() {
  return `
    <div class="eyebrow">RESUMEN COMERCIAL · ${opportunities.length} OPORTUNIDADES</div>
    <h2 class="section-title">Formatos comparables. <em>Unidades claras.</em></h2>
    <p class="section-intro">Los valores conservan su unidad de cobro. Esta tabla no suma mensualidades, videos, episodios, bolsas ni costos internos.</p>
    <div class="opportunity-table-wrap"><table class="opportunity-table"><thead><tr><th>Oportunidad</th><th>Tipo</th><th>Medio o canal</th><th>Formato</th><th>Entregables</th><th>Precio o rango</th><th>Unidad</th><th>Estado comercial</th></tr></thead><tbody>
      ${opportunities.map(item => `<tr data-summary-group="${item.group}"><td><b>${item.id}</b> ${escapeHtml(item.name)}</td><td>${escapeHtml(item.groupLabel)}</td><td>${escapeHtml(item.medium)}</td><td>${escapeHtml(item.format)}</td><td>${escapeHtml(item.deliverables.join(" · "))}</td><td><strong>${escapeHtml(item.price)}</strong></td><td>${escapeHtml(item.unit)}</td><td><span class="summary-status">${escapeHtml(item.status)}</span></td></tr>`).join("")}
    </tbody></table></div>
    <div class="summary-legend"><span><b>01–04</b> Integraciones en formatos existentes</span><span><b>05–09</b> Nuevos formatos para Wplay</span><span><b>10</b> Extensión de activo vigente</span></div>`;
}

function renderPautaCard(post) {
  return `<article class="pauta-post-card">
    <div class="pauta-post-rank">${String(post.position).padStart(2, "0")}</div>
    <div class="pauta-post-copy"><small>${escapeHtml(post.talent)}</small><h3>${escapeHtml(post.title)}</h3><strong>${escapeHtml(post.viewsLabel)} <span>reproducciones</span></strong></div>
    <a href="${escapeHtml(post.url)}" target="_blank" rel="noopener" aria-label="Ver ${escapeHtml(post.title)} en Instagram">Ver contenido ↗</a>
  </article>`;
}

function renderPautaSlide() {
  return `
    <div class="pauta-head">
      <div><div class="eyebrow">CONTENIDOS DE PAUTA 2026</div><h2 class="section-title">Seis talentos. Diferentes estilos. <em>Contenidos que podemos amplificar.</em></h2><p>Seleccionamos tres publicaciones destacadas de cada creador para mostrar el alcance registrado y analizar cómo potenciar esta línea en 2027.</p></div>
      <div class="pauta-metrics"><article><strong>6</strong><span>talentos</span></article><article><strong>18</strong><span>contenidos seleccionados</span></article><article><strong>2 M</strong><span>mayor volumen registrado</span></article></div>
    </div>
    <p class="pauta-scope-note">Esta es una selección de publicaciones destacadas; no representa todo el inventario de contenidos de Wplay.</p>
    <div class="pauta-selector" role="group" aria-label="Filtrar contenidos por talento">${pautaTalents.map(talent => `<button type="button" data-pauta-talent="${escapeHtml(talent)}" aria-pressed="${talent === pautaTalentSelected}">${escapeHtml(talent)}</button>`).join("")}</div>
    <section class="pauta-browser" aria-live="polite">
      <header><div><small id="pautaViewLabel">TRES CONTENIDOS DESTACADOS</small><h3 id="pautaViewTitle">${escapeHtml(pautaTalentSelected)}</h3></div><span id="pautaViewCount">3 contenidos</span></header>
      <div class="pauta-posts" id="pautaPosts"></div>
    </section>
    <div class="pauta-bottom-grid">
      <article class="pauta-recommendations"><div><small>¿QUÉ RECOMENDAMOS PARA 2027?</small><h3>Producir, comparar y amplificar mejor.</h3></div><ol><li><b>01</b><span>Conservar personalidades, audiencias y estilos distintos, sin depender de un único creador.</span></li><li><b>02</b><span>Probar aperturas, mensajes, versiones y formatos; amplificar los que respondan mejor al objetivo.</span></li><li><b>03</b><span>Solicitar a Wplay inversión, alcance, retención, costos, interacciones, clics y conversiones.</span></li></ol></article>
      <article class="pauta-package-note"><small>LECTURA COMERCIAL</small><h3>El valor del paquete no depende de un solo Reel.</h3><p>Laura Ortiz · $2.000.000/mes. Felipe Cerón · $2.300.000/mes. Contenidos, imagen, pauta y exclusividad reportados; derechos y alcances deben revisarse en cada contrato.</p><button class="detail-button" data-detail="pauta">Ver análisis y criterios de medición →</button></article>
    </div>
    <div class="pauta-conclusion"><strong>Recomendamos renovar los contenidos de pauta como una línea estratégica de producción y amplificación.</strong><span>Identifiquemos qué combinación de talento, mensaje y formato genera mejores resultados para concentrar allí la inversión.</span><small>Pendiente de cruce con pauta ejecutada directamente por Wplay.</small></div>`;
}

function formatCop(value) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(Math.round(Number(value) || 0));
}

function renderRenewalRows() {
  const contractOptions = ["Level", "Docuverso", "Level + Docuverso", "Pendiente"];
  const rightsOptions = ["Pendiente", "Incluido y validado", "Requiere negociación", "No aplica"];
  return renewalState.map(asset => {
    const base = asset.level + asset.docuverso;
    const projected = base * (1 + asset.ipc / 100);
    const reveal = renewalAmountsVisible || asset.revealed;
    return `<tr data-renewal-row="${asset.id}">
      <td><b>${asset.id}</b></td>
      <td><strong>${escapeHtml(asset.name)}</strong></td>
      <td><select class="renewal-select" data-renewal-contract>${contractOptions.map(option => `<option${option === asset.contract ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></td>
      <td class="amount-cell"><button class="amount-reveal" type="button" data-reveal-amount>${reveal ? "Ocultar" : "Ver"}</button><input class="money-input${reveal ? "" : " is-hidden"}" data-renewal-base type="number" min="0" step="1000" value="${base}" aria-label="Valor mensual de referencia de ${escapeHtml(asset.name)}"></td>
      <td><input class="ipc-row-input" data-renewal-ipc type="number" min="0" step="0.01" value="${asset.ipc.toFixed(2)}" aria-label="IPC de ${escapeHtml(asset.name)}"><span>%</span></td>
      <td><span class="projected-value${reveal ? "" : " is-hidden"}" data-renewal-projected>${reveal ? formatCop(projected) : "Oculto"}</span></td>
      <td><label class="renewal-check"><input data-renewal-check type="checkbox"${asset.renew ? " checked" : ""}><span>Renovar</span></label></td>
      <td><select class="renewal-select rights-select" data-renewal-rights>${rightsOptions.map(option => `<option${option === asset.rights ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></td>
    </tr>`;
  }).join("");
}

const slides = [
  {
    chapter: "MOMENTO 01 · BALANCE",
    kicker: "Apertura",
    title: "Wplay 2027",
    render: () => `
      <div class="hero-card">
        <div class="eyebrow">LEVEL COLOMBIA × WPLAY</div>
        <h1 class="display">LEVEL COLOMBIA × WPLAY<br><em>PLAN DE TRABAJO 2027</em></h1>
        <p class="lead">Un balance de lo realizado entre enero y septiembre de 2026 y una ruta de trabajo para el próximo año.</p>
        <div class="tag-row"><span class="tag yellow">Una sola operación</span><span class="tag">Talentos</span><span class="tag">Contenido</span><span class="tag">Canales</span><span class="tag">Pauta</span><span class="tag">Programas</span></div>
      </div>`
  },
  {
    chapter: "MOMENTO 01 · BALANCE",
    kicker: "Operación actual",
    title: "Todo lo que Wplay tiene hoy",
    render: () => `
      <div class="eyebrow">UNA OPERACIÓN · VARIOS FRENTES</div>
      <h2 class="section-title">Todo lo que Wplay <em>tiene hoy</em></h2>
      <p class="section-intro">Level Colombia y Docuverso se presentan como una operación coordinada. La separación contractual organiza la facturación; la historia comercial es una sola.</p>
      <div class="grid-4">
        <article class="card highlight"><div class="icon-token">01</div><small>Talentos y comunidades</small><h3>Embajadores y activos</h3><p>Juan Felipe, Eduardo, Sheyla, Alexis, Fútbol Sin Límite, Laura, Chuby y Juan Pablo Gómez.</p></article>
        <article class="card blue"><div class="icon-token">02</div><small>Territorio</small><h3>Corresponsales</h3><p>Cobertura operativa en Bogotá, Medellín, Cali y Barranquilla.</p></article>
        <article class="card purple"><div class="icon-token">03</div><small>Formatos propios</small><h3>Encartados y YouTube</h3><p>Emisión, participaciones, clips, derivados y presencia de marca en canales aliados.</p></article>
        <article class="card green"><div class="icon-token">04</div><small>Ecosistema Wplay</small><h3>Pauta y Wplay Sports</h3><p>Producción editorial constante para mantener la actualidad deportiva y alimentar los canales digitales de Wplay.</p><div class="editorial-stat"><b>45</b><span>noticias aprox. por mes</span><b>405</b><span>estimadas · ene–sep 2026</span></div></article>
      </div>`
  },
  {
    chapter: "MOMENTO 01 · BALANCE",
    kicker: "Acumulado reportado",
    title: "Nueve meses de operación",
    render: () => `
      <div class="eyebrow">ENERO–SEPTIEMBRE 2026</div>
      <h2 class="section-title">Una operación que produce, distribuye y <em>aprende</em></h2>
      <div class="metric-grid">
        <article class="metric-card"><div class="metric-value" data-counter="2540" data-counter-format="integer">2.540</div><span class="metric-label">Contenidos</span><p class="metric-note">Acumulado reportado</p></article>
        <article class="metric-card"><div class="metric-value" data-counter="48.48" data-counter-format="million">48,48 M</div><span class="metric-label">Reproducciones</span><p class="metric-note">No equivalen a audiencia única</p></article>
        <article class="metric-card"><div class="metric-value" data-counter="1.08" data-counter-format="million">1,08 M</div><span class="metric-label">Interacciones</span><p class="metric-note">Indicador reportado</p></article>
      </div>
      <div class="grid-3">
        <article class="card"><small>Planear</small><h3>Calendario deportivo</h3><p>Preparación, prioridades, coordinación de talentos y necesidades de producción.</p></article>
        <article class="card"><small>Ejecutar</small><h3>Producir y distribuir</h3><p>Grabación, edición, publicación o entrega según cada frente y canal.</p></article>
        <article class="card"><small>Mejorar</small><h3>Seguir y reportar</h3><p>Lectura por activo, plataforma y formato para orientar la siguiente decisión.</p></article>
      </div>
      <p class="fineprint">Acumulado publicado en el overview enero–septiembre. Su cobertura no está confirmada como total conciliado de todos los activos de ambos contratos.</p>`
  },
  {
    chapter: "MOMENTO 01 · ACTIVOS",
    kicker: "Juan Felipe Cadavid",
    title: "Juan Felipe Cadavid",
    render: () => `
      <div class="asset-intro"><div><div class="eyebrow">ACTIVO 02 · JUAN FELIPE CADAVID</div><h2 class="section-title asset-name">JUAN FELIPE CADAVID</h2></div><figure class="asset-portrait"><img src="assets/juan-felipe-cadavid.avif" alt="Juan Felipe Cadavid" loading="lazy"><figcaption>ACTUALIDAD · DEBATE · POSTPARTIDO</figcaption></figure></div>
      <div class="impact-strip"><div><strong>409</strong><span>contenidos enlazados</span></div><div><strong>20,99 M</strong><span>reproducciones</span></div><div><strong>699.100</strong><span>interacciones</span></div></div>
      <div class="average-summary">PROMEDIO GENERAL POR CONTENIDO <b>51.326 vistas</b><span>·</span><b>1.709 interacciones</b></div>
      <div class="grid-3">
        <article class="card blue"><small>VIDEO REDES · 232 PIEZAS</small><h3>13,01 M de vistas</h3><p>456.484 interacciones. Es el principal motor de volumen del activo.</p><div class="average-line">PROMEDIO · 56.084 vistas · 1.968 interacciones</div></article>
        <article class="card purple"><small>POSTPARTIDO · 109 PIEZAS</small><h3>5,30 M de vistas</h3><p>223.982 interacciones. Convierte la coyuntura deportiva en conversación.</p><div class="average-line">PROMEDIO · 48.663 vistas · 2.055 interacciones</div></article>
        <article class="card green"><small>PAUTA · 10 PIEZAS</small><h3>2,33 M de vistas</h3><p>11.332 interacciones registradas; la eficiencia requiere datos de inversión.</p><div class="average-line">PROMEDIO · 233.098 vistas · 1.133 interacciones</div></article>
      </div>
      <div class="card highlight"><small>LECTURA ESTRATÉGICA</small><h3>El activo funciona; la oportunidad es adaptar la distribución</h3><p>Mantener actualidad y postpartido, y convertir los mejores temas en versiones pensadas para cada plataforma.</p><button class="detail-button" data-detail="juanFelipe">Ver formatos y contenidos destacados →</button></div>`
  },
  {
    chapter: "MOMENTO 01 · ACTIVOS",
    kicker: "Fútbol Sin Límite",
    title: "Fútbol Sin Límite",
    render: () => `
      <div class="eyebrow">ACTIVO 04 · FÚTBOL SIN LÍMITE</div>
      <h2 class="section-title asset-name">FÚTBOL SIN LÍMITE</h2>
      <div class="impact-strip"><div><strong>374</strong><span>contenidos registrados</span></div><div><strong>19,75 M</strong><span>reproducciones</span></div><div><strong>353.741</strong><span>interacciones</span></div></div>
      <div class="average-summary">PROMEDIO GENERAL POR CONTENIDO <b>52.804 vistas</b><span>·</span><b>946 interacciones</b></div>
      <div class="grid-2">
        <article class="card green"><small>DESAHOGO · 190 PIEZAS</small><h3>9,11 M de vistas</h3><div class="data-row"><span>Interacciones</span><b>183.148</b></div><p>Es el formato de mayor volumen. La siguiente mejora está en adaptar apertura y duración por red.</p><div class="average-line">PROMEDIO · 47.935 vistas · 964 interacciones</div></article>
        <article class="card purple"><small>MEMES · 50 PIEZAS</small><h3>4,67 M de vistas</h3><div class="data-row"><span>Interacciones</span><b>84.261</b></div><p>Demuestran capacidad de reacción cultural y merecen distribución más amplia y consistente.</p><div class="average-line">PROMEDIO · 93.336 vistas · 1.685 interacciones</div></article>
      </div>
      <div class="card highlight"><small>LECTURA ESTRATÉGICA</small><h3>El contenido es bueno; falta convertirlo en un sistema multiplataforma</h3><p>Conservar Desahogo y Memes, adaptar el empaque para Instagram, Facebook y TikTok, y medir cada versión durante la misma ventana.</p><button class="detail-button" data-detail="fsl">Ver todos los formatos y mejores piezas →</button></div>`
  },
  {
    chapter: "MOMENTO 01 · ACTIVOS",
    kicker: "Eduardo Luis",
    title: "Eduardo Luis",
    render: () => `
      <div class="asset-intro"><div><div class="eyebrow">ACTIVO 03 · EDUARDO LUIS</div><h2 class="section-title asset-name">EDUARDO LUIS</h2></div><figure class="asset-portrait"><img src="assets/eduardo-luis.webp" alt="Eduardo Luis" loading="lazy"><figcaption>RELATO · OPINIÓN · REACCIÓN</figcaption></figure></div>
      <div class="impact-strip"><div><strong>37</strong><span>contenidos</span></div><div><strong>12,02 M</strong><span>reproducciones</span></div><div><strong>398.951</strong><span>interacciones</span></div></div>
      <div class="average-summary">PROMEDIO GENERAL POR CONTENIDO <b>324.918 vistas</b><span>·</span><b>10.782 interacciones</b></div>
      <div class="grid-3">
        <article class="card highlight"><small>POSTPARTIDO · 21 PIEZAS</small><h3>7,50 M de vistas</h3><p>355.719 interacciones: casi nueve de cada diez interacciones del activo.</p><div class="average-line">PROMEDIO · 357.007 vistas · 16.939 interacciones</div></article>
        <article class="card purple"><small>PAUTA · 7 PIEZAS</small><h3>3,03 M de vistas</h3><p>7.551 interacciones. Debe cruzarse con inversión y objetivo.</p><div class="average-line">PROMEDIO · 433.477 vistas · 1.079 interacciones</div></article>
        <article class="card blue"><small>VIDEO + SHORT · 9 PIEZAS</small><h3>1,49 M de vistas</h3><p>35.681 interacciones y una oportunidad clara de serialización.</p><div class="average-line">PROMEDIO · 165.610 vistas · 3.965 interacciones</div></article>
      </div>
      <div class="card green"><small>LECTURA ESTRATÉGICA</small><h3>Potenciar la reacción inmediata</h3><p>Priorizar grandes hitos y una tesis clara desde el primer segundo. Para liga, probar consecuencias concretas del resultado.</p><button class="detail-button" data-detail="eduardo">Ver formatos y contenidos destacados →</button></div>`
  },
  {
    chapter: "MOMENTO 01 · ACTIVOS",
    kicker: "Sheyla García",
    title: "Sheyla García",
    render: () => `
      <div class="asset-intro"><div><div class="eyebrow">ACTIVO 01 · SHEYLA GARCÍA</div><h2 class="section-title asset-name">SHEYLA GARCÍA</h2></div><figure class="asset-portrait sheyla-portrait"><img src="assets/sheyla-garcia.jpeg" alt="Sheyla García" loading="lazy"><figcaption>ACTUALIDAD · AGENDA · LAS 3 DE LA SEMANA</figcaption></figure></div>
      <div class="impact-strip"><div><strong>30</strong><span>contenidos</span></div><div><strong>1,87 M</strong><span>reproducciones</span></div><div><strong>151.426</strong><span>interacciones</span></div></div>
      <div class="average-summary">PROMEDIO GENERAL POR CONTENIDO <b>62.450 vistas</b><span>·</span><b>5.048 interacciones</b></div>
      <div class="grid-3">
        <article class="card purple"><small>LAS 3 DE LA SEMANA · 21 PIEZAS</small><h3>1,09 M de vistas</h3><p>142.405 interacciones. Es el formato editorial principal de Sheyla.</p><div class="average-line">PROMEDIO · 51.682 vistas · 6.781 interacciones</div></article>
        <article class="card highlight"><small>PAUTA · 8 PIEZAS</small><h3>769.900 vistas</h3><p>8.025 interacciones registradas; el resultado debe cruzarse con la inversión.</p><div class="average-line">PROMEDIO · 96.238 vistas · 1.003 interacciones</div></article>
        <article class="card blue"><small>SHORT DINÁMICO · 1 PIEZA</small><h3>18.300 vistas</h3><p>996 interacciones y una línea que puede desarrollarse con más frecuencia.</p><div class="average-line">PROMEDIO · 18.300 vistas · 996 interacciones</div></article>
      </div>
      <div class="card green"><small>LECTURA ESTRATÉGICA</small><h3>Potenciar una voz propia dentro de la agenda</h3><p>Conservar Las 3 de la Semana, abrir con la noticia principal y distribuir cortes derivados en otras plataformas.</p><button class="detail-button" data-detail="sheyla">Ver formatos y contenidos destacados →</button></div>`
  },
  {
    chapter: "MOMENTO 01 · ACTIVOS",
    kicker: "Paquetes contratados",
    title: "Laura Ortiz y Felipe Cerón",
    render: () => `
      <div class="eyebrow">ACTIVOS 05 Y 06 · CONTENIDO, DERECHOS Y EXCLUSIVIDAD</div>
      <h2 class="section-title asset-name">LAURA ORTIZ · FELIPE CERÓN</h2>
      <p class="section-intro">El argumento de renovación combina contenidos para redes y pauta, derechos de imagen, derechos de pauta y exclusividad. Las vistas son una parte del valor.</p>
      <div class="grid-2">
        <article class="card highlight talent-card"><img src="assets/laura-ortiz.jpg" alt="Laura Ortiz" loading="lazy"><div class="talent-card-body"><small>ACTIVO 05 · LAURA ORTIZ · 10 CONTENIDOS</small><h3>222.711 vistas</h3><div class="average-line">PROMEDIO GENERAL · 22.271 vistas · 166 interacciones</div><div class="data-row"><span>Pauta · promedio</span><b>29.086 vistas · 207 int.</b></div><div class="data-row"><span>Short · promedio</span><b>6.371 vistas · 70 int.</b></div><div class="decision"><b>Próximo paso</b><span>Construir una serie editorial comparable y medirla en varias redes.</span></div></div></article>
        <article class="card highlight talent-card"><img src="assets/felipe-ceron.jpeg" alt="Chuby, Felipe Cerón" loading="lazy"><div class="talent-card-body"><small>ACTIVO 06 · FELIPE CERÓN · 9 CONTENIDOS</small><h3>848.150 vistas</h3><div class="average-line">PROMEDIO GENERAL · 94.239 vistas · 1.061 interacciones</div><div class="data-row"><span>Pauta · promedio</span><b>117.664 vistas · 1.313 int.</b></div><div class="data-row"><span>Short · promedio</span><b>12.250 vistas · 181 int.</b></div><div class="decision"><b>Próximo paso</b><span>Probar más contenido editorial y comparar con condiciones de distribución equivalentes.</span></div></div></article>
      </div>
      <div class="card green"><small>LECTURA ESTRATÉGICA</small><h3>Mostrar resultado, derechos y oportunidad de crecimiento</h3><p>El desempeño de contenido fortalece el argumento; el paquete también incluye imagen, exclusividad y derechos de pauta.</p><button class="detail-button" data-detail="paquetes">Ver desglose y contenidos destacados →</button></div>`
  },
  {
    chapter: "MOMENTO 01 · ACTIVOS",
    kicker: "Alexis Rodríguez",
    title: "Alexis Rodríguez",
    render: () => `
      <div class="asset-intro"><div><div class="eyebrow">ACTIVO 07 · ALEXIS RODRÍGUEZ</div><h2 class="section-title asset-name">ALEXIS RODRÍGUEZ</h2></div><figure class="asset-portrait alexis-landscape"><img src="assets/alexis-rodriguez.jpeg" alt="Alexis Rodríguez" loading="lazy"><figcaption>ACTUALIDAD · CORTITAS · INFORMACIÓN</figcaption></figure></div>
      <div class="impact-strip"><div><strong>30</strong><span>contenidos</span></div><div><strong>385.398</strong><span>reproducciones</span></div><div><strong>3.081</strong><span>interacciones</span></div></div>
      <div class="average-summary">PROMEDIO GENERAL · CORTITAS <b>12.847 vistas</b><span>·</span><b>103 interacciones</b></div>
      <div class="grid-3">
        <article class="card blue"><small>CONTENIDO DESTACADO 01</small><h3>31.450 vistas</h3><p>Millonarios y América · 468 interacciones.</p></article>
        <article class="card purple"><small>CONTENIDO DESTACADO 02</small><h3>23.100 vistas</h3><p>Millonarios y Cali · 171 interacciones.</p></article>
        <article class="card green"><small>CONTENIDO DESTACADO 03</small><h3>22.877 vistas</h3><p>Quintero y Mackalister · 251 interacciones.</p></article>
      </div>
      <div class="card highlight"><small>LECTURA ESTRATÉGICA</small><h3>Una novedad y una consecuencia por pieza</h3><p>Convertir la lista de noticias en contenidos más directos y crear versiones específicas para cada plataforma.</p><button class="detail-button" data-detail="alexis">Ver resultados y contenidos destacados →</button></div>`
  },
  {
    chapter: "MOMENTO 01 · MEDICIÓN",
    kicker: "Pauta",
    title: "Contenidos de pauta 2026",
    render: renderPautaSlide
  },
  {
    chapter: "MOMENTO 01 · ECOSISTEMA",
    kicker: "Wplay Sports",
    title: "Frente editorial y de búsqueda",
    render: () => `
      <div class="eyebrow">WPLAY SPORTS · CONTENIDO PROPIO</div>
      <h2 class="section-title">La operación también construye <em>activos de la marca</em></h2>
      <figure class="wide-visual portal"><img src="assets/wplay-sports.jpeg" alt="Portada del portal Wplay Sports" loading="lazy"><figcaption>WPLAY SPORTS · ACTIVO EDITORIAL PROPIO</figcaption></figure>
      <div class="editorial-impact"><div><strong>45</strong><span>noticias aproximadas por mes</span></div><div><strong>405</strong><span>noticias estimadas · enero–septiembre 2026</span></div><p>Producción editorial constante para mantener la actualidad deportiva y alimentar los canales digitales de Wplay.</p></div>
      <div class="grid-3">
        <article class="card"><div class="icon-token">A</div><small>Actualidad</small><h3>Continuidad editorial</h3><p>Noticias, titulares, portadas y llamados a la acción dentro del ecosistema propio.</p></article>
        <article class="card"><div class="icon-token">B</div><small>Búsqueda</small><h3>Preparación para SEO</h3><p>Un frente distinto de redes y YouTube, orientado a responder temas de interés.</p></article>
        <article class="card highlight"><div class="icon-token">M</div><small>Medición pendiente</small><h3>Tráfico y acción</h3><p>Visitas, impresiones de búsqueda, posiciones, clics y conversiones permitirán demostrar el resultado.</p></article>
      </div>
      <div class="card green"><small>OPORTUNIDAD</small><h3>Organizar series y medir su contribución</h3><p>Priorizar temas útiles y conectar cada artículo con una acción siguiente. La actividad acredita ejecución; todavía no demuestra crecimiento SEO.</p><p class="fineprint">Los 405 contenidos son una estimación de 45 noticias por nueve meses. No se suman al consolidado de 2.540 porque podrían estar incluidos.</p></div>`
  },
  {
    chapter: "MOMENTO 01 · YOUTUBE",
    kicker: "Lectura del canal",
    title: "YouTube: alcance y profundidad",
    render: () => `
      <div class="eyebrow">YOUTUBE WPLAY · 1 DE MARZO AL 22 DE OCTUBRE DE 2026</div>
      <h2 class="section-title">El canal crece con <em>dos motores distintos</em></h2>
      <p class="section-intro">La pauta aporta escala. El contenido orgánico y los directos construyen tiempo de consumo, recurrencia y suscriptores.</p>
      <div class="youtube-hero-metrics">
        <article><strong>32,86 M</strong><span>visualizaciones</span></article>
        <article><strong>131.301</strong><span>horas vistas</span></article>
        <article><strong>+1.745</strong><span>suscriptores netos</span></article>
        <article><strong>7,2 %</strong><span>CTR de miniaturas</span></article>
      </div>
      <div class="youtube-split">
        <article class="youtube-engine paid"><div class="engine-head"><span>ALCANCE PAGADO</span><strong>97,8 %</strong></div><h3>32,15 M de vistas</h3><div class="engine-bar"><i style="width:97.8%"></i></div><p>77,3 % de las horas vistas · duración media de 0:21.</p></article>
        <article class="youtube-engine organic"><div class="engine-head"><span>RELACIÓN ORGÁNICA</span><strong>2,2 %</strong></div><h3>729.685 vistas</h3><div class="engine-bar"><i style="width:22.7%"></i></div><p>22,7 % de las horas vistas · duración media de 3:28.</p></article>
      </div>
      <div class="youtube-thesis"><span>LECTURA COMERCIAL</span><strong>No debemos evaluar el trabajo editorial con el volumen bruto del canal.</strong><p>La pauta amplifica; la operación editorial debe medirse por consumo orgánico, horas vistas, retención y suscriptores.</p></div>
      <p class="fineprint">Datos consultados en YouTube Studio. El periodo puede incluir vistas recibidas por publicaciones anteriores. YouTube modificó el conteo de visualizaciones desde el 27 de agosto de 2026.</p>`
  },
  {
    chapter: "MOMENTO 01 · YOUTUBE",
    kicker: "Encartados",
    title: "Encartados: profundidad y suscripción",
    render: () => `
      <div class="eyebrow">ENCARTADOS · EMISIONES EN DIRECTO</div>
      <h2 class="section-title">Menos volumen. <em>Más relación con la audiencia.</em></h2>
      <p class="section-intro">Encartados no compite con la pauta por millones de vistas. Su aporte está en el tiempo de consumo y en convertir espectadores en suscriptores.</p>
      <div class="youtube-encartados-layout">
        <div>
          <div class="youtube-hero-metrics compact">
            <article><strong>264.196</strong><span>vistas</span></article>
            <article><strong>26.743 h</strong><span>horas vistas</span></article>
            <article><strong>+818</strong><span>suscriptores</span></article>
            <article><strong>7:52</strong><span>duración media</span></article>
          </div>
          <div class="youtube-contribution">
            <div><strong>0,8 %</strong><span>de las vistas</span></div><div class="contribution-arrow">→</div>
            <div><strong>20,4 %</strong><span>de las horas</span></div><div class="contribution-arrow">→</div>
            <div><strong>46,9 %</strong><span>de los suscriptores</span></div>
          </div>
          <div class="since-september"><b>DESDE EL 1 DE SEPTIEMBRE</b><span>105.800 vistas</span><span>7.028 horas</span><span>+170 suscriptores</span><span>8:49 de duración media</span><span>8,1 % CTR</span></div>
        </div>
        <aside class="youtube-top-list">
          <small>EMISIONES DESTACADAS DESDE SEPTIEMBRE</small>
          <article><b>01</b><div><strong>¿Nacional ganó con autoridad o sufrió?</strong><span>9.645 vistas · 1.063,7 h · +33 suscriptores</span></div></article>
          <article><b>02</b><div><strong>¿James mandará a Rengifo y Cardona al banco?</strong><span>5.567 vistas · 414 h · +10 suscriptores</span></div></article>
          <article><b>03</b><div><strong>¿Junior ya quedó eliminado o sigue con vida?</strong><span>4.966 vistas · 422,2 h · +14 suscriptores</span></div></article>
        </aside>
      </div>
      <div class="youtube-thesis green"><span>DECISIÓN 2027</span><strong>Mantener el directo y convertir cada emisión en una matriz de distribución.</strong><p>El programa principal construye relación; sus mejores momentos deben alimentar Shorts, clips y otras redes.</p></div>`
  },
  {
    chapter: "MOMENTO 01 · YOUTUBE",
    kicker: "Shorts y clips",
    title: "Aprendizaje desde septiembre",
    render: () => `
      <div class="eyebrow">DISTRIBUCIÓN DERIVADA · 1 DE SEPTIEMBRE AL 22 DE OCTUBRE</div>
      <h2 class="section-title">La nueva línea empieza a mostrar <em>señales orgánicas</em></h2>
      <p class="section-intro">Separamos el rendimiento orgánico de la pauta para entender qué están aportando los Shorts y clips derivados.</p>
      <div class="youtube-format-grid">
        <article class="youtube-format-card short"><header><span>SHORTS ORGÁNICOS</span><b>58 publicados</b></header><strong>68.138</strong><small>vistas orgánicas</small><div class="format-stats"><span><b>225,7 h</b> vistas</span><span><b>0:25</b> duración media</span></div><div class="best-piece"><small>MEJOR SEÑAL EDITORIAL</small><b>Desahogo DIM · 5.886 vistas</b><span>90,9 % visto en promedio</span></div><p>El total de Shorts fue 4,93 M; 98,6 % de esas vistas provino de pauta.</p></article>
        <article class="youtube-format-card clip"><header><span>CLIPS ORGÁNICOS</span><b>37 videos publicados</b></header><strong>47.324</strong><small>vistas orgánicas</small><div class="format-stats"><span><b>395,1 h</b> vistas</span><span><b>0:47</b> duración media</span></div><div class="best-piece"><small>CLIP DE ENCARTADOS DESTACADO</small><b>Nacional y James · 780 vistas</b><span>1:39 de consumo medio</span></div><p>Los mejores clips editoriales retienen aproximadamente entre 29 % y 36 %.</p></article>
        <aside class="youtube-growth-card"><small>CAMBIO ORGÁNICO DIARIO</small><div><strong>+54 %</strong><span>vistas por día</span></div><div><strong>+22 %</strong><span>horas por día</span></div><p>Comparación aproximada frente al promedio diario de marzo–agosto.</p></aside>
      </div>
      <div class="youtube-actions"><article><b>01</b><span>Definir antes de cada directo tres momentos para Shorts y dos para clips.</span></article><article><b>02</b><span>Abrir con emoción, equipo y conflicto; evitar introducciones largas.</span></article><article><b>03</b><span>Medir cada cohorte: directo + derivados + suscriptores generados.</span></article></div>
      <p class="fineprint">La aceleración coincide con el inicio de Shorts y clips, pero no demuestra causalidad por sí sola. También influyen actualidad, frecuencia, temas y distribución.</p>`
  },
  {
    chapter: "MOMENTO 01 · DECISIONES",
    kicker: "Overview de renovación",
    title: "Overview — Renovación 2027",
    render: () => `
      <div class="renewal-head">
        <div><div class="eyebrow">CALCULADORA COMERCIAL · VALORES MENSUALES EN COP</div><h2 class="section-title">OVERVIEW — <em>RENOVACIÓN 2027</em></h2><p class="section-intro">Evaluemos los activos actuales y construyamos el escenario de renovación de Wplay para el próximo año.</p></div>
        <div class="renewal-toolbar"><label>IPC de referencia (%)<input id="globalIpc" type="number" min="0" step="0.01" value="${renewalGlobalIpc.toFixed(2)}"></label><button id="toggleAmounts" type="button">${renewalAmountsVisible ? "Ocultar importes" : "Mostrar importes"}</button></div>
      </div>
      <div class="renewal-table-wrap"><table class="renewal-table"><thead><tr><th>#</th><th>Activo</th><th>Contrato</th><th>Valor de referencia</th><th>IPC</th><th>Proyectado 2027</th><th>Renovar</th><th>Derechos digitales 2027</th></tr></thead><tbody>${renderRenewalRows()}</tbody></table></div>
      <div class="renewal-nonmoney"><span><b id="selectedTotal">0 / ${renewalState.length}</b> activos seleccionados</span><span><b id="selectedLevel">0</b> de Level</span><span><b id="selectedDocuverso">0</b> de Docuverso</span></div>
      <div class="renewal-totals">
        <article><small>TOTAL CONTRATO LEVEL</small><strong data-total-level>${renewalAmountsVisible ? formatCop(0) : "Oculto"}</strong><span>mensual proyectado</span></article>
        <article><small>TOTAL CONTRATO DOCUVERSO</small><strong data-total-docuverso>${renewalAmountsVisible ? formatCop(0) : "Oculto"}</strong><span>mensual proyectado</span></article>
        <article class="grand"><small>TOTAL RENOVACIÓN 2027</small><strong data-total-general>${renewalAmountsVisible ? formatCop(0) : "Oculto"}</strong><span>mensual proyectado</span></article>
      </div>
      <p class="fineprint">Referencia provisional: IPC anual septiembre de 2026. El ajuste definitivo dependerá del cierre aplicable y de lo pactado en cada contrato. Los importes se ocultan solo para la presentación visual; los valores fuente siguen siendo técnicamente accesibles en el proyecto.</p>`
  },
  {
    chapter: "MOMENTO 02 · CATÁLOGO",
    kicker: "Explorador de perfiles",
    title: "Catálogo interactivo",
    render: () => `
      <div class="eyebrow">BANCO DE EXPLORACIÓN · NO ES LISTADO DE CONTRATADOS</div>
      <h2 class="section-title">Encontrar perfiles por <em>función y contexto</em></h2>
      <div class="catalog-type-switch" role="group" aria-label="Cambiar tipo de perfil">
        <button class="catalog-type-button active" type="button" data-catalog-type="Periodista" aria-pressed="true"><span>Periodistas</span><strong>100</strong></button>
        <button class="catalog-type-button" type="button" data-catalog-type="Influenciador" aria-pressed="false"><span>Influenciadores</span><strong>94</strong></button>
        <button class="catalog-type-button compact" type="button" data-catalog-type="" aria-pressed="false"><span>Ver todos</span><strong>194</strong></button>
      </div>
      <div class="catalog-shell">
        <aside class="catalog-controls">
          <label for="catalogSearch" id="catalogSearchLabel">Buscar periodista o medio</label><input id="catalogSearch" type="search" placeholder="Ej. Win Sports, ESPN…">
          <label for="catalogHouse">Casa de apuestas registrada</label><select id="catalogHouse"><option value="">Todas</option></select>
          <label for="catalogSort">Ordenar</label><select id="catalogSort"><option value="wplay">Wplay primero</option><option value="source">Orden de la fuente</option><option value="followers">Seguidores: mayor a menor</option><option value="name">Nombre: A–Z</option></select>
          <div class="catalog-priority" id="catalogPriority"><b id="catalogPriorityTitle">Primero, el equipo Wplay</b><span><strong id="catalogWplayCount">0</strong> <span id="catalogPriorityCopy">periodistas registrados con la marca.</span></span></div>
          <div class="catalog-summary"><strong id="catalogCount">100</strong><span id="catalogCountLabel">periodistas visibles</span></div>
        </aside>
        <div class="catalog-table-wrap"><table class="catalog-table"><thead><tr><th>Perfil</th><th>Tipo</th><th id="catalogContextHead">Medio</th><th>Casa registrada</th><th>Seguidores IG</th><th>Perfil</th></tr></thead><tbody id="catalogRows"></tbody></table></div>
      </div>`
  },
  {
    chapter: "MOMENTO 02 · ESTRATEGIA",
    kicker: "Influenciadores 2027",
    title: "Activaciones alrededor de momentos",
    render: () => `
      <div class="eyebrow">INFLUENCIADORES × WPLAY 2027</div>
      <h2 class="section-title">Primero definimos el momento. <em>Luego elegimos el talento.</em></h2>
      <p class="section-intro">El catálogo permite explorar perfiles. La estrategia convierte esos nombres en experiencias y contenidos conectados con eventos importantes del calendario.</p>
      <div class="influencer-strategy-layout">
        <div class="influencer-steps">
          <article><b>01</b><div><small>ESTRATEGIA</small><strong>Elegir los momentos</strong><p>Clásicos, finales, Selección Colombia, torneos internacionales y fechas de alta conversación.</p></div></article>
          <article><b>02</b><div><small>ROL DEL TALENTO</small><strong>Elegir la función</strong><p>Anfitrión, retador, creador, narrador o amplificador según audiencia, territorio y afinidad.</p></div></article>
          <article><b>03</b><div><small>ACTIVACIÓN</small><strong>Crear algo memorable</strong><p>Apuestas memorables, retos memorables y experiencias con hinchas adultos, llevadas a contenidos multiplataforma.</p></div></article>
        </div>
        <aside class="influencer-budget-card">
          <small>PRESUPUESTO QUE DEBEMOS ENTENDER</small>
          <h3>Una bolsa anual de activaciones</h3>
          <ul><li>Honorarios del talento</li><li>Producción y logística</li><li>Derechos de imagen y pauta</li><li>Experiencia, premios y desplazamientos</li><li>Amplificación en medios</li></ul>
          <div><span>VARIABLES CLAVE</span><b>Número de eventos · ciudades · perfiles · piezas · derechos</b></div>
        </aside>
      </div>
      <div class="influencer-decision"><div><small>BANCO DISPONIBLE</small><strong>94 influenciadores para explorar</strong></div><div><small>SIGUIENTE DECISIÓN</small><strong>Definir presupuesto y calendario prioritario</strong></div><p>Con esas dos decisiones, Level puede construir una selección corta de talentos y una ruta de activaciones coherente con Wplay como la casa patrocinadora de los hinchas.</p></div>
      <p class="fineprint">Las activaciones relacionadas con apuestas deben dirigirse a mayores de edad, cumplir la regulación aplicable e incorporar juego responsable.</p>`
  },
  {
    chapter: "MOMENTO 02 · PROPUESTAS",
    kicker: "Nuevas oportunidades",
    title: `${opportunities.length} oportunidades para crecer`,
    render: () => `
      <div class="hero-card opportunity-opening">
        <div class="eyebrow">NUEVAS OPORTUNIDADES WPLAY 2027</div>
        <h1 class="display">Nuevos formatos.<br><em>Nuevas conversaciones.</em></h1>
        <p class="lead">Una propuesta para ampliar la presencia de Wplay en el entretenimiento deportivo mediante formatos existentes, contenidos originales, experiencias con hinchas y producción audiovisual con inteligencia artificial.</p>
        <div class="opportunity-categories"><article><b>01</b><div><strong>Formatos donde Wplay puede integrarse</strong><p>Aprovechamos contenidos, programas y medios que ya existen.</p></div></article><article><b>02</b><div><strong>Nuevos formatos para Wplay</strong><p>Creamos contenidos originales con talentos, medios, producción e inteligencia artificial.</p></div></article></div>
        <div class="brand-concept">Wplay, la casa patrocinadora de los hinchas.</div>
        <p class="opening-note">También proponemos evolucionar activos vigentes con nuevas líneas de contenido, como Juanito Pérez en Fútbol Sin Límite.</p>
        <div class="tag-row"><span class="tag yellow">${opportunities.length} oportunidades</span><span class="tag">3 bloques comerciales</span><span class="tag">Unidades de cobro diferenciadas</span></div>
      </div>`
  },
  ...opportunities.filter(item => item.group === "existing").map(item => ({
    chapter: "MOMENTO 02 · PROPUESTAS",
    kicker: item.name,
    title: item.title,
    render: () => renderOpportunity(item)
  })),
  {
    chapter: "MOMENTO 02 · NUEVOS FORMATOS",
    kicker: "Transición",
    title: "Nuevas ideas para seguir construyendo conversación",
    render: () => renderOpportunityTransition("02", "Nuevas ideas para seguir<br><em>construyendo conversación.</em>", "Además de integrarnos en contenidos existentes, Level propone desarrollar nuevos formatos que aprovechen la relación con los talentos actuales de Wplay, sus canales y la capacidad de producción de la agencia. Estos contenidos pueden existir en medios aliados, dentro de YouTube Wplay o en redes sociales.", ["Producción Level", "Talentos actuales", "Canales Wplay", "Inteligencia artificial"])
  },
  ...opportunities.filter(item => item.group === "new").map(item => ({
    chapter: "MOMENTO 02 · NUEVOS FORMATOS",
    kicker: item.name,
    title: item.title,
    render: () => renderOpportunity(item)
  })),
  {
    chapter: "MOMENTO 02 · ACTIVO VIGENTE",
    kicker: "Transición",
    title: "Evolucionar lo que Wplay ya tiene",
    render: () => renderOpportunityTransition("03", "Evolucionar un activo.<br><em>Activarlo mejor.</em>", "Fútbol Sin Límite ya forma parte de la operación actual. La siguiente oportunidad suma una nueva línea de contenido dentro de ese activo, sin volver a cobrar automáticamente su mensualidad base.", ["Activo vigente", "Contenido incremental", "Activación flexible"])
  },
  ...opportunities.filter(item => item.group === "extension").map(item => ({
    chapter: "MOMENTO 02 · ACTIVO VIGENTE",
    kicker: item.name,
    title: item.title,
    render: () => renderOpportunity(item)
  })),
  {
    chapter: "MOMENTO 02 · PROPUESTAS",
    kicker: "Resumen comercial",
    title: `${opportunities.length} oportunidades para Wplay`,
    render: renderOpportunitySummary
  }
];

const [juanSlide, fslSlide, eduardoSlide, sheylaSlide, packagesSlide, alexisSlide] = slides.splice(3, 6);
slides.splice(3, 0, sheylaSlide, juanSlide, eduardoSlide, fslSlide, packagesSlide, alexisSlide);

let currentSlide = 0;
const slideEl = document.getElementById("slide");
const indexPanel = document.getElementById("indexPanel");
const scrim = document.getElementById("scrim");

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[character]);
}

function openIndex() {
  indexPanel.classList.add("open");
  indexPanel.setAttribute("aria-hidden", "false");
  scrim.classList.add("open");
}

function closeIndex() {
  indexPanel.classList.remove("open");
  indexPanel.setAttribute("aria-hidden", "true");
  scrim.classList.remove("open");
}

function renderIndex() {
  document.getElementById("indexList").innerHTML = slides.map((item, index) => `
    <button class="index-item ${index === currentSlide ? "active" : ""}" data-slide="${index}" type="button">
      <span class="index-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="index-copy"><small>${escapeHtml(item.kicker)}</small><span>${escapeHtml(item.title)}</span></span>
    </button>`).join("");
}

function renderSlide() {
  if (counterAnimationFrame) {
    cancelAnimationFrame(counterAnimationFrame);
    counterAnimationFrame = null;
  }
  const item = slides[currentSlide];
  slideEl.style.animation = "none";
  void slideEl.offsetHeight;
  slideEl.style.animation = "";
  slideEl.classList.toggle("pauta-mode", item.title === "Contenidos de pauta 2026");
  slideEl.innerHTML = item.render();
  document.getElementById("chapterPill").textContent = item.chapter;
  document.getElementById("slideCounter").textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${slides.length}`;
  document.getElementById("slideKicker").textContent = item.kicker;
  document.getElementById("progressTitle").textContent = item.title;
  document.getElementById("progressCount").textContent = `${currentSlide + 1} de ${slides.length}`;
  document.getElementById("progressFill").style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  document.getElementById("prevSlide").disabled = currentSlide === 0;
  document.getElementById("nextSlide").disabled = currentSlide === slides.length - 1;
  const activeMoment = item.chapter.startsWith("MOMENTO 02") ? 1 : 0;
  document.querySelectorAll(".moment").forEach((button, index) => button.classList.toggle("active", index === activeMoment));
  renderIndex();
  if (item.title === "Catálogo interactivo") setupCatalog();
  if (item.title === "Nueve meses de operación") runMetricCounters();
  if (item.title === "Overview — Renovación 2027") setupRenewal();
  if (item.title === "Contenidos de pauta 2026") setupPauta();
  if (slideEl.querySelector("[data-ugc-calculator]")) setupUgcCalculator();
  document.getElementById("stage").scrollTop = 0;
}

function goToSlide(index) {
  currentSlide = Math.max(0, Math.min(slides.length - 1, Number(index)));
  renderSlide();
  closeIndex();
}

function openDetail(key) {
  const detail = details[key];
  if (!detail) return;
  document.getElementById("detailEyebrow").textContent = detail.eyebrow;
  document.getElementById("detailTitle").textContent = detail.title;
  document.getElementById("detailBody").innerHTML = detail.body;
  document.getElementById("detailModal").showModal();
}

function runMetricCounters() {
  const counters = [...document.querySelectorAll("[data-counter]")];
  if (!counters.length) return;
  const formatValue = (value, format) => format === "integer"
    ? new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(Math.round(value))
    : `${new Intl.NumberFormat("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)} M`;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    counters.forEach(counter => { counter.textContent = formatValue(Number(counter.dataset.counter), counter.dataset.counterFormat); });
    return;
  }
  counters.forEach(counter => { counter.textContent = counter.dataset.counterFormat === "million" ? "0,00 M" : "0"; });
  const startedAt = performance.now();
  const duration = 1900;
  const animate = now => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    counters.forEach(counter => {
      const end = Number(counter.dataset.counter);
      counter.textContent = formatValue(progress === 1 ? end : end * eased, counter.dataset.counterFormat);
    });
    if (progress < 1) counterAnimationFrame = requestAnimationFrame(animate);
    else counterAnimationFrame = null;
  };
  counterAnimationFrame = requestAnimationFrame(animate);
}

function setupRenewal() {
  const rows = [...document.querySelectorAll("[data-renewal-row]")];
  if (!rows.length) return;
  const globalIpc = document.getElementById("globalIpc");
  const toggleAmounts = document.getElementById("toggleAmounts");

  function stateFor(row) {
    return renewalState.find(asset => asset.id === row.dataset.renewalRow);
  }

  function setRowVisibility(row) {
    const asset = stateFor(row);
    const visible = renewalAmountsVisible || asset.revealed;
    const input = row.querySelector("[data-renewal-base]");
    const projected = row.querySelector("[data-renewal-projected]");
    const button = row.querySelector("[data-reveal-amount]");
    input.classList.toggle("is-hidden", !visible);
    projected.classList.toggle("is-hidden", !visible);
    button.disabled = renewalAmountsVisible;
    button.textContent = renewalAmountsVisible ? "Visible" : asset.revealed ? "Ocultar" : "Ver";
  }

  function update() {
    let selected = 0;
    let selectedLevel = 0;
    let selectedDocuverso = 0;
    let levelTotal = 0;
    let docuversoTotal = 0;
    rows.forEach(row => {
      const asset = stateFor(row);
      const adjustment = Number(row.querySelector("[data-renewal-ipc]").value) || 0;
      const contract = row.querySelector("[data-renewal-contract]").value;
      const checked = row.querySelector("[data-renewal-check]").checked;
      asset.ipc = adjustment;
      asset.contract = contract;
      asset.renew = checked;
      asset.rights = row.querySelector("[data-renewal-rights]").value;
      const multiplier = 1 + adjustment / 100;
      const base = asset.level + asset.docuverso;
      const projected = base * multiplier;
      const projectedNode = row.querySelector("[data-renewal-projected]");
      projectedNode.textContent = renewalAmountsVisible || asset.revealed ? formatCop(projected) : "Oculto";
      setRowVisibility(row);
      if (!checked) return;
      selected += 1;
      if (contract === "Level") {
        selectedLevel += 1;
        levelTotal += projected;
      } else if (contract === "Docuverso") {
        selectedDocuverso += 1;
        docuversoTotal += projected;
      } else if (contract === "Level + Docuverso") {
        selectedLevel += 1;
        selectedDocuverso += 1;
        levelTotal += asset.level * multiplier;
        docuversoTotal += asset.docuverso * multiplier;
      }
    });
    document.getElementById("selectedTotal").textContent = `${selected} / ${renewalState.length}`;
    document.getElementById("selectedLevel").textContent = selectedLevel;
    document.getElementById("selectedDocuverso").textContent = selectedDocuverso;
    const show = renewalAmountsVisible;
    document.querySelector("[data-total-level]").textContent = show ? formatCop(levelTotal) : "Oculto";
    document.querySelector("[data-total-docuverso]").textContent = show ? formatCop(docuversoTotal) : "Oculto";
    document.querySelector("[data-total-general]").textContent = show ? formatCop(levelTotal + docuversoTotal) : "Oculto";
  }

  rows.forEach(row => {
    const asset = stateFor(row);
    row.querySelector("[data-reveal-amount]").addEventListener("click", () => {
      asset.revealed = !asset.revealed;
      update();
    });
    row.querySelector("[data-renewal-base]").addEventListener("input", event => {
      const nextBase = Math.max(0, Number(event.target.value) || 0);
      const priorBase = asset.level + asset.docuverso;
      if (priorBase > 0) {
        const ratio = nextBase / priorBase;
        asset.level *= ratio;
        asset.docuverso *= ratio;
      } else if (asset.contract === "Docuverso") asset.docuverso = nextBase;
      else asset.level = nextBase;
      update();
    });
    row.querySelector("[data-renewal-ipc]").addEventListener("input", update);
    ["[data-renewal-contract]", "[data-renewal-check]", "[data-renewal-rights]"].forEach(selector => row.querySelector(selector).addEventListener("change", update));
  });

  globalIpc.addEventListener("input", () => {
    renewalGlobalIpc = Math.max(0, Number(globalIpc.value) || 0);
    renewalState.forEach(asset => { asset.ipc = renewalGlobalIpc; });
    rows.forEach(row => { row.querySelector("[data-renewal-ipc]").value = renewalGlobalIpc.toFixed(2); });
    update();
  });
  toggleAmounts.addEventListener("click", () => {
    renewalAmountsVisible = !renewalAmountsVisible;
    toggleAmounts.textContent = renewalAmountsVisible ? "Ocultar importes" : "Mostrar importes";
    update();
  });
  update();
}

function setupUgcCalculator() {
  const calculator = document.querySelector("[data-ugc-calculator]");
  if (!calculator) return;
  const avatars = calculator.querySelector("[data-ugc-avatars]");
  const videos = calculator.querySelector("[data-ugc-videos]");
  const avatarCost = calculator.querySelector("[data-ugc-avatar-cost]");
  const videoCost = calculator.querySelector("[data-ugc-video-cost]");
  const total = calculator.querySelector("[data-ugc-total]");
  const update = () => {
    ugcCostState.avatars = Math.max(0, Math.floor(Number(avatars.value) || 0));
    ugcCostState.videos = Math.max(0, Math.floor(Number(videos.value) || 0));
    ugcCostState.avatarCost = Math.max(0, Number(avatarCost.value) || 0);
    ugcCostState.videoCost = Math.max(0, Number(videoCost.value) || 0);
    avatars.value = ugcCostState.avatars;
    videos.value = ugcCostState.videos;
    total.textContent = formatCop(ugcCostState.avatars * ugcCostState.avatarCost + ugcCostState.videos * ugcCostState.videoCost);
  };
  [avatars, videos, avatarCost, videoCost].forEach(input => input.addEventListener("input", update));
  update();
}

function setupPauta() {
  const posts = document.getElementById("pautaPosts");
  if (!posts) return;
  const buttons = [...document.querySelectorAll("[data-pauta-talent]")];
  const viewLabel = document.getElementById("pautaViewLabel");
  const viewTitle = document.getElementById("pautaViewTitle");
  const viewCount = document.getElementById("pautaViewCount");
  const talentOrder = pautaTalents.filter(talent => talent !== "Todos");

  function update() {
    buttons.forEach(button => {
      const active = button.dataset.pautaTalent === pautaTalentSelected;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (pautaTalentSelected === "Todos") {
      posts.classList.add("all-mode");
      viewLabel.textContent = "RESUMEN POR TALENTO";
      viewTitle.textContent = "Seis voces · seis resultados destacados";
      viewCount.textContent = "18 disponibles";
      posts.innerHTML = `<div class="pauta-summary-grid">${talentOrder.map(talent => {
        const group = pautaPosts.filter(post => post.talent === talent).sort((a,b) => a.position - b.position);
        const maximum = group.reduce((highest, post) => post.views > highest.views ? post : highest, group[0]);
        return `<article class="pauta-talent-summary"><small>3 CONTENIDOS</small><strong>${escapeHtml(talent)}</strong><b>${escapeHtml(maximum.viewsLabel)}</b><span>máximo registrado</span><button type="button" data-pauta-select="${escapeHtml(talent)}">Ver sus contenidos →</button></article>`;
      }).join("")}</div><button class="pauta-open-all" type="button" data-pauta-open-all>Consultar las 18 publicaciones y enlaces ↗</button>`;
    } else {
      const filtered = pautaPosts.filter(post => post.talent === pautaTalentSelected).sort((a,b) => a.position - b.position);
      posts.classList.remove("all-mode");
      viewLabel.textContent = "TRES CONTENIDOS DESTACADOS";
      viewTitle.textContent = pautaTalentSelected;
      viewCount.textContent = "3 contenidos";
      posts.innerHTML = `<div class="pauta-card-grid">${filtered.map(renderPautaCard).join("")}</div>`;
    }
    posts.querySelectorAll("[data-pauta-select]").forEach(button => button.addEventListener("click", () => {
      pautaTalentSelected = button.dataset.pautaSelect;
      update();
    }));
    posts.querySelector("[data-pauta-open-all]")?.addEventListener("click", openPautaAll);
  }

  buttons.forEach(button => button.addEventListener("click", () => {
    pautaTalentSelected = button.dataset.pautaTalent;
    update();
  }));
  update();
}

function openPautaAll() {
  const talentOrder = pautaTalents.filter(talent => talent !== "Todos");
  document.getElementById("detailEyebrow").textContent = "CONTENIDOS DE PAUTA 2026 · CONSULTA COMPLETA";
  document.getElementById("detailTitle").textContent = "18 publicaciones destacadas · 6 talentos";
  document.getElementById("detailBody").innerHTML = `<div class="pauta-all-groups">${talentOrder.map(talent => {
    const group = pautaPosts.filter(post => post.talent === talent).sort((a,b) => a.position - b.position);
    const maximum = group.reduce((highest, post) => post.views > highest.views ? post : highest, group[0]);
    return `<section class="pauta-talent-group"><div class="pauta-group-head"><strong>${escapeHtml(talent)}</strong><span>hasta ${escapeHtml(maximum.viewsLabel)} vistas</span></div><div class="pauta-card-grid">${group.map(renderPautaCard).join("")}</div></section>`;
  }).join("")}</div>`;
  document.getElementById("detailModal").showModal();
}

function setupCatalog() {
  const rows = document.getElementById("catalogRows");
  if (!rows) return;
  const search = document.getElementById("catalogSearch");
  const typeButtons = [...document.querySelectorAll("[data-catalog-type]")];
  const house = document.getElementById("catalogHouse");
  const sort = document.getElementById("catalogSort");
  const searchLabel = document.getElementById("catalogSearchLabel");
  const contextHead = document.getElementById("catalogContextHead");
  const priority = document.getElementById("catalogPriority");
  const priorityTitle = document.getElementById("catalogPriorityTitle");
  const priorityCopy = document.getElementById("catalogPriorityCopy");
  const wplayCount = document.getElementById("catalogWplayCount");
  let activeType = "Periodista";
  const houses = [...new Set(catalog.map(item => item.bettingHouse).filter(Boolean))].sort((a,b) => a.localeCompare(b, "es"));
  house.insertAdjacentHTML("beforeend", houses.map(item => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join(""));
  const isWplay = item => item.bettingHouse?.trim().toLocaleLowerCase("es") === "wplay";

  function update() {
    const term = search.value.trim().toLocaleLowerCase("es");
    let filtered = catalog.filter(item => {
      const haystack = `${item.name} ${item.context} ${item.bettingHouse}`.toLocaleLowerCase("es");
      return (!term || haystack.includes(term)) && (!activeType || item.type === activeType) && (!house.value || item.bettingHouse === house.value);
    });
    if (sort.value === "wplay") filtered.sort((a,b) => Number(isWplay(b)) - Number(isWplay(a)) || a.id - b.id);
    if (sort.value === "followers") filtered.sort((a,b) => (b.followers ?? -1) - (a.followers ?? -1));
    if (sort.value === "name") filtered.sort((a,b) => a.name.localeCompare(b.name, "es"));
    wplayCount.textContent = activeType === "Influenciador"
      ? catalog.filter(item => item.type === "Influenciador").length
      : catalog.filter(item => (!activeType || item.type === activeType) && isWplay(item)).length;
    document.getElementById("catalogCount").textContent = filtered.length;
    document.getElementById("catalogCountLabel").textContent = activeType === "Periodista" ? "periodistas visibles" : activeType === "Influenciador" ? "influenciadores visibles" : "registros visibles";
    rows.innerHTML = filtered.length ? filtered.map(item => {
      const deal = journalistDeals[item.name];
      const rowClasses = [isWplay(item) ? "wplay-row" : "", deal ? "deal-row" : ""].filter(Boolean).join(" ");
      return `<tr class="${rowClasses}"><td>${escapeHtml(item.name)}${isWplay(item) ? `<span class="wplay-badge">WPLAY</span>` : ""}${deal ? `<span class="deal-badge">PROPUESTA 2027</span>` : ""}</td><td><span class="type-badge">${escapeHtml(item.type)}</span></td><td><small>${escapeHtml(item.contextLabel)}</small><br>${escapeHtml(item.context || "Sin dato")}</td><td>${escapeHtml(item.bettingHouse)}</td><td>${escapeHtml(item.followersLabel)}</td><td><div class="catalog-actions">${item.instagram ? `<a href="${escapeHtml(item.instagram)}" target="_blank" rel="noopener">Instagram ↗</a>` : "<span>Sin enlace</span>"}${deal ? `<button type="button" data-journalist-deal="${escapeHtml(item.name)}">Ver propuesta</button>` : ""}</div></td></tr>`;
    }).join("") : `<tr><td colspan="6" class="empty-state">No hay registros que coincidan con estos filtros.</td></tr>`;
  }

  function setType(nextType) {
    activeType = nextType;
    typeButtons.forEach(button => {
      const active = button.dataset.catalogType === activeType;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (activeType === "Influenciador") {
      searchLabel.textContent = "Buscar influenciador o equipo";
      search.placeholder = "Ej. Millonarios, Nacional…";
      contextHead.textContent = "Equipo / afinidad";
      priorityTitle.textContent = "Mapa de comunidades";
      priorityCopy.textContent = "influenciadores para explorar por equipo y afinidad.";
      priority.classList.add("influencer-mode");
      sort.value = "source";
    } else if (activeType === "Periodista") {
      searchLabel.textContent = "Buscar periodista o medio";
      search.placeholder = "Ej. Win Sports, ESPN…";
      contextHead.textContent = "Medio";
      priorityTitle.textContent = "Primero, el equipo Wplay";
      priorityCopy.textContent = "periodistas registrados con la marca.";
      priority.classList.remove("influencer-mode");
      sort.value = "wplay";
    } else {
      searchLabel.textContent = "Buscar nombre, medio o equipo";
      search.placeholder = "Ej. Millonarios, ESPN…";
      contextHead.textContent = "Medio / afinidad";
      priorityTitle.textContent = "Base completa";
      priorityCopy.textContent = "perfiles registrados con la marca.";
      priority.classList.remove("influencer-mode");
      sort.value = "wplay";
    }
    update();
  }

  [search, house, sort].forEach(control => control.addEventListener(control === search ? "input" : "change", update));
  typeButtons.forEach(button => button.addEventListener("click", () => setType(button.dataset.catalogType)));
  rows.addEventListener("click", event => {
    const trigger = event.target.closest("[data-journalist-deal]");
    if (!trigger) return;
    const name = trigger.dataset.journalistDeal;
    const deal = journalistDeals[name];
    if (!deal) return;
    document.getElementById("detailEyebrow").textContent = "CATÁLOGO DE PERIODISTAS · ESCENARIO COMERCIAL 2027";
    document.getElementById("detailTitle").textContent = `${name} × Wplay`;
    document.getElementById("detailBody").innerHTML = `
      <div class="journalist-deal-detail">
        <section><span>Propuesta mensual</span><strong>${escapeHtml(deal.proposal)}</strong><p>${escapeHtml(deal.decision)}</p></section>
        <section><span>Referencia actual</span><p>${escapeHtml(deal.current)}</p></section>
        <section><span>Alcance compartido</span><ul><li>${escapeHtml(journalistSharedDeal.rights)}</li><li>${escapeHtml(journalistSharedDeal.encartados)}</li><li>${escapeHtml(journalistSharedDeal.content)}</li></ul></section>
        <p class="deal-note">Escenario preliminar informado por Level. Valores, exclusividad, derechos, entregables y condiciones de participación sujetos a negociación y contrato.</p>
      </div>`;
    document.getElementById("detailModal").showModal();
  });
  setType("Periodista");
}

document.getElementById("openIndex").addEventListener("click", openIndex);
document.getElementById("closeIndex").addEventListener("click", closeIndex);
scrim.addEventListener("click", closeIndex);
document.getElementById("prevSlide").addEventListener("click", () => goToSlide(currentSlide - 1));
document.getElementById("nextSlide").addEventListener("click", () => goToSlide(currentSlide + 1));
document.getElementById("openSources").addEventListener("click", () => document.getElementById("sourcesModal").showModal());
document.addEventListener("click", event => {
  const jump = event.target.closest("[data-jump]");
  if (jump) goToSlide(jump.dataset.jump);
  const indexItem = event.target.closest("[data-slide]");
  if (indexItem) goToSlide(indexItem.dataset.slide);
  const detail = event.target.closest("[data-detail]");
  if (detail) openDetail(detail.dataset.detail);
  const close = event.target.closest("[data-close-modal]");
  if (close) document.getElementById(close.dataset.closeModal).close();
});
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) dialog.close();
}));
window.addEventListener("keydown", event => {
  const tag = document.activeElement?.tagName;
  if (["INPUT", "SELECT", "TEXTAREA"].includes(tag)) return;
  if (event.key === "ArrowRight" || event.key === "PageDown") goToSlide(currentSlide + 1);
  if (event.key === "ArrowLeft" || event.key === "PageUp") goToSlide(currentSlide - 1);
  if (event.key.toLowerCase() === "i") openIndex();
});

renderSlide();
