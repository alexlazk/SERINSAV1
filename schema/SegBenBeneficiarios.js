cube(`SegBenBeneficiarios`, {
  sql: `SELECT * FROM seg_ben_beneficiarios`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    ben_codigo: { sql: 'ben_codigo', type: 'number' },
    ben_codpol: { sql: 'ben_codpol', type: 'number' },
    ben_codadp: { sql: 'ben_codadp', type: 'number' },
    ben_codprt: { sql: 'ben_codprt', type: 'number' },
    ben_nombres: { sql: 'ben_nombres', type: 'string' },
    ben_apellidos: { sql: 'ben_apellidos', type: 'number' },
    ben_codtdi: { sql: 'ben_codtdi', type: 'number' },
    ben_identificacion: { sql: 'ben_identificacion', type: 'number' },
    ben_fecha_nacimiento: { sql: 'ben_fecha_nacimiento', type: 'time' },
    ben_porcentaje: { sql: 'ben_porcentaje', type: 'string' },
    ben_estado_civil: { sql: 'ben_estado_civil', type: 'string' },
    ben_profesion: { sql: 'ben_profesion', type: 'string' },
    ben_nacionalidad: { sql: 'ben_nacionalidad', type: 'number' },
    ben_tipo: { sql: 'ben_tipo', type: 'string' },
    ben_estado: { sql: 'ben_estado', type: 'string' },
    ben_codusr_registra: { sql: 'ben_codusr_registra', type: 'number' },
    ben_ip_registra: { sql: 'ben_ip_registra', type: 'string' },
    ben_fecha_registra: { sql: 'ben_fecha_registra', type: 'time' }
  }
});
