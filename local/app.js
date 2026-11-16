const products = [
  ['A1', 'Libreta Bogotá D.C.', 'libreta', 'Una libreta de bolsillo de 48 páginas, con fotografías de Bogotá y espacios rayados y punteados para guardar lo que viste en el viaje.'],
  ['A2', 'Pasaporte Colombia', 'pasaporte', 'Una libreta de viaje de 60 páginas con portada vinotinto, ilustraciones bilingües y espacio para anotar sabores, sellos y recuerdos.'],
  ['A3', 'Gorra +57', 'gorra-57', 'Gorra negra con el indicativo de Colombia bordado al frente y un detalle tricolor en la parte de atrás.'],
  ['B1', 'Gorra Bogotá', 'gorra-bogota', 'Gorra negra con Bogotá en cursiva al frente, el logo LOCAL atrás y un detalle tricolor.'],
  ['B2', 'Gorra Jo Jo Jo', 'gorra-local', 'Gorra negra navideña con bordado en cursiva al frente y un Papá Noel bordado en la parte de atrás.'],
  ['B3', 'Lima de vidrio', 'lima', 'Lima de vidrio con mango negro, firma LOCAL y un detalle amarillo y rojo.'],
  ['C1', 'Camiseta Jo Jo Jo', 'camiseta', 'Camiseta negra navideña con el «jo jo jo» al frente y una ilustración de Papá Noel en la espalda.'],
  ['C2', 'Sorpresa 01', 'sorpresa-01', 'Pista 01. Un recuerdo para llevar contigo. Descubre qué hay dentro cuando se anuncie el lanzamiento.'],
  ['C3', 'Sorpresa 02', 'sorpresa-02', 'Pista 02. Un detalle pensado para regalar. Descubre qué hay dentro cuando se anuncie el lanzamiento.'],
];

const places = [
  ['El Dorado', 14, 42, 'Una opción para viajeros que quieren llevar un último regalo antes de salir de Bogotá.', 'Aeropuerto Internacional El Dorado', 'dorado', 'Dispensadora LOCAL en un pasillo de salidas del aeropuerto El Dorado'],
  ['Corferias', 43, 55, 'Un punto para visitantes de ferias y eventos que buscan un recuerdo fácil de llevar.', 'Corferias Bogotá', 'corferias', 'Dispensadora LOCAL en el vestíbulo de Corferias'],
  ['Zona hotelera', 58, 26, 'Los lobbies cerca del Parque de la 93 permitirían mostrar el catálogo a turistas y viajeros de negocios.', 'Parque de la 93 Bogotá', 'hotel', 'Dispensadora LOCAL en el vestíbulo de un hotel cerca del Parque de la 93'],
  ['Monserrate', 82, 63, 'Una máquina cerca del acceso al cerro podría ofrecer recuerdos de Bogotá al terminar la visita.', 'Estación teleférico Monserrate Bogotá', 'monserrate', 'Dispensadora LOCAL en un mirador cubierto de Monserrate, con Bogotá al fondo'],
  ['Chorro de Quevedo', 70, 79, 'Una parada en La Candelaria para quienes recorren el centro histórico y quieren llevarse un recuerdo.', 'Chorro de Quevedo Bogotá', 'chorro', 'Dispensadora LOCAL junto a un local en la plaza del Chorro de Quevedo'],
];

const byId = (id) => document.getElementById(id);
const isSurprise = (file) => file.startsWith('sorpresa-');
const mysteryBox = (file) => `<span class="mystery-box ${file}" aria-hidden="true">
  <span>LOCAL</span><strong>?</strong><span>${file.slice(-2)}</span>
</span>`;
const photo = (file) => `assets/${file}.jpg`;
const shelves = byId('shelves');
const keys = byId('keys');
const vend = byId('vend');
const collect = byId('collect');
const dialog = byId('product');
const productButtons = [];
let selected = 0;
let delivered = null;
let dispensing = false;

products.forEach(([code, name, file], index) => {
  const slot = document.createElement('button');
  slot.className = 'slot';
  const packaging = ['book', 'book passport', 'cap', 'cap', 'cap festive', 'sleeve', 'shirt'][index];
  slot.innerHTML = `<span class="bay" aria-hidden="true">
    <span class="package ${packaging ?? 'mystery'}">
      <span class="package-face">${isSurprise(file) ? mysteryBox(file) : `<img src="${photo(file)}" alt="">`}</span>
    </span>
    <span class="coil"></span>
  </span><span class="slot-label"><b>${code}</b> ${name}</span>`;
  slot.addEventListener('click', () => selectProduct(index));
  shelves.append(slot);

  const key = document.createElement('button');
  key.textContent = code;
  key.setAttribute('aria-label', `${code}, ${name}`);
  key.addEventListener('click', () => selectProduct(index));
  keys.append(key);
  productButtons.push([slot, key]);
});

