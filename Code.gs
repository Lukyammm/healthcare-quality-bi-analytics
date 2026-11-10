const PLANILHAS = {
  principal: 'SYNTHETIC_DEMO_SPREADSHEET_ID'
};
const ABA_CAMINHADAS = 'BASE DE DADOS CAMINHADAS';
const ABA_NOTIFICA = 'NOTIFICA - BASE';
const META_INSTITUCIONAL = 80;
const FUSO_HORARIO = 'America/Fortaleza';
const CACHE_FILTROS_BOLETIM_KEY = 'boletim:filtros:v2';
const CACHE_FILTROS_BOLETIM_TTL = 900;
const ORDEM_MESES = {
  'JANEIRO': 1,
  'FEVEREIRO': 2,
  'MARÇO': 3,
  'MARCO': 3,
  'ABRIL': 4,
  'MAIO': 5,
  'JUNHO': 6,
  'JULHO': 7,
  'AGOSTO': 8,
  'SETEMBRO': 9,
  'OUTUBRO': 10,
  'NOVEMBRO': 11,
  'DEZEMBRO': 12,
  'JAN': 1,
  'JAN.': 1,
  'FEV': 2,
  'FEV.': 2,
  'MAR': 3,
  'MAR.': 3,
  'ABR': 4,
  'ABR.': 4,
  'MAI': 5,
  'MAI.': 5,
  'JUN': 6,
  'JUN.': 6,
  'JUL': 7,
  'JUL.': 7,
  'AGO': 8,
  'AGO.': 8,
  'SET': 9,
  'SET.': 9,
  'OUT': 10,
  'OUT.': 10,
  'NOV': 11,
  'NOV.': 11,
  'DEZ': 12,
  'DEZ.': 12
};
const MESES_CANONICOS = {
  1: 'Janeiro',
  2: 'Fevereiro',
  3: 'Março',
  4: 'Abril',
  5: 'Maio',
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro'
};

const CLASSIFICACOES_META_5_DIAS = [
  'EVENTO ADVERSO GRAVE',
  'EVENTO ADVERSO ÓBITO',
  'EVENTO ADVERSO OBITO',
  'NEVER EVENT'
];

const METAS_CAMINHADAS = [
  {
    codigo: '1',
    nome: 'Identificação Segura',
    observacaoIdx: 19,
    itens: [
      { codigo: '1.1', nome: 'Paciente com pulseira padrão legível', idx: 14 },
      { codigo: '1.2', nome: 'Placa de leito', idx: 15 },
      { codigo: '1.3', nome: 'Dieta', idx: 16 },
      { codigo: '1.4', nome: 'Medicamentos', idx: 17 },
      { codigo: '1.5', nome: 'Hemocomponentes', idx: 18 }
    ]
  },
  {
    codigo: '2',
    nome: 'Comunicação Efetiva',
    observacaoIdx: 24,
    itens: [
      { codigo: '2.1', nome: 'Reuniões rápidas de segurança', idx: 20 },
      { codigo: '2.2', nome: 'Comunicação de resultados críticos laboratoriais', idx: 21 },
      { codigo: '2.3', nome: 'Registros da transferência de cuidados', idx: 22 },
      { codigo: '2.4', nome: 'Registros da passagem de plantão', idx: 23 }
    ]
  },
  {
    codigo: '3',
    nome: 'Segurança da Cadeia Medicamentosa',
    observacaoIdx: 32,
    itens: [
      { codigo: '3.1', nome: 'Geladeira (temperatura e uso exclusivo)', idx: 25 },
      { codigo: '3.2', nome: 'Validade dos medicamentos da geladeira', idx: 26 },
      { codigo: '3.3', nome: 'Medicamentos multidoses', idx: 27 },
      { codigo: '3.4', nome: 'Eletrólitos', idx: 28 },
      { codigo: '3.5', nome: 'Farmacovigilância', idx: 29 },
      { codigo: '3.6', nome: 'Medicamentos via sonda', idx: 30 },
      { codigo: '3.7', nome: 'MPPs (dupla checagem)', idx: 31 }
    ]
  },
  {
    codigo: '4',
    nome: 'Cirurgia Segura',
    observacaoIdx: 39,
    itens: [
      { codigo: '4.1', nome: 'Demarcação do sítio', idx: 33 },
      { codigo: '4.2', nome: 'Tricotomia', idx: 34 },
      { codigo: '4.3', nome: 'Reserva cirúrgica', idx: 35 },
      { codigo: '4.4', nome: 'Antibioticoprofilaxia', idx: 36 },
      { codigo: '4.5', nome: 'Amostras identificadas', idx: 37 },
      { codigo: '4.6', nome: 'Avaliação anestésica', idx: 38 }
    ]
  },
  {
    codigo: '5',
    nome: 'Higienização das Mãos',
    observacaoIdx: 43,
    itens: [
      { codigo: '5.1', nome: 'Higienização correta', idx: 40 },
      { codigo: '5.2', nome: 'Dispensadores abastecidos', idx: 41 },
      { codigo: '5.3', nome: 'Sem adornos', idx: 42 }
    ]
  },
  {
    codigo: '6',
    nome: 'Prevenção de Lesão por Pressão',
    observacaoIdx: 50,
    itens: [
      { codigo: '6.1', nome: 'Avaliação na admissão', idx: 44 },
      { codigo: '6.2', nome: 'Avaliação diária', idx: 45 },
      { codigo: '6.3', nome: 'Mudança de decúbito', idx: 46 },
      { codigo: '6.4', nome: 'Cuidados com a pele', idx: 47 },
      { codigo: '6.5', nome: 'Hidratação', idx: 48 },
      { codigo: '6.6', nome: 'Monitoramento da pele', idx: 49 }
    ]
  },
  {
    codigo: '7',
    nome: 'Prevenção de Quedas',
    observacaoIdx: 57,
    itens: [
      { codigo: '7.1', nome: 'Avaliação na admissão', idx: 51 },
      { codigo: '7.2', nome: 'Avaliação diária', idx: 52 },
      { codigo: '7.3', nome: 'Grades e rodas', idx: 53 },
      { codigo: '7.4', nome: 'Calçado antiderrapante', idx: 54 },
      { codigo: '7.5', nome: 'Ambiente seguro', idx: 55 },
      { codigo: '7.6', nome: 'Sinalização de risco', idx: 56 }
    ]
  }
];

/* ============================================================
   CONFIGURAÇÃO SELF-SERVICE (Fase 1)
   A configuração editável fica em Script Properties (fonte única),
   com fallback para os padrões definidos acima. Sem nada salvo, o
   comportamento é idêntico ao histórico (zero regressão).
   Edição feita pela tela "Administração" do app (google.script.run).
   ============================================================ */
const CONFIG_PROP_KEY = 'COSEP_CONFIG_V1';
const CONFIG_ADMINS_PROP_KEY = 'COSEP_ADMINS';
const CONFIG_LOG_SHEET = 'COSEP_CONFIG_LOG';

function configPadrao() {
  return {
    metaInstitucional: META_INSTITUCIONAL,
    prazoMeta5Dias: 5,
    prazoMeta10Dias: 10,
    classificacoesMeta5Dias: CLASSIFICACOES_META_5_DIAS.slice(),
    metasCaminhadas: METAS_CAMINHADAS.map(meta => ({
      codigo: meta.codigo,
      nome: meta.nome,
      ativa: true,
      observacaoIdx: meta.observacaoIdx,
      itens: meta.itens.map(item => ({ codigo: item.codigo, nome: item.nome, idx: item.idx }))
    })),
    excecoesSetores: EXCECOES_SETORES_PADRAO.map(regra => ({
      metaCodigo: regra.metaCodigo,
      setorOrigem: regra.setorOrigem,
      setoresPuxados: regra.setoresPuxados.slice(),
      bidirecional: !!regra.bidirecional,
      ativa: regra.ativa !== false
    })),
    metasAlvo: [],
    alertas: {
      ativo: false,
      destinatarios: [],
      conformidadeMinima: META_INSTITUCIONAL,
      incluirNotificacoesCriticas: true,
      horaEnvio: 7
    },
    atualizadoEm: '',
    atualizadoPor: ''
  };
}

function obterConfig() {
  const padrao = configPadrao();
  try {
    const raw = PropertiesService.getScriptProperties().getProperty(CONFIG_PROP_KEY);
    if (!raw) return padrao;
    return mesclarConfig(padrao, JSON.parse(raw));
  } catch (erro) {
    registrarErro('obter-config', erro);
    return padrao;
  }
}

