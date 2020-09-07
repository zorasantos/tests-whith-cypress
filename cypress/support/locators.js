const locators = {
  LOGIN: {
    USER: '[data-test=email]',
    PASSWORD: '[data-test=passwd]',
    BTN_LOGIN: '.btn'
  },
  MENU: {
    SETTINGS: '[data-test=menu-settings]',
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
    MOVIMENTACAO: '[data-test=menu-movimentacao]'
  },
  CONTAS: {
    NOME: '[data-test=nome]',
    BTN_SALVAR: '.btn'
  },
  MOVIMENTACAO: {
    DESCRICAO: '[data-test=descricao]',
    VALOR: '[data-test=valor]',
    INTERESSADO: '[data-test=envolvido]',
    BTN_SALVAR: '.btn-primary'
  },
  EXTRATO: {
    LINHAS: '.list-group > li'
  },
  MESSAGE: '.toast-message'
}

export default locators;