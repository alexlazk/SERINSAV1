cube(`PgePrtParentesco`, {
  sql: `SELECT * FROM pge_prt_parentesco`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    prt_codigo: { sql: 'prt_codigo', type: 'number' },
    prt_codgen: { sql: 'prt_codgen', type: 'number' },
    prt_nombre: { sql: 'prt_nombre', type: 'string' },
    prt_codusr_registra: { sql: 'prt_codusr_registra', type: 'number' },
    prt_ip_registra: { sql: 'prt_ip_registra', type: 'string' },
    prt_fecha_registra: { sql: 'prt_fecha_registra', type: 'time' }
  }
});
