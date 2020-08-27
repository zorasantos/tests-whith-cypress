import loc from '../../support/locators'

describe('Should test at afunctional level', () => {
  before(() => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type('jmaria1612@gmail.com')
    cy.get(loc.LOGIN.PASSWORD).type('123456')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
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