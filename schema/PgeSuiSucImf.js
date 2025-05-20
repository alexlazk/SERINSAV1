cube(`PgeSuiSucImf`, {
  sql: `SELECT * FROM pge_sui_suc_imf`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    sui_codigo: { sql: 'sui_codigo', type: 'number' },
    sui_codimf: { sql: 'sui_codimf', type: 'number' },
    sui_coddep: { sql: 'sui_coddep', type: 'number' },
    sui_codmun: { sql: 'sui_codmun', type: 'number' },
    sui_nombre: { sql: 'sui_nombre', type: 'string' },
    sui_direccion: { sql: 'sui_direccion', type: 'string' },
    sui_telefonos: { sql: 'sui_telefonos', type: 'string' },
    sui_contacto: { sql: 'sui_contacto', type: 'string' },
    sui_estado: { sql: 'sui_estado', type: 'string' },
    sui_codusr_registra: { sql: 'sui_codusr_registra', type: 'number' },
    sui_ip_registra: { sql: 'sui_ip_registra', type: 'string' },
    sui_fecha_registra: { sql: 'sui_fecha_registra', type: 'time' }
  }
});
