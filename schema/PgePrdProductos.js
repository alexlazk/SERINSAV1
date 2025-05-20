cube(`PgePrdProductos`, {
  sql: `SELECT * FROM pge_prd_productos`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    prd_codigo: { sql: 'prd_codigo', type: 'number' },
    prd_codram: { sql: 'prd_codram', type: 'number' },
    prd_nombre: { sql: 'prd_nombre', type: 'string' },
    prd_nombre_corto: { sql: 'prd_nombre_corto', type: 'string' },
    prd_descripcion: { sql: 'prd_descripcion', type: 'string' },
    prd_dias_siniestro: { sql: 'prd_dias_siniestro', type: 'number' },
    prd_dias_renovacion: { sql: 'prd_dias_renovacion', type: 'number' },
    prd_maximo_beneficiarios: { sql: 'prd_maximo_beneficiarios', type: 'string' },
    prd_maximo_designados: { sql: 'prd_maximo_designados', type: 'string' },
    prd_tipo: { sql: 'prd_tipo', type: 'string' },
    prd_observaciones: { sql: 'prd_observaciones', type: 'string' },
    prd_estado: { sql: 'prd_estado', type: 'string' },
    prd_codusr_registra: { sql: 'prd_codusr_registra', type: 'number' },
    prd_ip_registra: { sql: 'prd_ip_registra', type: 'string' },
    prd_fecha_registra: { sql: 'prd_fecha_registra', type: 'time' },
    ventana: { sql: 'ventana', type: 'string' },
    ventana_sd: { sql: 'ventana_sd', type: 'string' }
  }
});
