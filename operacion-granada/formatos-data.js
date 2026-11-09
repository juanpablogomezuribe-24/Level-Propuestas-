window.granadaFormats=[
  {
    "title": "Seguimiento de pedidos",
    "gid": 900103,
    "headers": [
      "Pedido",
      "Cliente ficticio",
      "Origen",
      "Valor ejemplo COP",
      "Entrega",
      "Bodega",
      "Qué falta hacer",
      "Quién lo atiende"
    ],
    "rows": [
      [
        "EJ-101",
        "Juan Pablo Gómez (ejemplo)",
        "Mostrador 1",
        "$160.000",
        "Hoy 10:20",
        "Alistando",
        "Verificar pago y avisar entrega",
        "Mostrador / Steven"
      ],
      [
        "EJ-102",
        "Sebastián Torres (ejemplo)",
        "Eduardo/Farfán",
        "$840.000",
        "Hoy 10:45",
        "Recibido",
        "Confirmar salida con Lucho",
        "Farfán"
      ],
      [
        "EJ-103",
        "Sebastián Farfán (ejemplo)",
        "Mostrador 3",
        "$240.000",
        "Hoy 11:00",
        "Recibido",
        "Avisar cuando pueda retirar",
        "Mostrador 3"
      ],
      [
        "EJ-104",
        "Empresa D",
        "WhatsApp",
        "$300.000",
        "Mañana 08:00",
        "Recibido",
        "Confirmar dirección y pago",
        "Atención WhatsApp"
      ],
      [
        "EJ-105",
        "Tienda E",
        "Farfán",
        "$420.000",
        "Por confirmar",
        "Revisar datos",
        "Confirmar fecha y transporte",
        "Farfán"
      ]
    ],
    "purpose": "Saber qué se prometió a cada cliente, cómo va su pedido y qué falta hacer para cumplirle.",
    "process": "Cada pedido aparece una sola vez con su número. Se consulta su entrega acordada y el siguiente paso; no se confunden consultas con ventas.",
    "roles": "Mostrador registra su canal; atención registra WhatsApp; Farfán pasa los pedidos de Eduardo. Nelson confirma alistamiento y Lucho confirma salida.",
    "update": "Al tomar el pedido y cada vez que cambien fecha, cantidades, pago confirmado o avance físico. Pago y factura se controlan por separado.",
    "automation": "Conectar el mismo número de pedido entre Sisplus, el registro elegido y Trello. Primero acordar responsables, datos y probar; hoy no hay conexión.",
    "notes": [
      "Seguimiento de pedidos tomados, no prospectos. Los valores son ficticios, no dinero cobrado; los estados aquí son ejemplos, no sincronización.",
      "Fuente maestra, campos obligatorios, quién corrige cambios y cómo se avisa si no se cumple la hora."
    ],
    "closure": "Cuando la entrega al cliente está confirmada con evidencia y no quedan novedades pendientes. Falta acordar quién registra esa confirmación; facturar o despachar no cierra el pedido."
  },
  {
    "title": "Orden individual de bodega",
    "gid": 900105,
    "headers": [
      "Pedido",
      "Cliente",
      "Código producto",
      "Producto",
      "Cantidad",
      "Unidad / empaque",
      "Nota para bodega",
      "Verificado por"
    ],
    "rows": [
      [
        "EJ-101",
        "Juan Pablo Gómez (ejemplo)",
        "Por validar en Sisplus",
        "Cerveza ejemplo",
        "2",
        "Cajas · contenido por validar",
        "No inventar código ni contenido de caja",
        ""
      ]
    ],
    "purpose": "Que Nelson y su equipo sepan exactamente qué producto y cuántas unidades deben preparar.",
    "process": "Abrir o imprimir el detalle de un pedido, revisar producto, código, cantidad y empaque, y registrar cualquier faltante sin cambiar la venta.",
    "roles": "Quien toma el pedido deja las referencias; Nelson dirige el alistamiento; Lucho verifica lo que sale.",
    "update": "Cuando se registra o corrige el pedido y cuando bodega termina su revisión. El formato final se compara con la orden que usa hoy el equipo.",
    "automation": "Generar el detalle desde el pedido maestro para no volverlo a digitar. No se ha conectado ni configurado impresión automática.",
    "notes": [
      "Ejemplo ficticio para abrir en pantalla o imprimir. No autoriza entrega sin pago/crédito verificado y controles actuales.",
      "Datos de la orden, código real de Sisplus, empaque y si Nelson la verá en pantalla o también la imprimirá."
    ],
    "closure": "Cuando el equipo termina de alistar y verificar las referencias y cantidades, o registra el faltante para resolverlo. Marcar alistado no autoriza entregar ni confirma pago."
  },
  {
    "title": "Control de compras y recepción",
    "gid": 900104,
    "headers": [
      "Compra ficticia",
      "Proveedor ficticio",
      "Producto",
      "Cotizado cajas",
      "Facturado cajas",
      "Recibido cajas",
      "Estado",
      "Próximo paso",
      "Soporte a reunir"
    ],
    "rows": [
      [
        "COMP-EJ-01",
        "Proveedor A",
        "Producto A",
        "20",
        "",
        "",
        "Por llegar",
        "Juan Carlos confirma llegada",
        "Cotización y pedido acordado"
      ],
      [
        "COMP-EJ-02",
        "Proveedor B",
        "Producto B",
        "10",
        "10",
        "9",
        "Con diferencia",
        "Reclamar 1 caja con soporte Lucho",
        "Cotización, factura, recepción"
      ],
      [
        "COMP-EJ-03",
        "Proveedor C",
        "Producto C",
        "5",
        "5",
        "5",
        "Revisada y cerrada · ejemplo",
        "Conservar soportes; igualdad de cantidades no basta por sí sola",
        "Precio, referencia y fechas revisados · ejemplo"
      ]
    ],
    "purpose": "Saber qué se compró, qué falta llegar y qué diferencia hay que reclamar antes de cerrar la compra.",
    "process": "Comparar lo cotizado, lo facturado y lo recibido en la misma unidad. Revisar también referencia, precio y fechas; igual cantidad no basta.",
    "roles": "Juan Carlos registra la compra y revisa documentos. Lucho cuenta lo recibido y aporta soporte. Juan Carlos sigue la diferencia hasta resolverla.",
    "update": "Al acordar la compra, recibir mercancía y resolver una novedad. Una celda vacía no significa que llegaron cero unidades.",
    "automation": "Leer documentos y sugerir diferencias para revisión humana, sin crear notas ni movimientos de inventario automáticamente. Hoy no hay conexión.",
    "notes": [
      "Lucho verifica lo físico. Juan Carlos concilia. Una factura no prueba recepción; una compra con diferencia no se cierra sin solución documentada.",
      "Responsable de registro, datos obligatorios, soporte de recepción y evidencia necesaria para cerrar un reclamo."
    ],
    "closure": "Cuando Juan Carlos ha conciliado cotización, factura y recepción, y toda diferencia tiene solución y soporte. La llegada de mercancía por sí sola no cierra la compra."
  },
  {
    "title": "Ruta y carga diaria",
    "gid": 900106,
    "headers": [
      "Pedido",
      "Transporte",
      "Carga prevista",
      "Entrega prevista",
      "Parada",
      "Dirección",
      "Estado carga",
      "Responsable / evidencia"
    ],
    "rows": [
      [
        "EJ-102",
        "Carretilla",
        "Hoy · hora por confirmar",
        "Hoy 10:45",
        "1",
        "Ejemplo, sin dirección real",
        "Pendiente",
        "Por asignar"
      ],
      [
        "EJ-104",
        "Camión",
        "Hoy tarde · hora por confirmar",
        "Mañana 08:00",
        "1",
        "Por confirmar",
        "Pendiente",
        "Por asignar"
      ]
    ],
    "purpose": "Dejar listo qué sale en camión o carretilla, cuándo se carga y en qué orden se entrega.",
    "process": "Revisar pedidos alistados, direcciones y horas; organizar carga y paradas sin confundir el orden de carga con el de entrega.",
    "roles": "La persona de coordinación propuesta arma la ruta; Nelson confirma alistado y Lucho registra salida. Falta asignar quién confirma recepción cliente.",
    "update": "Cada tarde para la salida siguiente y cuando cambie una entrega, falte mercancía o se complete una salida.",
    "automation": "Tomar pedidos del registro maestro y proponer el plan para revisión. No hay ruteo ni conexión automática activa.",
    "notes": [
      "Ejemplos ficticios. Orden de carga y orden de entrega son distintos. El pedido debe estar alistado y autorizado para salir.",
      "Responsable por turno, horas de corte y carga, capacidad, prioridades y soporte de entrega al cliente."
    ],
    "closure": "Cuando se confirma con soporte la recepción de cada entrega y se resuelven las novedades. Marcar salida del camión no significa entrega; responsable de confirmación por acordar."
  },
  {
    "title": "Pagos y facturas · Excel existente",
    "gid": 900107,
    "headers": [
      "Qué revisar",
      "Cómo debería funcionar",
      "Quién participa",
      "Qué falta confirmar"
    ],
    "rows": [
      [
        "Excel actual",
        "Revisar columnas y guardar una versión controlada en nube",
        "Steven",
        "Ver archivo y elegir ubicación"
      ],
      [
        "Transferencias",
        "Confirmar ingreso, no confiar solo en foto",
        "Steven",
        "Soporte y acceso autorizado"
      ],
      [
        "Dos tickets",
        "Conservar ticket cliente y copia Lucho mientras se implementa",
        "Steven y Lucho",
        "Prueba sin cambiar control actual"
      ],
      [
        "Consulta del pago",
        "El tablero consulta estado y referencia; no vuelve a llevar caja",
        "Steven",
        "Cómo transmitir estado y quién puede verlo"
      ],
      [
        "Crédito mayorista",
        "Solo salir con autorización válida",
        "Responsable por definir",
        "Quién aprueba y quién factura"
      ],
      [
        "Datos privados",
        "No compartir movimientos de caja con todo el equipo",
        "Responsables por definir",
        "Permisos separados de la vista bodega"
      ]
    ],
    "purpose": "Revisar y mejorar el control de caja que ya lleva Steven sin crear otra lista de dinero.",
    "process": "Inspeccionar el Excel actual, definir qué estado necesita consultar bodega y conservar sus referencias. Esta hoja es un checklist, no una caja nueva.",
    "roles": "Steven confirma los pagos. Debe definirse quién autoriza crédito y factura mayoristas. Lucho consulta autorización antes de entregar.",
    "update": "El control existente se actualiza al verificar pago o emitir factura; este checklist cambia cuando el equipo acuerda una mejora.",
    "automation": "Compartir solo estado y referencia autorizados con los tableros, no todos los movimientos. No se ha migrado ni vinculado el Excel de Steven.",
    "notes": [
      "Esta hoja es un checklist. No contiene movimientos ni saldos, no reemplaza el Excel actual y no confirma pagos reales.",
      "Ubicación segura, permisos, control de soportes, crédito mayorista y continuidad de los dos tickets actuales."
    ],
    "closure": "Esta revisión termina cuando las mejoras al control existente están acordadas y probadas con Steven. No significa que el Excel ya esté migrado ni que se hayan confirmado pagos reales."
  },
  {
    "title": "Cumplimiento del proveedor",
    "gid": 900108,
    "headers": [
      "Proveedor ficticio",
      "Líneas pendientes",
      "Sin diferencias",
      "Con diferencias",
      "Total revisadas",
      "% sin diferencias",
      "Qué revisar"
    ],
    "rows": [
      [
        "Proveedor A",
        "1",
        "0",
        "0",
        "0",
        "",
        "Sin recepción: no calificar incumplimiento"
      ],
      [
        "Proveedor B",
        "0",
        "0",
        "1",
        "1",
        "0%",
        "Falta 1 caja; mantener reclamo"
      ],
      [
        "Proveedor C",
        "0",
        "1",
        "0",
        "1",
        "100%",
        "Ejemplo cerrado tras revisión completa"
      ]
    ],
    "purpose": "Ver patrones de diferencias para que compras sepa qué proveedor necesita seguimiento.",
    "process": "Contar líneas de producto ya revisadas: sin diferencias y con diferencias. Mostrar pendientes aparte; no calificarlos como incumplimiento.",
    "roles": "Juan Carlos revisa el resultado; Lucho aporta recepción. Los ejemplos aquí son estáticos; no son una evaluación real.",
    "update": "Después de la revisión completa de cada línea y al resolver reclamos. Una línea con varias diferencias se cuenta una sola vez.",
    "automation": "Calcular el indicador desde Control de compras y recepción sin volver a escribirlo. En las bases hay fórmulas de apoyo, pero las vistas de ejemplo no están conectadas.",
    "notes": [
      "EJEMPLO, no evaluación real. Se cuentan líneas de producto revisadas, no compras completas. Período ejemplo: las 3 líneas de Control de compras y recepción.",
      "Período y criterios de comparación. El porcentaje es líneas sin diferencias / líneas revisadas, no porcentaje de compras completas."
    ],
    "closure": "Se revisa con la periodicidad que acuerde el equipo y se deja el seguimiento necesario. Este indicador no cierra compras ni sustituye la resolución de diferencias."
  }
];