function mesclarConfig(padrao, salvo) {
  if (!salvo || typeof salvo !== 'object') return padrao;
  const cfg = JSON.parse(JSON.stringify(padrao));

  const metaInst = Number(salvo.metaInstitucional);
  if (!Number.isNaN(metaInst) && metaInst >= 0 && metaInst <= 100) cfg.metaInstitucional = metaInst;

  const p5 = Number(salvo.prazoMeta5Dias);
  if (!Number.isNaN(p5) && p5 > 0) cfg.prazoMeta5Dias = Math.round(p5);
  const p10 = Number(salvo.prazoMeta10Dias);
  if (!Number.isNaN(p10) && p10 > 0) cfg.prazoMeta10Dias = Math.round(p10);

  if (Array.isArray(salvo.classificacoesMeta5Dias)) {
    const lista = salvo.classificacoesMeta5Dias.map(t => String(t || '').trim()).filter(Boolean);
    if (lista.length) cfg.classificacoesMeta5Dias = lista;
  }

  if (Array.isArray(salvo.metasCaminhadas) && salvo.metasCaminhadas.length) {
    // Mescla por código: preserva idx/estrutura dos padrões e aplica nome/ativa salvos.
    const porCodigo = {};
    salvo.metasCaminhadas.forEach(m => { if (m && m.codigo != null) porCodigo[String(m.codigo)] = m; });
    cfg.metasCaminhadas = cfg.metasCaminhadas.map(metaPadrao => {
      const ms = porCodigo[String(metaPadrao.codigo)];
      if (!ms) return metaPadrao;
      const itensSalvos = {};
      (Array.isArray(ms.itens) ? ms.itens : []).forEach(it => { if (it && it.codigo != null) itensSalvos[String(it.codigo)] = it; });
      return {
        codigo: metaPadrao.codigo,
        nome: String(ms.nome || '').trim() || metaPadrao.nome,
        ativa: ms.ativa !== false,
        observacaoIdx: metaPadrao.observacaoIdx,
        itens: metaPadrao.itens.map(itemPadrao => {
          const is = itensSalvos[String(itemPadrao.codigo)];
          return {
            codigo: itemPadrao.codigo,
            nome: is && String(is.nome || '').trim() ? String(is.nome).trim() : itemPadrao.nome,
            idx: itemPadrao.idx
          };
        })
      };
    });
  }

  if (Array.isArray(salvo.excecoesSetores)) {
    cfg.excecoesSetores = salvo.excecoesSetores.map(regra => {
      if (!regra || typeof regra !== 'object') return null;
      const metaCodigo = String(regra.metaCodigo || '').trim();
      const setorOrigem = String(regra.setorOrigem || '').trim();
      const setoresPuxados = (Array.isArray(regra.setoresPuxados) ? regra.setoresPuxados : [])
        .map(s => String(s || '').trim()).filter(Boolean);
      if (!metaCodigo || !setorOrigem || !setoresPuxados.length) return null;
      return {
        metaCodigo: metaCodigo,
        setorOrigem: setorOrigem,
        setoresPuxados: setoresPuxados,
        bidirecional: regra.bidirecional === true,
        ativa: regra.ativa !== false
      };
    }).filter(Boolean);
  }

  if (Array.isArray(salvo.metasAlvo)) {
    cfg.metasAlvo = salvo.metasAlvo.map(regra => {
      if (!regra || typeof regra !== 'object') return null;
      const valor = Number(regra.valor);
      if (Number.isNaN(valor) || valor < 0 || valor > 100) return null;
      const ano = regra.ano != null && String(regra.ano).trim() ? normalizarAno(regra.ano) : null;
      const mesNum = Number(regra.mes);
      const mes = (!Number.isNaN(mesNum) && mesNum >= 1 && mesNum <= 12) ? Math.round(mesNum) : null;
      const metaCodigo = String(regra.metaCodigo || '').trim() || null;
      const setor = String(regra.setor || '').trim() || null;
      return {
        ano: ano || null,
        mes: mes,
        metaCodigo: metaCodigo,
        setor: setor,
        valor: valor,
        ativa: regra.ativa !== false
      };
    }).filter(Boolean);
  }

  if (salvo.alertas && typeof salvo.alertas === 'object') {
    const a = salvo.alertas;
    if (typeof a.ativo === 'boolean') cfg.alertas.ativo = a.ativo;
    if (Array.isArray(a.destinatarios)) {
      cfg.alertas.destinatarios = a.destinatarios.map(e => String(e || '').trim()).filter(Boolean);
    }
    const cmin = Number(a.conformidadeMinima);
    if (!Number.isNaN(cmin) && cmin >= 0 && cmin <= 100) cfg.alertas.conformidadeMinima = cmin;
    if (typeof a.incluirNotificacoesCriticas === 'boolean') cfg.alertas.incluirNotificacoesCriticas = a.incluirNotificacoesCriticas;
    const hora = Number(a.horaEnvio);
    if (!Number.isNaN(hora) && hora >= 0 && hora <= 23) cfg.alertas.horaEnvio = Math.round(hora);
  }

  cfg.atualizadoEm = salvo.atualizadoEm || '';
  cfg.atualizadoPor = salvo.atualizadoPor || '';
  return cfg;
}

function emailUsuarioAtual() {
  try {
    const ativo = Session.getActiveUser() && Session.getActiveUser().getEmail();
    if (ativo) return ativo;
    return (Session.getEffectiveUser() && Session.getEffectiveUser().getEmail()) || '';
  } catch (erro) {
    return '';
  }
}

function listaAdmins() {
  try {
    const raw = PropertiesService.getScriptProperties().getProperty(CONFIG_ADMINS_PROP_KEY) || '';
    return raw.split(/[;,]/).map(s => String(s || '').trim().toLowerCase()).filter(Boolean);
  } catch (erro) {
    return [];
  }
}

function usuarioPodeEditarConfig() {
  const admins = listaAdmins();
  if (!admins.length) return true; // sem allowlist configurada → liberado (proprietário)
  const email = emailUsuarioAtual().toLowerCase();
  return !!email && admins.indexOf(email) !== -1;
}

function obterConfigCosep() {
  return executarRota('rpc-config-get', () => {
    const podeEditar = usuarioPodeEditarConfig();
    let setores = [];
    let anos = [];
    try {
      const filtros = getFiltros(abrirPlanilhaLeitura('principal'));
      setores = (filtros.caminhadas && filtros.caminhadas.unidades) || [];
      anos = (filtros.caminhadas && filtros.caminhadas.anos) || [];
    } catch (erro) {
      registrarErro('config-setores', erro);
    }
    return {
      success: true,
      config: obterConfig(),
      podeEditar: podeEditar,
      usuario: emailUsuarioAtual(),
      admins: podeEditar ? listaAdmins() : [],
      historico: podeEditar ? lerLogConfig(10) : [],
      setores: setores,
      anos: anos,
      geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm")
    };
  });
}

function salvarAdminsCosep(lista) {
  return executarRota('rpc-admins-save', () => {
    if (!usuarioPodeEditarConfig()) {
      return { success: false, mensagem: 'Você não tem permissão para alterar os administradores.' };
    }
    const emails = (Array.isArray(lista) ? lista : String(lista || '').split(/[;,\n]/))
      .map(e => String(e || '').trim().toLowerCase())
      .filter(Boolean);
    const unicos = [];
    emails.forEach(e => { if (unicos.indexOf(e) === -1) unicos.push(e); });
    PropertiesService.getScriptProperties().setProperty(CONFIG_ADMINS_PROP_KEY, unicos.join(';'));
    registrarLogConfig(emailUsuarioAtual() || 'desconhecido', 'Lista de administradores atualizada (' + unicos.length + ')');
    return { success: true, admins: unicos, mensagem: 'Administradores atualizados.' };
  });
}

function lerLogConfig(limite) {
  try {
    const ss = abrirPlanilhaLeitura('principal');
    const sh = ss.getSheetByName(CONFIG_LOG_SHEET);
    if (!sh) return [];
    const ultimaLinha = sh.getLastRow();
    if (ultimaLinha < 2) return [];
    const total = ultimaLinha - 1;
    const qtd = Math.min(Math.max(Number(limite) || 10, 1), total);
    const inicio = ultimaLinha - qtd + 1;
    const valores = sh.getRange(inicio, 1, qtd, 3).getValues();
    return valores
      .map(linha => ({ quando: String(linha[0] || ''), usuario: String(linha[1] || ''), acao: String(linha[2] || '') }))
      .reverse();
  } catch (erro) {
    registrarErro('ler-log-config', erro);
    return [];
  }
}

