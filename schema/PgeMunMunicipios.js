cube(`PgeMunMunicipios`, {
  sql: `SELECT * FROM pge_mun_municipios`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    mun_codigo: { sql: 'mun_codigo', type: 'number' },
    mun_coddep: { sql: 'mun_coddep', type: 'number' },
    mun_nombre: { sql: 'mun_nombre', type: 'string' },
    mun_codusr_registra: { sql: 'mun_codusr_registra', type: 'number' },
    mun_ip_registra: { sql: 'mun_ip_registra', type: 'string' },
    mun_fecha_registra: { sql: 'mun_fecha_registra', type: 'time' }
  }
});
