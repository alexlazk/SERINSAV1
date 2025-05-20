cube(`SegStpStatusPol`, {
  sql: `SELECT * FROM seg_stp_status_pol`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    stp_codigo: { sql: 'stp_codigo', type: 'number' },
    stp_codpol: { sql: 'stp_codpol', type: 'number' },
    stp_estado: { sql: 'stp_estado', type: 'string' },
    stp_fecha_estado: { sql: 'stp_fecha_estado', type: 'time' },
    stp_codusr_registra: { sql: 'stp_codusr_registra', type: 'number' },
    stp_ip_registra: { sql: 'stp_ip_registra', type: 'string' },
    stp_fecha_registra: { sql: 'stp_fecha_registra', type: 'time' }
  }
});
