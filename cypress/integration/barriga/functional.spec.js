import loc from '../../support/locators'
import '../../support/commandsAccounts'

describe('Should test at afunctional level', () => {
  before(() => {
    cy.login('https://barrigareact.wcaquino.me/', '123456')
  })

  it('Should create an account', () => {
    cy.acessarMenuConta()
    cy.inserirConta('Conta Teste')
    cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
  })

  it('Should update an account', () => {
    cy.acessarMenuConta()
    cy.get(':nth-child(1) > :nth-child(2) > .fa-edit').click()
    cy.get(loc.CONTAS.NOME)
      .clear()
      .type('Conta Teste Alterada[2]')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
  })

  it('Should not create an account with same name', () => {
    cy.acessarMenuConta()
    cy.inserirConta('Conta Teste Alterada[2]')
    cy.get(loc.MESSAGE).should('contain', 'code 400')
  })

  it('Should create a transaction', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Descrição')
    cy.get(loc.MOVIMENTACAO.VALOR).type('123')
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Interessado')
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'Movimentação inserida com sucesso')

    cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
  })
})