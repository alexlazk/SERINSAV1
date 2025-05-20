cube(`SegPomPolizasMaestras`, {
  sql: `SELECT * FROM seg_pom_polizas_maestras`,

  measures: {
    count: {
      type: 'count',
    },
  },

  dimensions: {
    pom_codigo: { sql: 'pom_codigo', type: 'number' },
    pom_codimf: { sql: 'pom_codimf', type: 'number' },
    pom_codprd: { sql: 'pom_codprd', type: 'number' },
    pom_poliza: { sql: 'pom_poliza', type: 'string' },
    pom_fecha_ini: { sql: 'pom_fecha_ini', type: 'time' },
    pom_fecha_fin: { sql: 'pom_fecha_fin', type: 'time' },
    pom_tipo: { sql: 'pom_tipo', type: 'string' },
    pom_estado: { sql: 'pom_estado', type: 'string' },
    pom_codusr_registra: { sql: 'pom_codusr_registra', type: 'number' },
    pom_ip_registra: { sql: 'pom_ip_registra', type: 'string' },
    pom_fecha_registra: { sql: 'pom_fecha_registra', type: 'time' },
    tipo: { sql: 'tipo', type: 'string' }
  }
});
