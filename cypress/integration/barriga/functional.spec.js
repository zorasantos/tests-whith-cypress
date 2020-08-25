describe('Should test at afunctional level', () => {
  before(() => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get('[data-test=email]').type('jmaria1612@gmail.com')
    cy.get('[data-test=passwd]').type('123456')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'Bem vindo')
  })

  it('Should create an account', () => {
    cy.get('[data-test=menu-settings]').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test=nome]').type('Conata Teste')
    cy.get('.btn > .far').click()
    cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
  })
})