function salvarConfigCosep(novaConfig) {
  return executarRota('rpc-config-save', () => {
    if (!usuarioPodeEditarConfig()) {
      return { success: false, mensagem: 'Você não tem permissão para alterar as configurações.' };
    }
    const merged = mesclarConfig(configPadrao(), novaConfig || {});
    merged.atualizadoEm = Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm");
    merged.atualizadoPor = emailUsuarioAtual() || 'desconhecido';
    PropertiesService.getScriptProperties().setProperty(CONFIG_PROP_KEY, JSON.stringify(merged));
    registrarLogConfig(merged.atualizadoPor, 'Configuração atualizada');
    return { success: true, config: merged, mensagem: 'Configurações salvas com sucesso.' };
  });
}

function restaurarConfigPadraoCosep() {
  return executarRota('rpc-config-reset', () => {
    if (!usuarioPodeEditarConfig()) {
      return { success: false, mensagem: 'Você não tem permissão para alterar as configurações.' };
    }
    PropertiesService.getScriptProperties().deleteProperty(CONFIG_PROP_KEY);
    registrarLogConfig(emailUsuarioAtual() || 'desconhecido', 'Configuração restaurada para o padrão');
    return { success: true, config: obterConfig(), mensagem: 'Configurações restauradas para o padrão.' };
  });
}

function registrarLogConfig(usuario, acao) {
  try {
    const ss = abrirPlanilhaLeitura('principal');
    let sh = ss.getSheetByName(CONFIG_LOG_SHEET);
    if (!sh) {
      sh = ss.insertSheet(CONFIG_LOG_SHEET);
      sh.appendRow(['Data/Hora', 'Usuário', 'Ação']);
    }
    sh.appendRow([Utilities.formatDate(new Date(), FUSO_HORARIO, 'dd/MM/yyyy HH:mm:ss'), usuario || '', acao || '']);
  } catch (erro) {
    registrarErro('config-log', erro);
  }
}

/* ============================================================
   ALERTAS PROATIVOS (somente leitura + e-mail nativo)
   Varre os dados, identifica setores abaixo da meta e
   notificações críticas sem resposta, e envia um e-mail.
   Pode rodar por gatilho de tempo (diário) ou sob demanda.
   Não escreve nada na base de notificações/caminhadas.
   ============================================================ */
const ALERTAS_TRIGGER_FN = 'executarAlertasCosep';

