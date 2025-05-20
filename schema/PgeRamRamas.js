cube(`PgeRamRamas`, {
  sql: `SELECT * FROM pge_ram_ramas`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    ram_codigo: { sql: 'ram_codigo', type: 'number' },
    ram_nombre: { sql: 'ram_nombre', type: 'string' },
    ram_codusr_registra: { sql: 'ram_codusr_registra', type: 'number' },
    ram_ip_registra: { sql: 'ram_ip_registra', type: 'string' },
    ram_fecha_registra: { sql: 'ram_fecha_registra', type: 'time' }
  }
});
