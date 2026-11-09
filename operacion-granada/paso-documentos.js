(()=>{
const flows={
venta:[
['Cliente y mostrador',[],'Escuchar qué necesita. Todavía no hay un pedido que llenar.','El vendedor entiende producto y cantidad.'],
['Vendedor de mostrador',[0,1],'Registrar el pedido una sola vez y completar su detalle: cliente, referencia, cantidad y empaque.','Pedido identificado y datos revisados antes de enviarlo.'],
['Steven y Nelson · en paralelo',[0,1,4],'Steven consulta el pedido para cobrar. Nelson abre su orden y empieza a preparar sin esperar a que caja termine.','Ambos trabajan sobre el mismo número. No se entrega todavía.'],
['Steven',[4],'Verificar el ingreso en la fuente autorizada y anotarlo en su Excel actual. La hoja enlazada es una guía de revisión, no otra caja.','Pago realmente verificado; una captura por sí sola no basta.'],
['Steven',[4],'Convertir el pedido en factura en el sistema y generar ticket para cliente y copia para Lucho. Conservar la referencia en el control actual.','Factura y dos tickets. La demo no factura ni imprime tickets reales.'],
['Nelson y equipo',[1,0],'Consultar la orden, asignar el trabajo y reflejar «Alistando» en el seguimiento propuesto. Este trabajo comenzó en paralelo con caja.','Se prepara la referencia y cantidad correctas.'],
['Nelson y equipo',[1,0],'Contar y revisar lo preparado. Informar faltantes antes de marcar «Alistado» y pasarlo a Lucho.','Alistado no significa pagado, facturado ni entregado.'],
['Lucho',[1,0,4],'Contrastar mercancía y tickets; comprobar autorización de salida, recibir ticket del cliente, sellar y entregar. Registrar evidencia según el control acordado.','Entrega comprobada. Quién registra el cierre digital debe quedar acordado.']
],
compra:[
['Juan Carlos',[2],'Solicitar cotización y conservarla junto al número de compra. Registrar proveedor, producto y cantidad cotizada.','Cotización disponible para revisar; aún no es mercancía recibida.'],
['Juan Carlos',[2],'Confirmar compra, condiciones y fecha con proveedor. Guardar soporte del acuerdo; registrar la próxima acción.','Pedido de compra acordado y respaldado.'],
['Lucho',[2],'Contar lo que llegó y dejar cantidad recibida y soporte. No copiar la cantidad de factura como si fuera recepción real.','Recepción física revisada y diferencias comunicadas a Juan Carlos.'],
['Juan Carlos',[2],'Comparar cotización, factura y conteo de Lucho. Revisar cantidades, referencia, precio y fechas.','Coincidencias o diferencias identificadas; vacíos siguen pendientes.'],
['Juan Carlos',[2,5],'Dar seguimiento a faltantes o diferencias y guardar la solución. El indicador del proveedor solo considera líneas revisadas.','Cerrar únicamente con solución documentada. Si no, mantener pendiente.'],
['Nelson y equipo · registro de inventario por asignar',[2],'Ubicar solo lo verificado e informar dónde quedó. La entrada al inventario requiere responsable y procedimiento aprobados.','Ubicación comunicada; no afirmar inventario actualizado sin comprobarlo.']
],
mayorista:[
['Eduardo',[0,1],'Tomar el pedido en cuaderno y enviar foto legible a Farfán: productos, unidades, cliente, fecha y observaciones.','Foto completa para registrar; no crear otra venta por enviar la foto.'],
['Sebastián Farfán',[0,1],'Revisar la transcripción apoyada por Claude y registrar en Sisplus. Conservar un mismo número para seguimiento y detalle.','Pedido revisado. Esta web no registra nada en Sisplus.'],
['Farfán; Nelson valida capacidad',[0,3],'Confirmar entrega, urgencia y transporte. Dejar pendiente cualquier dato que falte y acordar carga.','Prioridad viable; el pedido en curso no se interrumpe.'],
['Nelson',[1,0],'Abrir la orden que sigue, repartir preparación y reflejar «Alistando». Consultar fecha y prioridad acordadas.','Equipo trabajando con referencias y cantidades correctas.'],
['Nelson y Lucho',[1,0,4],'Nelson confirma alistamiento; Lucho verifica mercancía y autorización de salida. Avisar faltantes, no ocultarlos.','Listo para control de despacho, no entrega automática.'],
['Coordinación propuesta; Nelson y Lucho',[3,0,4],'Revisar pedidos alistados y autorizados. Organizar carga y paradas, confirmar vehículo y hora; registrar salida cuando ocurra.','Salida comprobada. Responsable de coordinación aún por asignar.'],
['Responsable de entrega por acordar',[3,0],'Registrar recepción del cliente o novedad con soporte. Si solo salió el vehículo, mantener entrega pendiente.','Pedido recibido con evidencia y novedades resueltas.']
],
triangulacion:[
['Vendedor',[],'Identificar necesidad y condiciones. Es una oportunidad, no un pedido confirmado ni entrada a bodega.','Datos suficientes para consultar disponibilidad.'],
['Responsable comercial/compras por acordar',[2],'Confirmar disponibilidad y condiciones del proveedor. Este formato puede apoyar el acuerdo solo si el equipo valida su adaptación a entrega directa.','Condiciones comprobadas; no registrar recepción en Granada.'],
['Farfán y responsables por acordar',[0,4],'Acordar quién cobra, factura y confirma entrega. Solo después registrar la venta confirmada y su seguimiento.','Circuito aprobado antes de ejecutar. No hay roles nuevos confirmados.'],
['Proveedor; seguimiento por acordar',[0,3],'Pedir evidencia de entrega directa al cliente. Ruta y carga solo aplica si Granada coordina transporte; de otro modo no se llena una carga ficticia.','Entrega externa comprobada, sin entrada o salida ficticia de bodega.']
],
whatsapp:[
['Atención WhatsApp',[],'Responder la consulta. No llenar pedido hasta que el cliente defina qué quiere comprar.','Intención y necesidad aclaradas.'],
['Atención WhatsApp',[0,1],'Recoger referencia, cantidad, nombre, teléfono, fecha y entrega. Verificar con el cliente lo solicitado.','Datos completos; lo que falte queda por preguntar, no inventado.'],
['Atención WhatsApp',[0,1],'Registrar una sola orden con origen WhatsApp y su detalle. La conexión con Sisplus aún debe acordarse y probarse.','Pedido disponible para Nelson sin volver a copiarlo por Farfán.'],
['Nelson',[1,0],'Abrir detalle, revisar prioridad validada y asignar alistamiento después del pedido en curso.','Orden correcta en preparación. La cola automática no está implementada.'],
['Lucho; caja y entrega según modalidad',[0,1,4,3],'Revisar mercancía y pago o crédito autorizado. Para domicilio, usar ruta; para recogida, conservar controles del local. Registrar evidencia de entrega.','No liberar sin autorización ni confundir despacho con recepción.']
]};
const future={venta:'Propuesta: pasar el pedido una sola vez a caja y bodega, y compartir su estado. Pago y entrega siempre requieren verificación.',compra:'Propuesta: leer cotización, factura y recepción para sugerir diferencias. Juan Carlos revisa antes de cualquier ajuste.',mayorista:'Propuesta: convertir la foto revisada en un único pedido y ordenar la cola por entrega, sin interrumpir el alistamiento en curso.',triangulacion:'Primero acordar cobro, factura y entrega directa. Después definir qué seguimiento se conecta, sin inventar movimientos de bodega.',whatsapp:'Propuesta: registrar el pedido confirmado en la misma fuente y avisar a Nelson, sin copiarlo otra vez por Farfán.'};
window.granadaStepGuide=(scene,step)=>{const [who,ids,action,done]=flows[scene][step];return `<section class="step-document"><span class="eyebrow">En este paso · tú puedes explorar</span><h3>1. Así lo ejecutamos</h3><strong>${who}</strong><p>${action}</p><h3>2. Así le hacemos seguimiento</h3><div class="step-document-links">${ids.length?ids.map(i=>`<button class="scenario" data-sim-doc="${i}">Abrir ${window.granadaFormats[i].title} ↗</button>`).join(''):'<span class="tag">Todavía no se llena un documento</span>'}</div>${ids.includes(1)?'<button class="scenario" data-tab="tablero">Ver el ejemplo de la cola de bodega ↗</button>':''}<div class="step-check"><b>Para pasar al siguiente:</b> ${done}</div><h3>3. Así lo automatizaríamos</h3><p>${future[scene]}</p><p class="board-note">Plan por implementar. Puedes abrir y volver al mismo paso; ningún clic guarda datos reales ni activa conexiones.</p></section>`;};
document.addEventListener('click',e=>{const b=e.target.closest('[data-sim-doc]');if(!b)return;window.openDoc(Number(b.dataset.simDoc));const close=document.querySelector('.close-dialog');close.textContent='← Volver a la simulación';close.setAttribute('aria-label','Volver a la simulación');});
document.getElementById('docDialog').addEventListener('close',()=>{const b=document.querySelector('.close-dialog');b.textContent='✕ Cerrar';b.setAttribute('aria-label','Cerrar ejemplo');});
const sim=document.getElementById('simular');
const quick=document.createElement('div');quick.className='sim-library-links';quick.innerHTML='<p>Elige una situación y avanza. En cada paso puedes abrir el documento que necesitas y volver aquí.</p><button class="scenario" data-tab="documentos" data-open-library>Consultar todos los formatos ↗</button>';
sim.prepend(quick);
for(const id of ['documentos','tablero']){const back=document.createElement('button');back.className='scenario back-to-operation';back.dataset.tab='simular';back.textContent='← Volver a Así trabajamos';document.getElementById(id).prepend(back);}
const pending=document.getElementById('pendientes');const destination=document.getElementById('plan');if(pending&&destination){const section=document.createElement('section');section.className='pending-combined';section.innerHTML=pending.innerHTML;destination.append(section);pending.hidden=true;}
renderScene();
})();
