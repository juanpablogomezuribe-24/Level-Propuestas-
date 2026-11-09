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
    "process": "Cada pedido aparece una sola vez. En mayoristas: Eduardo envía foto por WhatsApp a Farfán; Farfán usa Claude para organizar el pedido. La factura la hace Farfán o Eduardo, responsable por definir, sin pasar por Steven.",
    "roles": "Mostrador registra su canal; atención registra WhatsApp; Farfán organiza mayoristas con Claude. Nelson actualiza Recibido, Alistando y Entregado a Lucho; Lucho confirma Despachado.",
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
    "process": "Comparar cotización, factura y recepción en la misma unidad, con referencia, precio y fechas. Registrar faltantes y devoluciones con soporte y seguimiento; no cerrar por la sola llegada de mercancía.",
    "roles": "Juan Carlos registra la compra y revisa documentos. Lucho cuenta lo recibido y aporta soporte. Juan Carlos sigue la diferencia hasta resolverla.",
    "update": "Al acordar la compra, recibir mercancía y resolver una novedad. Una celda vacía no significa que llegaron cero unidades.",
    "automation": "En el futuro, Claude podrá ayudar a comparar documentos, señalar faltantes/devoluciones, proponer alertas y un informe mensual para revisión. No hay conexión, alertas ni informe automático activos.",
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
    "title": "Cierre de caja",
    "gid": 900107,
    "headers": [
      "Venta",
      "Valor",
      "Medio de pago"
    ],
    "rows": [
      [
        "VENTA-EJ-001",
        "$160.000",
        "Efectivo"
      ],
      [
        "VENTA-EJ-002",
        "$240.000",
        "Transferencia Bancolombia"
      ],
      [
        "VENTA-EJ-003",
        "$300.000",
        "Nequi"
      ]
    ],
    "purpose": "Registrar cada venta de caja, cuánto fue y por qué medio se pagó.",
    "process": "Al generar la factura, Steven pregunta el medio de pago, verifica el ingreso y registra una sola vez la venta, su valor y el medio. Los pedidos mayoristas no pasan por Steven para facturarse.",
    "roles": "Steven registra las ventas de caja. La facturación mayorista queda a cargo de Farfán o Eduardo, por definir.",
    "update": "Con cada venta de caja, después de verificar el pago.",
    "automation": "En el futuro, traer la venta desde la fuente elegida sin volver a digitar. No hay conexión activa y el Excel real de Steven no se reemplaza sin revisarlo.",
    "notes": [
      "Ejemplos ficticios. No son ventas ni pagos reales.",
      "Revisar el Excel existente y acordar el procedimiento de cierre sin añadir campos a estas tres columnas."
    ],
    "closure": "Al final del día Steven revisa los registros frente a los soportes y el dinero recibido. Esta tabla no demuestra por sí sola que la caja cuadre; falta acordar el procedimiento de conciliación."
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
  },
  {
    "title": "Control de cartera",
    "gid": 900110,
    "headers": [
      "Factura",
      "Cliente",
      "Valor facturado",
      "Abonos",
      "Saldo",
      "Fecha de vencimiento",
      "Próxima gestión"
    ],
    "rows": [
      [
        "FACT-EJ-001",
        "Juan Pablo Gómez (ejemplo)",
        "$840.000",
        "$240.000",
        "$600.000",
        "15/11/2026",
        "Confirmar fecha de pago"
      ],
      [
        "FACT-EJ-002",
        "Sebastián Torres (ejemplo)",
        "$300.000",
        "$100.000",
        "$200.000",
        "20/11/2026",
        "Recordar saldo antes del vencimiento"
      ],
      [
        "FACT-EJ-003",
        "Sebastián Farfán (ejemplo)",
        "$420.000",
        "$420.000",
        "$0",
        "18/11/2026",
        "Verificar soporte y cerrar"
      ]
    ],
    "purpose": "Saber qué facturas quedan pendientes de cobrar y qué gestión sigue con cada cliente.",
    "process": "Registrar cada factura una sola vez, actualizar los abonos verificados y calcular saldo como valor facturado menos abonos. Revisar vencimiento y siguiente gestión.",
    "roles": "Steven actualiza la cartera. Sebastián Torres la revisa diariamente. Esto no significa que Steven facture los pedidos mayoristas.",
    "update": "Cuando se registra una factura pendiente, se verifica un abono o cambia la próxima gestión; revisión diaria de Sebastián Torres.",
    "automation": "En el futuro, conectar facturas y abonos verificados con la fuente acordada. No hay sincronización ni mensajes de cobro automáticos activos.",
    "notes": [
      "Facturas, importes y fechas ficticios. Los nombres se usan solo para ilustrar; no representan deudas reales.",
      "Acordar fuente de facturas, soporte de abonos y permisos antes de cargar cartera real."
    ],
    "closure": "Una factura se cierra cuando el saldo queda en cero y los abonos tienen soporte verificado. Una promesa de pago no cancela la deuda."
  }
];
