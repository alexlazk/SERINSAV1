cube(`SegSinSiniestros`, {
  sql: `SELECT * FROM seg_sin_siniestros`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    sin_codigo: { sql: 'sin_codigo', type: 'number' },
    sin_codpol: { sql: 'sin_codpol', type: 'number' },
    sin_codimf: { sql: 'sin_codimf', type: 'number' },
    sin_codsui: { sql: 'sin_codsui', type: 'number' },
    sin_codcau: { sql: 'sin_codcau', type: 'number' },
    sin_codprt: { sql: 'sin_codprt', type: 'number' },
    sin_codsta: { sql: 'sin_codsta', type: 'number' },
    sin_fecha_siniestro: { sql: 'sin_fecha_siniestro', type: 'time' },
    sin_dias_cobertura: { sql: 'sin_dias_cobertura', type: 'number' },
    sin_fecha_notificacion: { sql: 'sin_fecha_notificacion', type: 'time' },
    sin_referencia: { sql: 'sin_referencia', type: 'string' },
    sin_nombres: { sql: 'sin_nombres', type: 'string' },
    sin_apellidos: { sql: 'sin_apellidos', type: 'number' },
    sin_codtdi: { sql: 'sin_codtdi', type: 'number' },
    sin_descripcion: { sql: 'sin_descripcion', type: 'string' },
    sin_numero_documento: { sql: 'sin_numero_documento', type: 'number' },
    sin_email: { sql: 'sin_email', type: 'string' },
    sin_celular: { sql: 'sin_celular', type: 'string' },
    sin_telefono: { sql: 'sin_telefono', type: 'string' },
    sin_extension: { sql: 'sin_extension', type: 'string' },
    sin_direccion_residencia: { sql: 'sin_direccion_residencia', type: 'number' },
    sin_codusr_registra: { sql: 'sin_codusr_registra', type: 'number' },
    sin_ip_registra: { sql: 'sin_ip_registra', type: 'string' },
    sin_fecha_registra: { sql: 'sin_fecha_registra', type: 'time' },
    mes: { sql: 'mes', type: 'string' },
    fecha: { sql: 'fecha', type: 'time' },
    ventana*: { sql: 'ventana*', type: 'string' }
  }
});
