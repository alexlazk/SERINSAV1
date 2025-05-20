cube(`PgeImfImfs`, {
  sql: `SELECT * FROM pge_imf_imfs`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    imf_codigo: { sql: 'imf_codigo', type: 'number' },
    imf_codred: { sql: 'imf_codred', type: 'number' },
    imf_nombre: { sql: 'imf_nombre', type: 'string' },
    imf_siglas: { sql: 'imf_siglas', type: 'string' },
    imf_contacto: { sql: 'imf_contacto', type: 'string' },
    imf_sector: { sql: 'imf_sector', type: 'string' },
    imf_clasificacion: { sql: 'imf_clasificacion', type: 'string' },
    imf_empleados: { sql: 'imf_empleados', type: 'string' },
    imf_clientes: { sql: 'imf_clientes', type: 'string' },
    imf_ruta_logo: { sql: 'imf_ruta_logo', type: 'string' },
    imf_nombre_firma: { sql: 'imf_nombre_firma', type: 'string' },
    imf_estado: { sql: 'imf_estado', type: 'string' },
    imf_codusr_registra: { sql: 'imf_codusr_registra', type: 'number' },
    imf_ip_registra: { sql: 'imf_ip_registra', type: 'string' },
    imf_fecha_registra: { sql: 'imf_fecha_registra', type: 'time' },
    ventana*: { sql: 'ventana*', type: 'string' }
  }
});
