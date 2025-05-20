cube(`PgeProPromotores`, {
  sql: `SELECT * FROM pge_pro_promotores`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    pro_codigo: { sql: 'pro_codigo', type: 'number' },
    pro_codnis: { sql: 'pro_codnis', type: 'number' },
    pro_codsui: { sql: 'pro_codsui', type: 'number' },
    pro_codpro_padre: { sql: 'pro_codpro_padre', type: 'number' },
    pro_nombre: { sql: 'pro_nombre', type: 'string' },
    pro_cargo: { sql: 'pro_cargo', type: 'string' },
    pro_estado: { sql: 'pro_estado', type: 'string' },
    pro_codusr_registra: { sql: 'pro_codusr_registra', type: 'number' },
    pro_ip_registra: { sql: 'pro_ip_registra', type: 'string' },
    pro_fecha_registra: { sql: 'pro_fecha_registra', type: 'time' },
    ventana: { sql: 'ventana', type: 'string' },
    codpro_padre: { sql: 'codpro_padre', type: 'number' }
  }
});
