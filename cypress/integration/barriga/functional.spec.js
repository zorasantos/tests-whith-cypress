import loc from '../../support/locators'

describe('Should test at afunctional level', () => {
  before(() => {
    cy.login('https://barrigareact.wcaquino.me/', '123456')
  })

  it('Should create an account', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
    cy.get(loc.CONTAS.NOME).type('Conta Teste')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
  })
  it('Should update an account', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
    cy.get(':nth-child(1) > :nth-child(2) > .fa-edit').click()
    cy.get(loc.CONTAS.NOME)
      .clear()
      .type('Conta Teste Alterada[2]')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
  })
})