cube(`SegPagPagos`, {
  sql: `SELECT * FROM seg_pag_pagos`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    pag_codigo: { sql: 'pag_codigo', type: 'number' },
    pag_codsui: { sql: 'pag_codsui', type: 'number' },
    pag_codpol: { sql: 'pag_codpol', type: 'number' },
    pag_codsui_pago: { sql: 'pag_codsui_pago', type: 'number' },
    pag_referencia: { sql: 'pag_referencia', type: 'string' },
    pag_cuota: { sql: 'pag_cuota', type: 'string' },
    pag_fecha: { sql: 'pag_fecha', type: 'time' },
    pag_monto: { sql: 'pag_monto', type: 'number' },
    pag_impuestos: { sql: 'pag_impuestos', type: 'string' },
    pag_fecha_pago: { sql: 'pag_fecha_pago', type: 'time' },
    pag_monto_pago: { sql: 'pag_monto_pago', type: 'number' },
    pag_impuestos_pago: { sql: 'pag_impuestos_pago', type: 'string' },
    pag_estado: { sql: 'pag_estado', type: 'string' },
    pag_comision: { sql: 'pag_comision', type: 'string' },
    pag_codusr_registra: { sql: 'pag_codusr_registra', type: 'number' },
    pag_ip_registra: { sql: 'pag_ip_registra', type: 'string' },
    pag_fecha_registra: { sql: 'pag_fecha_registra', type: 'time' },
    fecha_pago: { sql: 'fecha_pago', type: 'time' },
    pag_codusr_update: { sql: 'pag_codusr_update', type: 'time' },
    pag_fecha_update: { sql: 'pag_fecha_update', type: 'time' }
  }
});