function selectProduct(index) {
  if (dispensing) return;
  selected = index;
  const [code, name] = products[index];
  productButtons.forEach((buttons, i) => {
    buttons.forEach((button) => button.setAttribute('aria-pressed', i === index));
  });
  byId('status').textContent = '● SELECCIONADO';
  byId('selection').textContent = code;
  byId('selection-name').textContent = name;
}

vend.addEventListener('click', async () => {
  if (dispensing || delivered !== null) return;
  dispensing = true;
  vend.disabled = true;
  productButtons.flat().forEach((button) => { button.disabled = true; });
  const [code, name, file] = products[selected];
  byId('status').textContent = '● DISPENSANDO…';
  const item = productButtons[selected][0].querySelector('.package');
  const moving = item.cloneNode(true);
  moving.classList.add('dropping');
  moving.setAttribute('aria-hidden', 'true');
  const origin = item.getBoundingClientRect();
  moving.style.width = `${item.offsetWidth}px`;
  moving.style.height = `${item.offsetHeight}px`;
  const target = byId('tray').getBoundingClientRect();
  const machine = byId('maquina');
  const cabinet = machine.getBoundingClientRect();
  moving.style.left = `${origin.left - cabinet.left}px`;
  moving.style.top = `${origin.top - cabinet.top + 4}px`;
  machine.append(moving);
  item.classList.add('releasing');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    const dx = target.left + target.width / 2 - origin.left - origin.width / 2;
    const dy = target.top - origin.top;
    await moving.animate([
      { transform: 'translate(0,0) rotate(0deg)', offset: 0 },
      { transform: 'translate(0,12px) rotate(-8deg)', offset: 0.23 },
      { transform: `translate(${dx}px,${dy}px) rotate(16deg)`, offset: 0.86 },
      { transform: `translate(${dx}px,${dy + 14}px) rotate(0deg)`, opacity: 0, offset: 1 },
    ], { duration: 760, easing: 'cubic-bezier(.53,.02,.85,.62)' }).finished;
  }
  moving.remove();
  item.classList.remove('releasing');
  delivered = selected;
  dispensing = false;
  byId('status').textContent = '● LISTO PARA RECOGER';
  byId('selection').textContent = code;
  byId('selection-name').textContent = name;
  const preview = byId('tray-preview');
  preview.innerHTML = isSurprise(file) ? mysteryBox(file) : `<img src="${photo(file)}" alt="">`;
  collect.hidden = false;
  byId('tray').classList.add('ready');
  collect.focus({ preventScroll: true });
});

collect.addEventListener('click', () => {
  if (delivered === null) return;
  const [code, name, file, desc] = products[delivered];
  dialog.dataset.visual = file;
  const visual = byId('product-visual');
  visual.innerHTML = isSurprise(file) ? mysteryBox(file) : `<img src="${photo(file)}" alt="${name}">`;
  byId('product-title').textContent = name;
  byId('product-code').textContent = `LOCAL · ${code}${isSurprise(file) ? ' · PRÓXIMAMENTE' : ''}`;
  byId('product-desc').textContent = desc;
  collect.hidden = true;
  byId('tray').classList.remove('ready');
  delivered = null;
  vend.disabled = false;
  productButtons.flat().forEach((button) => { button.disabled = false; });
  selectProduct(selected);
  dialog.showModal();
});
dialog.addEventListener('close', () => vend.focus({ preventScroll: true }));
selectProduct(0);

const placeButtons = places.map(([name, x, y], index) => {
  const pin = document.createElement('button');
  pin.className = 'pin';
  pin.style.left = `${x}%`;
  pin.style.top = `${y}%`;
  pin.textContent = index + 1;
  pin.setAttribute('aria-label', name);
  pin.addEventListener('click', () => selectPlace(index));
  byId('pins').append(pin);

  const tab = document.createElement('button');
  tab.textContent = name;
  tab.addEventListener('click', () => selectPlace(index));
  byId('place-tabs').append(tab);
  return [pin, tab];
});

function selectPlace(index) {
  const [name, , , desc, search, scene, alt] = places[index];
  placeButtons.forEach((buttons, i) => {
    buttons.forEach((button) => button.setAttribute('aria-pressed', i === index));
  });
  const image = byId('place-image');
  image.src = `assets/ubicacion-${scene}.jpg`;
  image.alt = alt;
  byId('place-title').textContent = name;
  byId('place-desc').textContent = desc;
  byId('place-link').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(search)}`;
}
selectPlace(0);
