/// <reference types="Cypress" />

it('visit portal', () => {
  cy.visit('http://localhost:8080')
  cy.title().debug().should('to.equal', 'Portal do Contribuinte')
})

it('Should find and interact an "Consulta"', () => {
  cy.visit('http://localhost:8080')

  cy.get('.menu > [href="/consulta"]').click()
  cy.get('.menu > [href="/cadastro"]').click()

})