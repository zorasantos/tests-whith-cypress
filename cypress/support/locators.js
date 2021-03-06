const locators = {
  LOGIN: {
    USER: '[data-test=email]',
    PASSWORD: '[data-test=passwd]',
    BTN_LOGIN: '.btn'
  },
  MENU: {
    HOME: '[data-test=menu-home]',
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
    CONTA: '[data-test=conta]',
    VALOR: '[data-test=valor]',
    INTERESSADO: '[data-test=envolvido]',
    BTN_SALVAR: '.btn-primary',
    STATUS: '[data-test=status]'
  },
  EXTRATO: {
    LINHAS: '.list-group > li'
  },
  SALDO: {
    FN_XP_SALDO_CONTA: name => `//td[contains(., '${name}')]/../td[2]`
  },
  MESSAGE: '.toast-message'
}

export default locators;