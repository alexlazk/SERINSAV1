cube(`PgeDprDetPrd`, {
  sql: `SELECT * FROM pge_dpr_det_prd`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    dpr_codigo: { sql: 'dpr_codigo', type: 'number' },
    dpr_codprd: { sql: 'dpr_codprd', type: 'number' },
    dpr_nombre: { sql: 'dpr_nombre', type: 'string' },
    dpr_codpai: { sql: 'dpr_codpai', type: 'number' },
    dpr_codgen: { sql: 'dpr_codgen', type: 'number' },
    dpr_edad_minima: { sql: 'dpr_edad_minima', type: 'string' },
    dpr_edad_maxima: { sql: 'dpr_edad_maxima', type: 'string' },
    dpr_prima: { sql: 'dpr_prima', type: 'string' },
    dpr_estado: { sql: 'dpr_estado', type: 'string' },
    dpr_codusr_registra: { sql: 'dpr_codusr_registra', type: 'number' },
    dpr_ip_registra: { sql: 'dpr_ip_registra', type: 'string' },
    dpr_fecha_registra: { sql: 'dpr_fecha_registra', type: 'time' },
    estado: { sql: 'estado', type: 'string' },
    ventana: { sql: 'ventana', type: 'string' },
    ventanasd: { sql: 'ventanasd', type: 'string' }
  }
});
