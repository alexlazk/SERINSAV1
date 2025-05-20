cube(`PgeTdiTipoDocId`, {
  sql: `SELECT * FROM pge_tdi_tipo_doc_id`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    tdi_codigo: { sql: 'tdi_codigo', type: 'number' },
    tdi_nombre: { sql: 'tdi_nombre', type: 'string' },
    tdi_identificador: { sql: 'tdi_identificador', type: 'number' },
    tdi_codusr_registra: { sql: 'tdi_codusr_registra', type: 'number' },
    tdi_ip_registra: { sql: 'tdi_ip_registra', type: 'string' },
    tdi_fecha_registra: { sql: 'tdi_fecha_registra', type: 'time' }
  }
});
