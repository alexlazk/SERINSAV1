cube(`PgeEtnEtnia`, {
  sql: `SELECT * FROM pge_etn_etnia`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    etn_codigo: { sql: 'etn_codigo', type: 'number' },
    etn_nombre: { sql: 'etn_nombre', type: 'string' },
    etn_codusr_registra: { sql: 'etn_codusr_registra', type: 'number' },
    etn_ip_registra: { sql: 'etn_ip_registra', type: 'string' },
    etn_fecha_registra: { sql: 'etn_fecha_registra', type: 'time' }
  }
});
