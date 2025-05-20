cube(`PgePaiPaises`, {
  sql: `SELECT * FROM pge_pai_paises`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    pai_codigo: { sql: 'pai_codigo', type: 'number' },
    pai_nombre: { sql: 'pai_nombre', type: 'string' },
    pai_gentilicio: { sql: 'pai_gentilicio', type: 'string' },
    pai_codusr_registra: { sql: 'pai_codusr_registra', type: 'number' },
    pai_ip_registra: { sql: 'pai_ip_registra', type: 'string' },
    pai_fecha_registra: { sql: 'pai_fecha_registra', type: 'time' }
  }
});