function escapeHtmlServer(valor) {
  return String(valor == null ? '' : valor)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function coletarNotificacoesCriticasPendentes(ss, cfg) {
  const sh = ss.getSheetByName(ABA_NOTIFICA);
  if (!sh) return [];
  const linhas = sh.getDataRange().getValues().slice(2);
  const setClass = new Set((cfg.classificacoesMeta5Dias || []).map(normalizarTexto));
  const hoje = new Date();
  const prazo = cfg.prazoMeta5Dias;
  const pendentes = [];

  linhas.forEach(row => {
    if (!setClass.has(normalizarTexto(row[8]))) return;
    const concluida = normalizarTexto(row[13]).indexOf('CONCLU') === 0;
    const dataResposta = converterEmData(row[16]);
    if (concluida || dataResposta) return;

    const dataRef = converterEmData(row[14]) || converterEmData(row[5]);
    const dias = dataRef ? calcularDiferencaDias(dataRef, hoje) : null;
    pendentes.push({
      numero: String(row[0] || '').trim(),
      setor: String(row[6] || '').trim() || 'Não informado',
      classificacao: String(row[8] || '').trim(),
      dias: dias,
      atrasada: dias != null && dias > prazo
    });
  });

  pendentes.sort((a, b) => (Number(b.atrasada) - Number(a.atrasada)) || ((b.dias || 0) - (a.dias || 0)));
  return pendentes.slice(0, 20);
}

function coletarResumoAlertas(ss, cfg) {
  const filtrosBase = getFiltros(ss);
  const cam = filtrosBase.caminhadas || {};
  const anos = cam.anos || [];
  const meses = cam.meses || [];
  const setores = cam.unidades || [];

  let conformidadeGeral = null;
  let setoresBaixos = [];
  let periodo = '';

  if (anos.length && meses.length && setores.length) {
    const ultimoAno = anos[anos.length - 1];
    const filtros = { anos: [ultimoAno], meses: meses.slice(), unidades: setores.slice() };
    const resultado = processarCaminhadas(ss, filtros, cfg);
    conformidadeGeral = resultado.conformidadeGeral;
    periodo = ultimoAno;
    const limite = cfg.alertas.conformidadeMinima;
    setoresBaixos = (resultado.rankingSetoresConformidade || [])
      .filter(s => s.avaliados > 0 && s.percentual < limite)
      .map(s => ({ setor: s.setor, percentual: s.percentual }));
  }

  const notificacoesPendentes = cfg.alertas.incluirNotificacoesCriticas
    ? coletarNotificacoesCriticasPendentes(ss, cfg)
    : [];

  return {
    periodo: periodo,
    conformidadeGeral: conformidadeGeral,
    conformidadeMinima: cfg.alertas.conformidadeMinima,
    setoresBaixos: setoresBaixos,
    notificacoesPendentes: notificacoesPendentes
  };
}

function montarEmailAlertas(resumo, cfg) {
  const temSetores = resumo.setoresBaixos.length > 0;
  const temNotif = resumo.notificacoesPendentes.length > 0;
  const conf = resumo.conformidadeGeral;

  let html = '<div style="font-family:Arial,Helvetica,sans-serif;color:#1f2a30;max-width:680px;margin:0 auto">';
  html += '<h2 style="color:#0f766e;margin:0 0 4px">Boletim COSEP — Alerta de Segurança do Paciente</h2>';
  html += '<p style="color:#5f6d75;margin:0 0 18px">Resumo automático' + (resumo.periodo ? ' · período ' + escapeHtmlServer(resumo.periodo) : '') + '</p>';

  if (conf != null) {
    const cor = conf >= resumo.conformidadeMinima ? '#1f8f5f' : '#c0392b';
    html += '<p style="font-size:15px">Conformidade geral: <strong style="color:' + cor + '">' + conf + '%</strong> (meta ' + resumo.conformidadeMinima + '%)</p>';
  }

  if (temSetores) {
    html += '<h3 style="color:#b7791f;margin:18px 0 8px">&#9888; Setores abaixo da meta (' + resumo.setoresBaixos.length + ')</h3><ul>';
    resumo.setoresBaixos.forEach(s => { html += '<li>' + escapeHtmlServer(s.setor) + ' — <strong>' + s.percentual + '%</strong></li>'; });
    html += '</ul>';
  }

  if (temNotif) {
    html += '<h3 style="color:#c0392b;margin:18px 0 8px">&#128308; Notificações críticas sem resposta (' + resumo.notificacoesPendentes.length + ')</h3><ul>';
    resumo.notificacoesPendentes.forEach(n => {
      const diasTxt = n.dias != null ? n.dias + ' dia(s)' : 'sem data';
      const flag = n.atrasada ? ' — <strong style="color:#c0392b">ATRASADA</strong>' : '';
      html += '<li>' + (n.numero ? '#' + escapeHtmlServer(n.numero) + ' · ' : '') + escapeHtmlServer(n.setor) + ' · ' + escapeHtmlServer(n.classificacao) + ' · ' + diasTxt + flag + '</li>';
    });
    html += '</ul>';
  }

  if (!temSetores && !temNotif) {
    html += '<p style="color:#1f8f5f;font-weight:bold">&#9989; Nenhum ponto crítico identificado neste período.</p>';
  }

  html += '<hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0">';
  html += '<p style="font-size:12px;color:#94a3b8">Enviado automaticamente pelo Boletim COSEP em ' + Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm") + '.</p></div>';

  const assunto = (temSetores || temNotif)
    ? '[COSEP] Alerta: '
        + (temSetores ? resumo.setoresBaixos.length + ' setor(es) abaixo da meta' : '')
        + (temSetores && temNotif ? ' e ' : '')
        + (temNotif ? resumo.notificacoesPendentes.length + ' notificação(ões) crítica(s)' : '')
    : '[COSEP] Resumo de segurança — sem pontos críticos';

  return { assunto: assunto, html: html };
}

function enviarAlertasCosep(opts) {
  opts = opts || {};
  const cfg = obterConfig();
  const emails = (cfg.alertas.destinatarios || []).filter(Boolean);
  if (!emails.length) return { success: false, mensagem: 'Nenhum destinatário configurado.' };

  return executarComPlanilha('principal', ss => {
    const resumo = coletarResumoAlertas(ss, cfg);
    const temAlgo = resumo.setoresBaixos.length > 0 || resumo.notificacoesPendentes.length > 0;
    if (opts.somenteSeHouver && !temAlgo) {
      return { success: true, enviado: false, mensagem: 'Sem pontos críticos; nenhum e-mail enviado.' };
    }
    const email = montarEmailAlertas(resumo, cfg);
    MailApp.sendEmail({ to: emails.join(','), subject: email.assunto, htmlBody: email.html });
    registrarLogConfig(opts.origem || 'sistema', 'Alerta enviado para ' + emails.length + ' destinatário(s)');
    return { success: true, enviado: true, mensagem: 'Alerta enviado para: ' + emails.join(', ') };
  });
}

function executarAlertasCosep() {
  const cfg = obterConfig();
  if (!cfg.alertas || !cfg.alertas.ativo) return;
  try {
    enviarAlertasCosep({ somenteSeHouver: true, origem: 'gatilho' });
  } catch (erro) {
    registrarErro('alertas-gatilho', erro);
  }
}

function gatilhoAlertasInstalado() {
  try {
    return ScriptApp.getProjectTriggers().some(t => t.getHandlerFunction() === ALERTAS_TRIGGER_FN);
  } catch (erro) {
    return false;
  }
}

function statusAlertasCosep() {
  return executarRota('rpc-alertas-status', () => ({
    success: true,
    gatilhoInstalado: gatilhoAlertasInstalado(),
    quotaEmailRestante: (function () { try { return MailApp.getRemainingDailyQuota(); } catch (e) { return null; } })()
  }));
}

function instalarGatilhoAlertasCosep() {
  return executarRota('rpc-alertas-instalar', () => {
    if (!usuarioPodeEditarConfig()) return { success: false, mensagem: 'Você não tem permissão.' };
    const hora = obterConfig().alertas.horaEnvio;
    const horaValida = (!Number.isNaN(Number(hora)) && hora >= 0 && hora <= 23) ? Math.round(hora) : 7;
    // Recria o gatilho para refletir a hora configurada.
    ScriptApp.getProjectTriggers().forEach(t => {
      if (t.getHandlerFunction() === ALERTAS_TRIGGER_FN) ScriptApp.deleteTrigger(t);
    });
    ScriptApp.newTrigger(ALERTAS_TRIGGER_FN).timeBased().everyDays(1).atHour(horaValida).create();
    registrarLogConfig(emailUsuarioAtual() || 'desconhecido', 'Gatilho diário de alertas instalado (' + horaValida + 'h)');
    return { success: true, gatilhoInstalado: true, mensagem: 'Envio automático diário ativado (por volta das ' + horaValida + 'h).' };
  });
}

function removerGatilhoAlertasCosep() {
  return executarRota('rpc-alertas-remover', () => {
    if (!usuarioPodeEditarConfig()) return { success: false, mensagem: 'Você não tem permissão.' };
    ScriptApp.getProjectTriggers().forEach(t => {
      if (t.getHandlerFunction() === ALERTAS_TRIGGER_FN) ScriptApp.deleteTrigger(t);
    });
    registrarLogConfig(emailUsuarioAtual() || 'desconhecido', 'Gatilho diário de alertas removido');
    return { success: true, gatilhoInstalado: false, mensagem: 'Envio automático desativado.' };
  });
}

function enviarAlertaTesteCosep() {
  return executarRota('rpc-alertas-teste', () => {
    if (!usuarioPodeEditarConfig()) return { success: false, mensagem: 'Você não tem permissão.' };
    return enviarAlertasCosep({ somenteSeHouver: false, origem: emailUsuarioAtual() || 'teste' });
  });
}

function doGet(e) {
  const params = (e && e.parameter) || {};

  if (params.api === '1') {
    return responderJson(executarRota('api-boletim', () => {
      return executarComPlanilha('principal', ss => montarPayload(ss, extrairFiltros(params)));
    }));
  }

  if (params.api === 'filtros') {
    return responderJson(executarRota('api-boletim-filtros', () => {
      return executarComPlanilha('principal', ss => montarPayloadFiltros(ss));
    }));
  }


  if (params.api === 'config') {
    return responderJson(obterConfigCosep());
  }

  try {
    const telaInicial = 'boletim';
    const titulo = 'Boletim COSEP';

    const template = HtmlService.createTemplateFromFile('Index');
    template.appUrl = ScriptApp.getService().getUrl();
    template.currentPage = telaInicial;

    return template
      .evaluate()
      .setTitle(titulo)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (erro) {
    registrarErro('html-route', erro);
    return HtmlService
      .createHtmlOutput('<!doctype html><meta charset="utf-8"><title>Erro</title><body style="font-family:Inter,Arial,sans-serif;padding:32px;background:#f8fafc;color:#0f172a"><h1>Não foi possível abrir o aplicativo.</h1><p>Tente novamente em instantes ou acione o administrador.</p></body>')
      .setTitle('Erro ao abrir aplicativo');
  }
}

function responderJson(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function executarRota(nomeRota, callback) {
  try {
    return callback();
  } catch (erro) {
    registrarErro(nomeRota, erro);
    return montarPayloadErro('Não foi possível carregar os dados agora.', nomeRota, erro);
  }
}

function montarPayloadErro(mensagem, origem, erro) {
  return {
    success: false,
    origem: origem || 'apps-script',
    mensagem: mensagem || 'Falha inesperada no Apps Script.',
    detalhe: erro && erro.message ? erro.message : String(erro || ''),
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm")
  };
}

function registrarErro(origem, erro) {
  const detalhe = erro && erro.stack ? erro.stack : (erro && erro.message ? erro.message : String(erro || 'Erro desconhecido'));
  console.error(`[${origem}] ${detalhe}`);
}

function abrirPlanilhaLeitura(chavePlanilha) {
  const id = PLANILHAS[chavePlanilha];
  if (!id) {
    throw new Error(`Planilha não parametrizada para a chave "${chavePlanilha}".`);
  }

  try {
    return SpreadsheetApp.openById(id);
  } catch (erro) {
    throw new Error(`Falha ao abrir a planilha "${chavePlanilha}" para leitura: ${erro.message || erro}`);
  }
}

function executarComPlanilha(chavePlanilha, callback) {
  const ss = abrirPlanilhaLeitura(chavePlanilha);
  return callback(ss);
}

function extrairFiltros(params) {
  const bruto = params || {};
  return {
    caminhadas: {
      anos: extrairListaFiltros(bruto.anosCosep || bruto.anoCosep || bruto.ano || '', normalizarAno),
      meses: extrairListaFiltros(bruto.mesesCosep || bruto.mesCosep || bruto.mes || '', normalizarMes),
      unidades: extrairListaFiltros(bruto.unidadesCosep || bruto.unidadeCosep || bruto.unidade || '', value => String(value || '').trim())
    },
    notificacoes: {
      anos: extrairListaFiltros(bruto.anosNotifica || bruto.anoNotifica || bruto.ano || '', normalizarAno),
      meses: extrairListaFiltros(bruto.mesesNotifica || bruto.mesNotifica || bruto.mes || '', normalizarMes),
      unidades: extrairListaFiltros(bruto.unidadesNotifica || bruto.unidadeNotifica || bruto.unidade || '', value => String(value || '').trim())
    }
  };
}

function extrairListaFiltros(rawValue, normalizerFn) {
  const brutoLista = Array.isArray(rawValue) ? rawValue : String(rawValue || '').split(/[|,]/);

  const valores = brutoLista
    .map(item => String(item || '').trim())
    .filter(Boolean)
    .map(item => normalizerFn ? normalizerFn(item) : item)
    .filter(Boolean);

  return [...new Set(valores)];
}

function montarPayloadFiltros(ss) {
  return {
    success: true,
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm"),
    filtros: getFiltros(ss)
  };
}

function montarPayload(ss, filtros) {
  const filtrosAplicados = filtros || { caminhadas: {}, notificacoes: {} };
  const cfg = obterConfig();
  return {
    success: true,
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm"),
    filtros: getFiltros(ss),
    aplicado: filtrosAplicados,
    config: { metaInstitucional: cfg.metaInstitucional, atualizadoEm: cfg.atualizadoEm },
    caminhadas: processarCaminhadas(ss, filtrosAplicados.caminhadas || {}, cfg),
    notificacoes: processarNotificacoes(ss, filtrosAplicados.notificacoes || {}, cfg)
  };
}

function obterFiltrosBoletim() {
  return executarRota('rpc-boletim-filtros', () => {
    return executarComPlanilha('principal', ss => montarPayloadFiltros(ss));
  });
}

function obterPayload(filtros) {
  return executarRota('rpc-boletim', () => {
    return executarComPlanilha('principal', ss => montarPayload(ss, extrairFiltros(filtros || {})));
  });
}

function normalizarTexto(valor) {
  return String(valor == null ? '' : valor)
    .trim()
    .replace(/\s+/g, ' ')
    .toUpperCase();
}

function normalizarCabecalho(valor) {
  return normalizarTexto(valor)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim();
}

function colunaParaLetra(indiceZeroBased) {
  let numero = Number(indiceZeroBased) + 1;
  let letra = '';

  while (numero > 0) {
    const resto = (numero - 1) % 26;
    letra = String.fromCharCode(65 + resto) + letra;
    numero = Math.floor((numero - 1) / 26);
  }

  return letra;
}

function normalizarMes(valor) {
  const texto = normalizarTexto(valor);
  if (!texto) return '';

  if (ORDEM_MESES[texto]) {
    return MESES_CANONICOS[ORDEM_MESES[texto]];
  }

  const numero = Number(texto);
  if (!Number.isNaN(numero) && numero >= 1 && numero <= 12) {
    return MESES_CANONICOS[numero];
  }

  const base = String(valor == null ? '' : valor).trim().toLowerCase();
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : '';
}

function normalizarAno(valor) {
  return String(valor == null ? '' : valor).trim();
}

function mesParaOrdem(valor) {
  const texto = normalizarTexto(valor);
  if (!texto) return 99;
  if (ORDEM_MESES[texto]) return ORDEM_MESES[texto];

  const numero = Number(texto);
  if (!Number.isNaN(numero) && numero >= 1 && numero <= 12) return numero;
  return 99;
}

function ordenarMeses(a, b) {
  const ordemA = mesParaOrdem(a);
  const ordemB = mesParaOrdem(b);
  if (ordemA !== ordemB) return ordemA - ordemB;
  return String(a).localeCompare(String(b), 'pt-BR');
}

function ehSim(valor) {
  const v = normalizarTexto(valor);
  return ['SIM', 'S', 'CONFORME', 'OK', 'ADEQUADO'].includes(v);
}

function ehNao(valor) {
  const v = normalizarTexto(valor);
  return ['NÃO', 'NAO', 'N', 'INCONFORME', 'INADEQUADO', 'NÃO CONFORME', 'NAO CONFORME'].includes(v);
}

function incrementarMapa(mapa, chave) {
  const valor = String(chave == null ? '' : chave).trim() || 'Não informado';
  mapa[valor] = (mapa[valor] || 0) + 1;
}

function getUnidade(row) {
  const indices = [4, 68, 69, 70, 71, 72, 73, 74, 75, 76];
  for (let i = 0; i < indices.length; i++) {
    const valor = String(row[indices[i]] == null ? '' : row[indices[i]]).trim();
    if (valor) return valor;
  }
  return 'Não informado';
}

function coletarFiltros(dados, config) {
  const anos = {};
  const meses = {};
  const unidades = {};

  dados.forEach(row => {
    const ano = normalizarAno(row[config.anoIdx]);
    const mes = normalizarMes(row[config.mesIdx]);
    const unidade = config.unidadeFn(row);

    if (ano) anos[ano] = true;
    if (mes) meses[mes] = true;
    if (unidade) unidades[unidade] = true;
  });

  return {
    anos: Object.keys(anos).sort((a, b) => Number(a) - Number(b) || a.localeCompare(b, 'pt-BR')),
    meses: Object.keys(meses).sort(ordenarMeses),
    unidades: Object.keys(unidades).sort((a, b) => a.localeCompare(b, 'pt-BR'))
  };
}

function getFiltros(ss) {
  const cache = CacheService.getScriptCache();
  const cached = cache.get(CACHE_FILTROS_BOLETIM_KEY);

  if (cached) {
    try {
      const filtrosCache = JSON.parse(cached);
      if (filtrosCache && filtrosCache.caminhadas && filtrosCache.notificacoes) {
        return filtrosCache;
      }
    } catch (erro) {
      registrarErro('cache-filtros-boletim-parse', erro);
    }
  }

  const filtros = montarFiltrosOtimizados(ss);

  try {
    cache.put(CACHE_FILTROS_BOLETIM_KEY, JSON.stringify(filtros), CACHE_FILTROS_BOLETIM_TTL);
  } catch (erro) {
    registrarErro('cache-filtros-boletim-put', erro);
  }

  return filtros;
}

function montarFiltrosOtimizados(ss) {
  const shCaminhadas = ss.getSheetByName(ABA_CAMINHADAS);
  const shNotifica = ss.getSheetByName(ABA_NOTIFICA);

  if (!shCaminhadas) {
    throw new Error(`Aba obrigatória não encontrada: ${ABA_CAMINHADAS}`);
  }
  if (!shNotifica) {
    throw new Error(`Aba obrigatória não encontrada: ${ABA_NOTIFICA}`);
  }

  return {
    caminhadas: coletarFiltrosCaminhadasRapido(shCaminhadas),
    notificacoes: coletarFiltrosNotificacoesRapido(shNotifica)
  };
}

function montarResultadoFiltros(anos, meses, unidades) {
  return {
    anos: Object.keys(anos).sort((a, b) => Number(a) - Number(b) || a.localeCompare(b, 'pt-BR')),
    meses: Object.keys(meses).sort(ordenarMeses),
    unidades: Object.keys(unidades).sort((a, b) => a.localeCompare(b, 'pt-BR'))
  };
}

function marcarFiltro(mapa, valor) {
  const texto = String(valor == null ? '' : valor).trim();
  if (texto) mapa[texto] = true;
}

function getUnidadeCaminhadasPorBlocos(base, setoresExtras) {
  const candidatos = [base && base[2]].concat(setoresExtras || []);
  for (let i = 0; i < candidatos.length; i++) {
    const valor = String(candidatos[i] == null ? '' : candidatos[i]).trim();
    if (valor) return valor;
  }
  return 'Não informado';
}

function coletarFiltrosCaminhadasRapido(sh) {
  const numRows = Math.max(sh.getLastRow() - 1, 0);
  const anos = {};
  const meses = {};
  const unidades = {};

  if (!numRows) return montarResultadoFiltros(anos, meses, unidades);

  const periodoEUnidade = sh.getRange(2, 3, numRows, 3).getValues();
  const unidadesExtras = sh.getRange(2, 69, numRows, 9).getValues();

  periodoEUnidade.forEach((row, index) => {
    marcarFiltro(anos, normalizarAno(row[1]));
    marcarFiltro(meses, normalizarMes(row[0]));
    marcarFiltro(unidades, getUnidadeCaminhadasPorBlocos(row, unidadesExtras[index]));
  });

  return montarResultadoFiltros(anos, meses, unidades);
}

function coletarFiltrosNotificacoesRapido(sh) {
  const numRows = Math.max(sh.getLastRow() - 2, 0);
  const anos = {};
  const meses = {};
  const unidades = {};

  if (!numRows) return montarResultadoFiltros(anos, meses, unidades);

  const dados = sh.getRange(3, 3, numRows, 5).getValues();

  dados.forEach(row => {
    marcarFiltro(anos, normalizarAno(row[1]));
    marcarFiltro(meses, normalizarMes(row[0]));
    marcarFiltro(unidades, String(row[4] || '').trim() || 'Não informado');
  });

  return montarResultadoFiltros(anos, meses, unidades);
}


function ehMesmoSetor(nomeSetor, referencia) {
  return normalizarTexto(nomeSetor) === normalizarTexto(referencia);
}

/* Resolve a meta-alvo (%) para um contexto, escolhendo a regra ativa mais
   específica de cfg.metasAlvo. Precedência: setor > meta/indicador > mês > ano.
   Sem regra aplicável, devolve a meta institucional global (cfg.metaInstitucional). */
function resolverMeta(contexto, cfg) {
  cfg = cfg || obterConfig();
  const padrao = Number(cfg.metaInstitucional);
  const regras = Array.isArray(cfg.metasAlvo) ? cfg.metasAlvo : [];
  contexto = contexto || {};

  const ctxAno = (contexto.ano != null && String(contexto.ano).trim()) ? normalizarAno(contexto.ano) : null;
  let ctxMes = null;
  if (contexto.mes != null && String(contexto.mes).trim()) {
    const ordem = mesParaOrdem(contexto.mes);
    ctxMes = (ordem >= 1 && ordem <= 12) ? ordem : null;
  }
  const ctxMeta = (contexto.metaCodigo != null && String(contexto.metaCodigo).trim()) ? String(contexto.metaCodigo).trim() : null;
  const ctxSetor = (contexto.setor != null && String(contexto.setor).trim()) ? String(contexto.setor).trim() : null;

  const PESOS = { setor: 8, metaCodigo: 4, mes: 2, ano: 1 };
  let melhor = null;
  let melhorPeso = -1;

  regras.forEach(regra => {
    if (!regra || regra.ativa === false) return;
    let peso = 0;

    if (regra.ano != null) {
      if (ctxAno == null || normalizarAno(regra.ano) !== ctxAno) return;
      peso += PESOS.ano;
    }
    if (regra.mes != null) {
      if (ctxMes == null || Math.round(Number(regra.mes)) !== ctxMes) return;
      peso += PESOS.mes;
    }
    if (regra.metaCodigo != null) {
      if (ctxMeta == null || String(regra.metaCodigo).trim() !== ctxMeta) return;
      peso += PESOS.metaCodigo;
    }
    if (regra.setor != null) {
      if (ctxSetor == null || !ehMesmoSetor(regra.setor, ctxSetor)) return;
      peso += PESOS.setor;
    }

    if (peso > melhorPeso) {
      melhorPeso = peso;
      melhor = regra;
    }
  });

  return melhor ? Number(melhor.valor) : padrao;
}

/* Regras padrão de exceção de setor (replicam o comportamento histórico).
   Usadas como fallback quando nada foi configurado na tela de Administração,
   garantindo zero regressão. Cada regra: ao selecionar `setorOrigem`, o cálculo
   da meta `metaCodigo` passa a considerar os `setoresPuxados`. Se `bidirecional`,
   selecionar qualquer um dos puxados também puxa o setor de origem. */
const EXCECOES_SETORES_PADRAO = [
  {
    metaCodigo: '4',
    setorOrigem: 'B2 - Centro Cirúrgico',
    setoresPuxados: [
      'A6 - Clínica Cirúrgica (Geral/Digestiva)',
      'B5 - Clínica Cirúrgica Oncológica',
      'B6 - Cabeça e Pescoço',
      'B6 - Urologia',
      'C7 - Clínica Ortopédica'
    ],
    bidirecional: false,
    ativa: true
  },
  {
    metaCodigo: '4',
    setorOrigem: 'B6 - Clínica Cirúrgica Vascular',
    setoresPuxados: ['Hemodinâmica'],
    bidirecional: true,
    ativa: true
  },
  {
    metaCodigo: '4',
    setorOrigem: 'C3 - Centro Cirúrgico Obstétrico',
    setoresPuxados: ['C6 - Clínica Ginecológica', 'C6 - Clínica Obstétrica'],
    bidirecional: false,
    ativa: true
  }
];

function regrasExcecaoConfiguradas(cfg) {
  const regras = (cfg && Array.isArray(cfg.excecoesSetores)) ? cfg.excecoesSetores : EXCECOES_SETORES_PADRAO;
  return regras.filter(regra => regra && regra.ativa !== false);
}

function montarSetoresExcecao(setoresSelecionados, metaCodigo, cfg) {
  const regras = regrasExcecaoConfiguradas(cfg)
    .filter(regra => String(regra.metaCodigo) === String(metaCodigo));
  const setoresExcecao = [];

  regras.forEach(regra => {
    const origem = regra.setorOrigem;
    const puxados = Array.isArray(regra.setoresPuxados) ? regra.setoresPuxados : [];
    if (!origem || !puxados.length) return;

    // Sentido direto: setor de origem selecionado → puxa os demais.
    if (setoresSelecionados.some(setor => ehMesmoSetor(setor, origem))) {
      puxados.forEach(setor => setoresExcecao.push(setor));
    }

    // Sentido inverso (regra bidirecional): algum puxado selecionado → puxa a origem.
    if (regra.bidirecional &&
        puxados.some(puxado => setoresSelecionados.some(setor => ehMesmoSetor(setor, puxado)))) {
      setoresExcecao.push(origem);
    }
  });

  const mapaSetores = {};
  setoresExcecao.forEach(setor => {
    if (setor) mapaSetores[normalizarTexto(setor)] = setor;
  });

  return mapaSetores;
}

function aplicarExcecaoMetas(metas, linhas, filtros, metaDefs, cfg) {
  metaDefs = metaDefs || METAS_CAMINHADAS;
  cfg = cfg || obterConfig();
  const setoresSelecionados = (filtros.unidades || []).map(item => String(item || '').trim()).filter(Boolean);

  // Códigos de meta que possuem ao menos uma regra de exceção ativa.
  const codigosComRegra = [];
  regrasExcecaoConfiguradas(cfg).forEach(regra => {
    const codigo = String(regra.metaCodigo);
    if (codigo && codigosComRegra.indexOf(codigo) === -1) codigosComRegra.push(codigo);
  });
  if (!codigosComRegra.length) return;

  const anoFiltro = new Set((filtros.anos || []).map(normalizarAno).filter(Boolean));
  const mesFiltro = new Set((filtros.meses || []).map(normalizarMes).filter(Boolean));

  codigosComRegra.forEach(metaCodigo => {
    const setoresExcecao = montarSetoresExcecao(setoresSelecionados, metaCodigo, cfg);
    const chavesSetoresExcecao = Object.keys(setoresExcecao);
    if (!chavesSetoresExcecao.length) return;

    const meta = metas.find(m => String(m.codigo) === metaCodigo);
    if (!meta) return;

    const metaDef = metaDefs.find(md => String(md.codigo) === metaCodigo);
    if (!metaDef) return;

    meta.avaliados = 0;
    meta.conformes = 0;
    meta.naoConformes = 0;
    meta.itens.forEach(item => {
      item.avaliados = 0;
      item.conformes = 0;
      item.naoConformes = 0;
    });

    linhas
      .filter(row => !anoFiltro.size || anoFiltro.has(normalizarAno(row[3])))
      .filter(row => !mesFiltro.size || mesFiltro.has(normalizarMes(row[2])))
      .filter(row => chavesSetoresExcecao.includes(normalizarTexto(getUnidade(row))))
      .forEach(row => {
        metaDef.itens.forEach((itemDef, itemIndex) => {
          const valor = row[itemDef.idx];
          const item = meta.itens[itemIndex];

          if (ehSim(valor)) {
            item.conformes++;
            item.avaliados++;
            meta.conformes++;
            meta.avaliados++;
          } else if (ehNao(valor)) {
            item.naoConformes++;
            item.avaliados++;
            meta.naoConformes++;
            meta.avaliados++;
          }
        });
      });

    meta.percentual = meta.avaliados ? Number(((meta.conformes / meta.avaliados) * 100).toFixed(1)) : null;
    meta.itens.forEach(item => {
      item.percentual = item.avaliados ? Number(((item.conformes / item.avaliados) * 100).toFixed(1)) : null;
    });
  });
}

function processarCaminhadas(ss, filtros, cfg) {
  cfg = cfg || obterConfig();
  const META_DEF = (cfg.metasCaminhadas || METAS_CAMINHADAS).filter(meta => meta && meta.ativa !== false);

  const sh = ss.getSheetByName(ABA_CAMINHADAS);
  const linhas = sh.getDataRange().getValues().slice(1);

  const metas = META_DEF.map(meta => ({
    codigo: meta.codigo,
    nome: meta.nome,
    avaliados: 0,
    conformes: 0,
    naoConformes: 0,
    percentual: 0,
    totalObservacoes: 0,
    observacoes: [],
    itens: meta.itens.map(item => ({
      codigo: item.codigo,
      nome: item.nome,
      avaliados: 0,
      conformes: 0,
      naoConformes: 0,
      percentual: 0
    }))
  }));

  const porUnidade = {};
  const observacoesGerais = [];
  const avaliadores = {};
  const metasAcionadas = {};

  let totalAvaliacoes = 0;
  let geralConformes = 0;
  let geralNaoConformes = 0;
  let totalComObservacao = 0;
  let totalComFoto = 0;

  const anosFiltro = new Set((filtros.anos || []).map(normalizarAno).filter(Boolean));
  const mesesFiltro = new Set((filtros.meses || []).map(normalizarMes).filter(Boolean));
  const unidadesFiltro = new Set((filtros.unidades || []).map(item => String(item || '').trim()).filter(Boolean));

  // Contexto de período para resolver metas por ano/mês. Só é específico quando
  // um único ano/mês está selecionado; caso contrário usa a meta global.
  const anoContexto = anosFiltro.size === 1 ? Array.from(anosFiltro)[0] : null;
  const mesContexto = mesesFiltro.size === 1 ? Array.from(mesesFiltro)[0] : null;
  const metaInstitucionalResolvida = resolverMeta({ ano: anoContexto, mes: mesContexto }, cfg);

  const linhasFiltradas = linhas.filter(row => {
    const ano = normalizarAno(row[3]);
    const mes = normalizarMes(row[2]);
    const unidade = getUnidade(row);

    if (!anosFiltro.size || !mesesFiltro.size || !unidadesFiltro.size) return false;
    if (!anosFiltro.has(ano)) return false;
    if (!mesesFiltro.has(mes)) return false;
    if (!unidadesFiltro.has(unidade)) return false;
    return true;
  });

  totalAvaliacoes = linhasFiltradas.length;

  linhasFiltradas.forEach(row => {
    const unidade = getUnidade(row);
    const observacaoGeral = String(row[59] || '').trim();
    const temFoto = String(row[58] || '').trim();
    const avaliador = String(row[9] || '').trim();
    const metaPrincipal = String(row[13] || '').trim();

    incrementarMapa(porUnidade, unidade);
    if (avaliador) avaliadores[avaliador] = true;
    if (metaPrincipal) metasAcionadas[metaPrincipal] = true;
    if (temFoto) totalComFoto++;

    if (observacaoGeral) {
      totalComObservacao++;
      observacoesGerais.push({ unidade: unidade, texto: observacaoGeral });
    }

    META_DEF.forEach((metaDef, metaIndex) => {
      metaDef.itens.forEach((itemDef, itemIndex) => {
        const valor = row[itemDef.idx];
        const item = metas[metaIndex].itens[itemIndex];

        if (ehSim(valor)) {
          item.conformes++;
          item.avaliados++;
          metas[metaIndex].conformes++;
          metas[metaIndex].avaliados++;
          geralConformes++;
        } else if (ehNao(valor)) {
          item.naoConformes++;
          item.avaliados++;
          metas[metaIndex].naoConformes++;
          metas[metaIndex].avaliados++;
          geralNaoConformes++;
        }
      });

      const observacaoMeta = String(row[metaDef.observacaoIdx] || '').trim();
      if (observacaoMeta) {
        metas[metaIndex].totalObservacoes++;
        metas[metaIndex].observacoes.push({ unidade: unidade, texto: observacaoMeta });
      }
    });
  });

  metas.forEach(meta => {
    meta.percentual = meta.avaliados ? Number(((meta.conformes / meta.avaliados) * 100).toFixed(1)) : null;
    meta.itens.forEach(item => {
      item.percentual = item.avaliados ? Number(((item.conformes / item.avaliados) * 100).toFixed(1)) : null;
    });
    meta.observacoes = meta.observacoes.slice(0, 3);
  });

  const totalAvaliado = geralConformes + geralNaoConformes;
  const conformidadeGeral = totalAvaliado ? Number(((geralConformes / totalAvaliado) * 100).toFixed(1)) : 0;

  const mesLimiteEvolucao = mesesFiltro.size
    ? Math.max(...Array.from(mesesFiltro).map(mesParaOrdem))
    : null;

  const evolucaoMensalMap = {};
  linhas
    .filter(row => !anosFiltro.size || anosFiltro.has(normalizarAno(row[3])))
    .filter(row => !unidadesFiltro.size || unidadesFiltro.has(getUnidade(row)))
    .filter(row => {
      if (mesLimiteEvolucao == null) return true;
      const ordemMesLinha = mesParaOrdem(normalizarMes(row[2]));
      return ordemMesLinha <= mesLimiteEvolucao;
    })
    .forEach(row => {
      const mes = normalizarMes(row[2]) || 'Sem mês';
      if (!evolucaoMensalMap[mes]) {
        evolucaoMensalMap[mes] = { conformes: 0, naoConformes: 0 };
      }

      META_DEF.forEach(meta => {
        meta.itens.forEach(item => {
          const valor = row[item.idx];
          if (ehSim(valor)) evolucaoMensalMap[mes].conformes++;
          else if (ehNao(valor)) evolucaoMensalMap[mes].naoConformes++;
        });
      });
    });

  const evolucaoMensal = Object.keys(evolucaoMensalMap)
    .sort(ordenarMeses)
    .map(mes => {
      const item = evolucaoMensalMap[mes];
      const total = item.conformes + item.naoConformes;
      return {
        mes: mes,
        percentual: total ? Number(((item.conformes / total) * 100).toFixed(1)) : 0
      };
    });

  const unidadesOrdenadas = Object.entries(porUnidade)
    .sort((a, b) => b[1] - a[1])
    .map(([nome, quantidade]) => ({ nome, quantidade }));

  aplicarExcecaoMetas(metas, linhas, filtros, META_DEF, cfg);

  // Meta-alvo resolvida por meta (considera período e regra por meta/indicador).
  metas.forEach(meta => {
    meta.metaAlvo = resolverMeta({ ano: anoContexto, mes: mesContexto, metaCodigo: meta.codigo }, cfg);
  });

  const metasCriticas = metas
    .slice()
    .sort((a, b) => a.percentual - b.percentual)
    .slice(0, 3)
    .map(meta => ({ codigo: meta.codigo, nome: meta.nome, percentual: meta.percentual, metaAlvo: meta.metaAlvo }));

  const rankingSetoresConformidade = Object.values(linhasFiltradas.reduce((acc, row) => {
    const unidade = getUnidade(row);
    if (!acc[unidade]) {
      acc[unidade] = {
        setor: unidade,
        conformes: 0,
        naoConformes: 0,
        avaliados: 0,
        percentual: 0
      };
    }

    META_DEF.forEach(meta => {
      meta.itens.forEach(item => {
        const valor = row[item.idx];
        if (ehSim(valor)) {
          acc[unidade].conformes++;
          acc[unidade].avaliados++;
        } else if (ehNao(valor)) {
          acc[unidade].naoConformes++;
          acc[unidade].avaliados++;
        }
      });
    });

    return acc;
  }, {}))
    .map(item => ({
      setor: item.setor,
      conformes: item.conformes,
      naoConformes: item.naoConformes,
      avaliados: item.avaliados,
      percentual: item.avaliados ? Number(((item.conformes / item.avaliados) * 100).toFixed(1)) : 0,
      metaAlvo: resolverMeta({ ano: anoContexto, mes: mesContexto, setor: item.setor }, cfg)
    }))
    .sort((a, b) => b.percentual - a.percentual || a.setor.localeCompare(b.setor, 'pt-BR'));

  const baseComparativaMelhorSetor = linhas
    .filter(row => !anosFiltro.size || anosFiltro.has(normalizarAno(row[3])))
    .filter(row => !mesesFiltro.size || mesesFiltro.has(normalizarMes(row[2])));

  const desempenhoSetorMeta = {};
  baseComparativaMelhorSetor.forEach(row => {
    const unidade = getUnidade(row);
    if (!desempenhoSetorMeta[unidade]) desempenhoSetorMeta[unidade] = {};

    META_DEF.forEach(metaDef => {
      if (!desempenhoSetorMeta[unidade][metaDef.nome]) {
        desempenhoSetorMeta[unidade][metaDef.nome] = { conformes: 0, avaliados: 0 };
      }
      metaDef.itens.forEach(itemDef => {
        const valor = row[itemDef.idx];
        if (ehSim(valor)) {
          desempenhoSetorMeta[unidade][metaDef.nome].conformes++;
          desempenhoSetorMeta[unidade][metaDef.nome].avaliados++;
        } else if (ehNao(valor)) {
          desempenhoSetorMeta[unidade][metaDef.nome].avaliados++;
        }
      });
    });
  });

  const melhoresSetoresPorMeta = {};
  META_DEF.forEach(metaDef => {
    const candidatos = Object.keys(desempenhoSetorMeta)
      .map(unidade => {
        const registro = desempenhoSetorMeta[unidade][metaDef.nome] || { conformes: 0, avaliados: 0 };
        const percentual = registro.avaliados ? Number(((registro.conformes / registro.avaliados) * 100).toFixed(1)) : null;
        return {
          setor: unidade,
          percentual: percentual,
          avaliados: registro.avaliados
        };
      })
      .filter(item => item.avaliados > 0 && item.percentual != null);

    if (!candidatos.length) {
      melhoresSetoresPorMeta[metaDef.nome] = { percentual: null, setores: [] };
      return;
    }

    const melhorPercentual = Math.max(...candidatos.map(item => item.percentual));
    melhoresSetoresPorMeta[metaDef.nome] = {
      percentual: melhorPercentual,
      setores: candidatos
        .filter(item => item.percentual === melhorPercentual)
        .map(item => item.setor)
        .sort((a, b) => a.localeCompare(b, 'pt-BR'))
    };
  });

  return {
    totalAvaliacoes: totalAvaliacoes,
    totalUnidades: unidadesOrdenadas.length,
    totalAvaliadores: Object.keys(avaliadores).length,
    totalComObservacao: totalComObservacao,
    totalComFoto: totalComFoto,
    metasSelecionadas: Object.keys(metasAcionadas).length,
    geralConformes: geralConformes,
    geralNaoConformes: geralNaoConformes,
    conformidadeGeral: conformidadeGeral,
    metaInstitucional: metaInstitucionalResolvida,
    diferencaMeta: Number((conformidadeGeral - metaInstitucionalResolvida).toFixed(1)),
    metas: metas,
    porUnidade: unidadesOrdenadas,
    rankingSetoresConformidade: rankingSetoresConformidade,
    melhoresSetoresPorMeta: melhoresSetoresPorMeta,
    evolucaoMensal: evolucaoMensal,
    metasCriticas: metasCriticas,
    observacoesGerais: observacoesGerais.slice(0, 5)
  };
}

function processarNotificacoes(ss, filtros, cfg) {
  cfg = cfg || obterConfig();
  const setClassCriticas = new Set((cfg.classificacoesMeta5Dias || CLASSIFICACOES_META_5_DIAS).map(normalizarTexto));

  const sh = ss.getSheetByName(ABA_NOTIFICA);
  const linhas = sh.getDataRange().getValues().slice(2);

  const desempenhoResposta = {
    meta5: criarResumoPrazoResposta(cfg.prazoMeta5Dias),
    meta10: criarResumoPrazoResposta(cfg.prazoMeta10Dias)
  };

  const anosFiltro = new Set((filtros.anos || []).map(normalizarAno).filter(Boolean));
  const mesesFiltro = new Set((filtros.meses || []).map(normalizarMes).filter(Boolean));
  const unidadesFiltro = new Set((filtros.unidades || []).map(item => String(item || '').trim()).filter(Boolean));

  const filtradas = linhas.filter(row => {
    const mes = normalizarMes(row[2]);
    const ano = normalizarAno(row[3]);
    const setor = String(row[6] || '').trim();

    if (!anosFiltro.size || !mesesFiltro.size || !unidadesFiltro.size) return false;
    if (!anosFiltro.has(ano)) return false;
    if (!mesesFiltro.has(mes)) return false;
    if (!unidadesFiltro.has(setor)) return false;
    return true;
  });

  const porTipo = {};
  const porSetor = {};
  const porNatureza = {};
  const porStatus = {};
  const porStatusResposta = {};

  let afetouSim = 0;
  let afetouNao = 0;
  let concluidas = 0;
  let pendentes = 0;

  filtradas.forEach(row => {
    const tipo = String(row[8] || '').trim() || 'Não informado';
    const setor = String(row[6] || '').trim() || 'Não informado';
    const natureza = String(row[10] || '').trim() || 'Não informado';
    const status = String(row[13] || '').trim() || 'Não informado';
    const statusResposta = String(row[15] || '').trim() || 'Não informado';
    const afetou = normalizarTexto(row[11]);

    incrementarMapa(porTipo, tipo);
    incrementarMapa(porSetor, setor);
    incrementarMapa(porNatureza, natureza);
    incrementarMapa(porStatus, status);
    incrementarMapa(porStatusResposta, statusResposta);

    const classificacao = normalizarTexto(row[8]);
    const dataClassificacao = converterEmData(row[14]);
    const dataResposta = converterEmData(row[16]);
    const diasResposta = calcularDiferencaDias(dataClassificacao, dataResposta);
    const grupoPrazo = setClassCriticas.has(classificacao) ? desempenhoResposta.meta5 : desempenhoResposta.meta10;

    atualizarResumoPrazoResposta(grupoPrazo, dataClassificacao, diasResposta);

    if (afetou === 'SIM') afetouSim++;
    else afetouNao++;

    if (normalizarTexto(status).indexOf('CONCLU') === 0) concluidas++;
    else pendentes++;
  });

  const tabela = filtradas.slice(0, 12).map(row => ({
    numeroNotivisa: row[0],
    link: row[1],
    mes: normalizarMes(row[2]),
    ano: row[3],
    codigo: row[4],
    dataOcorrencia: formatarData(row[5]),
    setorNotificado: row[6],
    localOcorrencia: row[7],
    tipoClassificacao: row[8],
    codInteracao: row[9],
    natureza: row[10],
    afetouPaciente: row[11],
    prontuario: row[12],
    status: row[13],
    dataClassificacao: formatarData(row[14]),
    statusResposta: row[15],
    dataResposta: formatarData(row[16]),
    dataConclusao: formatarData(row[17])
  }));

  return {
    total: filtradas.length,
    afetouSim: afetouSim,
    afetouNao: afetouNao,
    percentualAfetouPaciente: filtradas.length ? Number(((afetouSim / filtradas.length) * 100).toFixed(1)) : 0,
    concluidas: concluidas,
    pendentes: pendentes,
    totalSetores: Object.keys(porSetor).length,
    porTipo: ordenarMapaPorValor(porTipo),
    porSetor: ordenarMapaPorValor(porSetor),
    porNatureza: ordenarMapaPorValor(porNatureza),
    porStatus: ordenarMapaPorValor(porStatus),
    porStatusResposta: ordenarMapaPorValor(porStatusResposta),
    desempenhoResposta: {
      meta5: finalizarResumoPrazoResposta(desempenhoResposta.meta5),
      meta10: finalizarResumoPrazoResposta(desempenhoResposta.meta10)
    },
    tabela: tabela
  };
}

function criarResumoPrazoResposta(metaDias) {
  return {
    metaDias: metaDias,
    dentroPrazo: 0,
    foraPrazo: 0,
    totalComResposta: 0,
    somaDias: 0,
    mediaDias: 0
  };
}

function atualizarResumoPrazoResposta(resumo, dataClassificacao, diasResposta) {
  if (!resumo || !dataClassificacao) return;

  if (diasResposta == null) {
    return;
  }

  resumo.totalComResposta++;
  resumo.somaDias += diasResposta;

  if (diasResposta <= resumo.metaDias) resumo.dentroPrazo++;
  else resumo.foraPrazo++;
}

function finalizarResumoPrazoResposta(resumo) {
  const base = resumo || criarResumoPrazoResposta(0);
  const total = Number(base.totalComResposta || 0);
  return {
    metaDias: base.metaDias,
    dentroPrazo: Number(base.dentroPrazo || 0),
    foraPrazo: Number(base.foraPrazo || 0),
    totalComResposta: total,
    mediaDias: total ? Number((base.somaDias / total).toFixed(1)) : 0
  };
}

function ordenarMapaPorValor(mapa) {
  const ordenado = {};
  Object.keys(mapa)
    .sort((a, b) => mapa[b] - mapa[a] || a.localeCompare(b, 'pt-BR'))
    .forEach(chave => {
      ordenado[chave] = mapa[chave];
    });
  return ordenado;
}

function formatarData(valor) {
  if (!valor) return '';
  if (Object.prototype.toString.call(valor) === '[object Date]' && !Number.isNaN(valor.getTime())) {
    return Utilities.formatDate(valor, FUSO_HORARIO, 'dd/MM/yyyy');
  }
  return String(valor).trim();
}

function converterEmData(valor) {
  if (!valor) return null;

  if (Object.prototype.toString.call(valor) === '[object Date]' && !Number.isNaN(valor.getTime())) {
    return new Date(valor.getFullYear(), valor.getMonth(), valor.getDate());
  }

  const texto = String(valor).trim();
  if (!texto) return null;

  const partes = texto.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (partes) {
    return new Date(Number(partes[3]), Number(partes[2]) - 1, Number(partes[1]));
  }

  const data = new Date(texto);
  if (Number.isNaN(data.getTime())) return null;

  return new Date(data.getFullYear(), data.getMonth(), data.getDate());
}

function calcularDiferencaDias(dataInicial, dataFinal) {
  if (!dataInicial || !dataFinal) return null;

  const inicio = new Date(dataInicial.getFullYear(), dataInicial.getMonth(), dataInicial.getDate());
  const fim = new Date(dataFinal.getFullYear(), dataFinal.getMonth(), dataFinal.getDate());
  const diferenca = Math.round((fim.getTime() - inicio.getTime()) / 86400000);

  return diferenca < 0 ? 0 : diferenca;
}
