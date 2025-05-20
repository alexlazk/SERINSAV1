cube(`PgeDepDepartamentos`, {
  sql: `SELECT * FROM pge_dep_departamentos`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    dep_codigo: { sql: 'dep_codigo', type: 'number' },
    dep_codpai: { sql: 'dep_codpai', type: 'number' },
    dep_nombre: { sql: 'dep_nombre', type: 'string' },
    dep_codusr_registra: { sql: 'dep_codusr_registra', type: 'number' },
    dep_ip_registra: { sql: 'dep_ip_registra', type: 'string' },
    dep_fecha_registra: { sql: 'dep_fecha_registra', type: 'time' }
  }
});
