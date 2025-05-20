cube(`PgeRedRedes`, {
  sql: `SELECT * FROM pge_red_redes`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    red_codigo: { sql: 'red_codigo', type: 'number' },
    red_codtpr: { sql: 'red_codtpr', type: 'number' },
    red_codpai: { sql: 'red_codpai', type: 'number' },
    red_nombre: { sql: 'red_nombre', type: 'string' },
    red_estado: { sql: 'red_estado', type: 'string' },
    red_codusr_registra: { sql: 'red_codusr_registra', type: 'number' },
    red_ip_registra: { sql: 'red_ip_registra', type: 'string' },
    red_fecha_registra: { sql: 'red_fecha_registra', type: 'time' }
  }
});
