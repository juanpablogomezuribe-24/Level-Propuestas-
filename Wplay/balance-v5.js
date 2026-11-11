/* Balance y renovación only. Loaded before app.js; applied after verified source data.
   Shared styles and /plan2027 are intentionally not changed. */
function configureBalanceV5() {
  const old = slides.slice();
  pautaTalentSelected = "Todos";
  const wrap = (key, html) => `<div class="v5-section ${key}">${html}</div>`;
  const heading = (title, intro = '') => `<h2 class="section-title">${title}</h2>${intro ? `<p class="section-intro">${intro}</p>` : ''}`;
  const stat = (value, label, note = '') => `<article class="v5-stat"><strong>${value}</strong><span>${label}</span>${note ? `<small>${note}</small>` : ''}</article>`;
  const jump = (target, label, copy, kind = '') => `<button type="button" class="v5-jump ${kind}" data-jump="${target}"><strong>${label}</strong><span class="v5-jump-copy">${copy}</span><b aria-hidden="true">→</b></button>`;
  const cutoff = '1 de marzo al 22 de octubre de 2026';
  const derivedCutoff = '1 de septiembre al 22 de octubre de 2026';

  // Keep the source-backed records, metrics and terms. Simplify repeated headings.
  const originalOperation = old[1].render;
  old[1].title = 'Operación 2026';
  old[1].render = () => wrap('v5-readable', originalOperation()
    .replace(/<div class="eyebrow">[\s\S]*?<\/div>/, '')
    .replace('Level Colombia y Docuverso se presentan como una operación coordinada. La separación contractual organiza la facturación; la historia comercial es una sola.', 'Level Colombia y Docuverso trabajaron juntos en la operación de Wplay durante 2026. Cada empresa factura los servicios de su contrato.')
  );
  const originalOverview = old[2].render;
  old[2].title = 'Resumen enero–octubre 2026';
  old[2].render = () => wrap('v5-readable v5-overview', originalOverview()
    .replace('<div class="eyebrow">SIETE ACTIVOS · ENERO–OCTUBRE 2026</div>', '')
    .replace('Resultados que podemos<br><em>recorrer y comprobar.</em>', 'Resumen <em>enero–octubre 2026</em>')
  );
  for (let i = 3; i <= 8; i++) {
    const renderAsset = old[i].render;
    old[i].render = () => wrap('v5-readable v5-asset', renderAsset()
      .replace(/<div class="eyebrow">[\s\S]*?<\/div>/, '')
    );
  }
  old[7].title = 'Laura continúa; Pinilla reemplaza a Felipe';

  // Main view: large six-person grid. Individual publications and all criteria remain available.
  old[9].render = () => wrap('v5-pauta', `
    ${heading('Contenidos de <em>pauta</em>', 'Tres publicaciones destacadas por talento. Selecciona un nombre para ver sus contenidos y enlaces.')}
    <div class="v5-inline-stats"><span><b>6</b> talentos</span><span><b>18</b> publicaciones seleccionadas</span><span><b>2 M</b> máximo registrado</span></div>
    <div class="pauta-selector" role="group" aria-label="Filtrar contenidos por talento">${pautaTalents.map(talent => `<button type="button" data-pauta-talent="${escapeHtml(talent)}" aria-pressed="${talent === pautaTalentSelected}">${escapeHtml(talent)}</button>`).join('')}</div>
    <section class="pauta-browser" aria-live="polite"><header><div><small id="pautaViewLabel">RESULTADOS POR TALENTO</small><h3 id="pautaViewTitle">${escapeHtml(pautaTalentSelected)}</h3></div><span id="pautaViewCount">18 contenidos</span></header><div class="pauta-posts" id="pautaPosts"></div></section>
    <div class="v5-pauta-footer"><p>Selección de publicaciones, no el inventario completo. Las vistas no equivalen a alcance único ni demuestran eficiencia publicitaria.</p><button type="button" class="detail-button" data-detail="pauta">Recomendaciones, paquetes y medición →</button></div>
  `);
  // Retain every recommendation and historical package condition in a legible detail panel.
  const originalPautaDetail = details.pauta.body;
  details.pauta.title = 'Pauta: recomendaciones y condiciones';
  details.pauta.body = `<div class="v5-detail"><div class="grid-3"><article class="card"><h3>Diversidad de talentos</h3><p>Conservar personalidades, audiencias y estilos distintos, sin depender de un único creador.</p></article><article class="card"><h3>Pruebas por objetivo</h3><p>Probar aperturas, mensajes, versiones y formatos. Amplificar los que respondan mejor al objetivo.</p></article><article class="card"><h3>Medición de campaña</h3><p>Solicitar a Wplay inversión, alcance, retención, costos, interacciones, clics y conversiones.</p></article></div>${originalPautaDetail}</div>`;

  const originalSports = old[10].render;
  old[10].title = 'Wplay Sports';
  old[10].render = () => wrap('v5-readable', originalSports()
    .replace(/<div class="eyebrow">[\s\S]*?<\/div>/, '')
    .replace('La operación también construye <em>activos de la marca</em>', 'Wplay Sports: <em>producción editorial</em>')
    .replace('Los 405 contenidos son una estimación de 45 noticias por nueve meses. No se suman al consolidado de 2.540 porque podrían estar incluidos.', 'Los 405 contenidos son una estimación de 45 noticias por nueve meses. Este frente conserva el corte enero–septiembre y no se suma al balance de los siete activos.')
  );

  old[11].title = 'YouTube Wplay';
  old[11].render = () => wrap('v5-youtube', `
    ${heading('YouTube <em>Wplay</em>', 'Level Colombia gestiona el canal desde marzo de 2026. Estas son las métricas disponibles del periodo.')}
    <p class="v5-period">${cutoff}</p>
    <div class="v5-stats four">${stat('32,86 M','visualizaciones')}${stat('131.301','horas vistas')}${stat('+1.745','suscriptores netos')}${stat('7,2 %','CTR de miniaturas')}</div>
    <div class="v5-traffic"><article class="card purple"><small>TRÁFICO PAGADO</small><h3>32,15 M <span>vistas</span></h3><p><b>97,8 %</b> de las vistas · <b>77,3 %</b> de las horas<br>Duración media: <b>0:21</b></p></article><article class="card green"><small>TRÁFICO ORGÁNICO</small><h3>729.685 <span>vistas</span></h3><p><b>2,2 %</b> de las vistas · <b>22,7 %</b> de las horas<br>Duración media: <b>3:28</b></p></article></div>
    <div class="v5-section-label">DOS LÍNEAS DE CONTENIDO</div><div class="v5-jump-grid">${jump(12,'Emisiones en directo','Resultados de los directos y de Encartados.','live')}${jump(13,'Shorts y clips','Resultados orgánicos de los contenidos derivados.','clips')}</div>
    <details class="v5-disclosure"><summary>Cómo leer estas cifras</summary><p>El volumen total del canal incluye pauta. El trabajo editorial debe medirse por consumo orgánico, horas vistas, retención y suscriptores.</p><p>Datos consultados en YouTube Studio el 23 de octubre. La fuente disponible llega al 22 de octubre, no al 30. El periodo puede incluir vistas recibidas por publicaciones anteriores. YouTube modificó el conteo de visualizaciones desde el 27 de agosto de 2026.</p></details>
  `);
  old[12].title = 'Emisiones en directo';
  old[12].render = () => wrap('v5-youtube', `
    <div class="v5-backline"><button type="button" data-jump="11">← YouTube Wplay</button><span>${cutoff}</span></div>
    ${heading('Emisiones <em>en directo</em>', 'Los directos aportan tiempo de consumo y suscriptores. Encartados es el programa principal de esta línea.')}
    <div class="v5-stats four">${stat('264.196','vistas')}${stat('26.743 h','horas vistas')}${stat('+818','suscriptores')}${stat('7:52','duración media')}</div>
    <div class="v5-contribution"><div><b>0,8 %</b><span>de las vistas del canal</span></div><div><b>20,4 %</b><span>de las horas del canal</span></div><div><b>46,9 %</b><span>de los suscriptores netos</span></div></div>
    <article class="card v5-since"><small>DEL 1 DE SEPTIEMBRE AL 22 DE OCTUBRE</small><div class="v5-since-grid"><span><b>105.800</b> vistas</span><span><b>7.028 h</b> horas vistas</span><span><b>+170</b> suscriptores</span><span><b>8:49</b> duración media</span><span><b>8,1 %</b> CTR</span></div></article>
    <details class="v5-disclosure"><summary>Emisiones destacadas desde septiembre</summary><div class="v5-program-list"><article><h3>¿Nacional ganó con autoridad o sufrió?</h3><p>9.645 vistas · 1.063,7 h · +33 suscriptores</p></article><article><h3>¿James mandará a Rengifo y Cardona al banco?</h3><p>5.567 vistas · 414 h · +10 suscriptores</p></article><article><h3>¿Junior ya quedó eliminado o sigue con vida?</h3><p>4.966 vistas · 422,2 h · +14 suscriptores</p></article></div></details>
    <div class="v5-takeaway"><strong>Para 2027</strong><p>Mantener los directos y distribuir sus mejores momentos en Shorts, clips y otras redes.</p><button type="button" class="detail-button" data-jump="13">Ver Shorts y clips →</button></div>
  `);
  old[13].title = 'Shorts y clips';
  old[13].render = () => wrap('v5-youtube', `
    <div class="v5-backline"><button type="button" data-jump="11">← YouTube Wplay</button><span>${derivedCutoff}</span></div>
    ${heading('Shorts <em>y clips</em>', 'Resultados orgánicos de la línea de contenidos derivados, separados del tráfico pagado.')}
    <div class="v5-format-grid"><article class="card purple v5-format"><small>SHORTS ORGÁNICOS · 58 PUBLICADOS</small><strong>68.138</strong><span>vistas orgánicas</span><div class="v5-format-facts"><p><b>225,7 h</b> vistas</p><p><b>0:25</b> duración media</p></div><div class="v5-best"><small>DESTACADO</small><h3>Desahogo DIM</h3><p><b>5.886</b> vistas · <b>90,9 %</b> visto en promedio</p></div><p class="v5-note">Total de Shorts: <b>4,93 M</b> de vistas. El <b>98,6 %</b> provino de pauta.</p></article><article class="card blue v5-format"><small>CLIPS ORGÁNICOS · 37 VIDEOS PUBLICADOS</small><strong>47.324</strong><span>vistas orgánicas</span><div class="v5-format-facts"><p><b>395,1 h</b> vistas</p><p><b>0:47</b> duración media</p></div><div class="v5-best"><small>CLIP DESTACADO DE ENCARTADOS</small><h3>Nacional y James</h3><p><b>780</b> vistas · <b>1:39</b> de consumo medio</p></div><p class="v5-note">Los mejores clips editoriales retienen aproximadamente entre <b>29 % y 36 %</b>.</p></article></div>
    <div class="v5-growth"><div><strong>+54 %</strong><span>vistas orgánicas por día</span></div><div><strong>+22 %</strong><span>horas orgánicas por día</span></div><p>Cambio aproximado frente al promedio diario de marzo–agosto.</p></div>
    <details class="v5-disclosure"><summary>Acciones para 2027 y criterio de comparación</summary><ol><li>Definir antes de cada directo tres momentos para Shorts y dos para clips.</li><li>Abrir con emoción, equipo y conflicto. Evitar introducciones largas.</li><li>Medir cada grupo de contenidos: directo, derivados y suscriptores generados.</li></ol><p>La aceleración coincide con el inicio de Shorts y clips, pero no demuestra causalidad por sí sola. También influyen actualidad, frecuencia, temas y distribución.</p></details>
  `);

  // Close the balance before showing the catalogue. The 2027 roster appears only after it.
  old[14].title = 'Resumen del balance 2026';
  old[14].kicker = 'Cierre del balance';
  old[14].chapter = 'MOMENTO 01 · BALANCE';
  old[14].render = () => wrap('v5-balance-close', `
    ${heading('Balance <em>2026</em>', 'Cuatro frentes de trabajo. Cada uno conserva su periodo y su criterio de medición.')}
    <div class="v5-balance-grid"><article class="card highlight"><small>SIETE ACTIVOS · ENERO–OCTUBRE</small><h3>59,62 M <span>de reproducciones</span></h3><p><b>965</b> registros por publicación y plataforma.</p><button type="button" class="detail-button" data-jump="2">Revisar resumen →</button></article><article class="card purple"><small>CONTENIDOS DE PAUTA · 2026</small><h3>6 <span>talentos</span></h3><p><b>18</b> publicaciones destacadas para consultar.</p><button type="button" class="detail-button" data-jump="9">Ver contenidos →</button></article><article class="card green"><small>YOUTUBE · MARZO–22 DE OCTUBRE</small><h3>131.301 <span>horas vistas</span></h3><p><b>+1.745</b> suscriptores netos. Incluye tráfico pagado y orgánico.</p><button type="button" class="detail-button" data-jump="11">Ver canal →</button></article><article class="card blue"><small>WPLAY SPORTS · ENERO–SEPTIEMBRE</small><h3>405 <span>noticias estimadas</span></h3><p>Aproximadamente <b>45</b> noticias por mes.</p><button type="button" class="detail-button" data-jump="10">Ver producción editorial →</button></article></div>
    <div class="v5-takeaway"><strong>Criterio de lectura</strong><p>Estos resultados no se suman entre sí. Las reproducciones no equivalen a personas únicas y algunos contenidos pueden estar presentes en más de un activo o canal.</p></div>
    <div class="v5-next"><p>El catálogo cierra esta primera parte. Después comienza la selección para 2027.</p><button class="detail-button" type="button" data-jump="15">Abrir catálogo →</button></div>
  `);
  old[15].chapter = 'MOMENTO 01 · CATÁLOGO';

  const planIntro = old[16];
  planIntro.title = 'Plan de trabajo 2027';
  planIntro.kicker = 'Equipo y formatos seleccionados';
  planIntro.chapter = 'MOMENTO 02 · PLAN 2027';
  planIntro.render = () => wrap('v5-plan', `
    ${heading('Plan de trabajo <em>2027</em>', 'Continúan siete talentos y activos, se suman cinco perfiles y se incorporan dos formatos.')}
    <div class="v5-rosters"><article class="card"><div class="v5-roster-head"><b>7</b><div><small>CONTINÚAN</small><h3>Equipo actual</h3></div></div><ul class="v5-roster-list">${selected2027.map(name=>`<li><span>${escapeHtml(name)}</span></li>`).join('')}</ul></article><article class="card purple"><div class="v5-roster-head"><b>5</b><div><small>SE SUMAN</small><h3>Nuevos perfiles</h3></div></div><ul class="v5-roster-list new">${new2027.map(name=>`<li><span>${escapeHtml(name)}${name==='Juan Pablo Pinilla'?'<small>Reemplaza a Felipe Cerón</small>':''}</span><a href="${newProfileLinks[name].url}" target="_blank" rel="noopener noreferrer" aria-label="Ver perfil de ${escapeHtml(name)}">Ver perfil ↗</a></li>`).join('')}</ul></article></div>
    <div class="v5-section-label">DOS FORMATOS SELECCIONADOS</div><div class="v5-jump-grid">${jump(17,'Clásico Paisa','Patrocinio del canal de YouTube. $6.000.000 mensuales libres aceptados.','live')}${jump(18,'El micrófono de los hinchas','Producción interna Level: cuatro videos al mes en estadios de Colombia.','clips')}</div>
    <p class="v5-condition">Selección definida, no contratos firmados ni presupuesto final. Tarifas, frecuencia, canales, entregables, derechos de imagen y pauta, exclusividad, territorio y vigencia de los nuevos perfiles deben formalizarse. Clásico Paisa requiere confirmar alcance e impuestos.</p>
  `);

  // Two format details, with the same commercial conditions and larger copy.
  old[18].title = 'Clásico Paisa';
  old[18].render = () => wrap('v5-opportunity', `
    ${heading('Clásico <em>Paisa</em>', 'Patrocinio e integración de Wplay en el canal de YouTube.')}
    <div class="v5-opportunity-grid"><figure class="v5-visual"><img src="assets/opportunities/clasico-paisa.png" alt="Referencia visual de Clásico Paisa con Wplay"></figure><div class="v5-opportunity-facts"><article class="card purple"><small>VALOR ACEPTADO</small><h3>$6.000.000</h3><p>Mensuales libres · COP</p></article><article class="card"><h3>Integración en el programa</h3><p>Menciones, presencia gráfica y secciones de marca por acordar con el programa de conversación y análisis de fútbol.</p></article><article class="card green"><h3>Por formalizar</h3><p>Entregables, frecuencia, derechos, vigencia, impuestos y retenciones.</p></article></div></div>
    <p class="v5-condition">Valor mensual libre aceptado por Clásico Paisa. No equivale a una tarifa final facturada sin confirmar el tratamiento tributario.</p>
  `);
  old[19].title = 'El micrófono de los hinchas';
  old[19].render = () => wrap('v5-opportunity', `
    ${heading('El micrófono <em>de los hinchas</em>', 'Cuatro videos verticales al mes, producidos por Level con su red de corresponsales en estadios de Colombia.')}
    <div class="v5-opportunity-grid"><figure class="v5-visual"><img src="assets/opportunities/la-previa.png" alt="Referencia de La Previa con Joga Melito: micrófono Wplay y conversaciones con hinchas en un estadio"><figcaption>Referencia visual: La Previa con Joga Melito. El nuevo formato será producido internamente por Level; no supone contratar a Joga Melito.</figcaption></figure><div class="v5-opportunity-facts"><article class="card purple"><small>PRODUCCIÓN INTERNA LEVEL</small><h3>4 videos <span>al mes</span></h3><p>Actualidad y opinión de aficionados adultos en distintos estadios.</p></article><article class="card"><h3>Presencia de Wplay</h3><p>Micrófono y gráficas de marca, edición y publicación en los canales acordados.</p></article><article class="card green"><h3>Costo interno por definir</h3><p>Calendario, ciudades, distribución y permisos de imagen y locación por cerrar.</p></article></div></div>
    <p class="v5-condition">Reemplaza la propuesta de contratación externa de La Previa. No depende de contratar un formato externo ni conserva la tarifa anterior por video.</p>
  `);

  // Preserve the existing calculator and its caveats, without repeating the roster before Plan 2027.
  const calculatorMarkup = () => simulator().replace('Evaluemos los activos actuales y construyamos el escenario de renovación de Wplay para el próximo año.', 'Referencias contractuales existentes, sin Felipe Cerón. Los cinco nuevos perfiles y Clásico Paisa no están incluidos en este subtotal. Juan Pablo Gómez no tiene tarifa registrada; cero es un dato pendiente, no una contratación gratuita.').replace('TOTAL RENOVACIÓN 2027','SUBTOTAL DE REFERENCIAS').replace('CALCULADORA COMERCIAL · VALORES MENSUALES EN COP','SIMULACIÓN · NO ES COTIZACIÓN FINAL');
  old[20].title = 'Condiciones comerciales';
  old[20].render = () => wrap('v5-commercial', `
    ${heading('Condiciones <em>comerciales</em>', 'Las dos líneas tienen condiciones distintas. La producción interna aún no tiene un costo cerrado.')}
    <div class="v5-commercial-grid"><article class="card purple"><small>CLÁSICO PAISA · INTEGRACIÓN</small><h3>$6.000.000</h3><p>Mensuales libres · COP</p><ul><li>Valor aceptado.</li><li>Entregables y frecuencia por formalizar.</li><li>Derechos, vigencia e impuestos por confirmar.</li></ul></article><article class="card green"><small>MICRÓFONO DE LOS HINCHAS · LEVEL</small><h3>4 videos al mes</h3><p>Producción interna · estadios de Colombia</p><ul><li>Formato seleccionado.</li><li>Costo interno y calendario por definir.</li><li>No conserva la tarifa externa por video.</li></ul></article></div>
    <p class="v5-condition">Los demás formatos explorados quedan fuera del plan. No se suman referencias con unidades distintas ni costos pendientes.</p>
    <details class="v5-disclosure v5-simulator"><summary>Simular las referencias contractuales actuales</summary>${calculatorMarkup()}</details>
  `);

  // Merge previous 17 + 18; keep the final table's render function byte-for-byte untouched.
  slides.splice(0, slides.length, ...old.slice(0, 17), ...old.slice(18));
  slides.forEach((slide, index) => {
    slide.balanceKey = index === 0 ? 'cover' : index === 15 ? 'catalog' : index === 20 ? 'roster-final' : 'readable';
  });
}
