cube(`PgeGenGenero`, {
  sql: `SELECT * FROM pge_gen_genero`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    gen_codigo: { sql: 'gen_codigo', type: 'number' },
    gen_nombre: { sql: 'gen_nombre', type: 'string' },
    gen_codusr_registra: { sql: 'gen_codusr_registra', type: 'number' },
    gen_ip_registra: { sql: 'gen_ip_registra', type: 'string' },
    gen_fecha_registra: { sql: 'gen_fecha_registra', type: 'time' }
  }
});
