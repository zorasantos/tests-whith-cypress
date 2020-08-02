/// <reference types="Cypress" />

describe('Working with basic elements', () => {
  before(() => {
    cy.visit('http://localhost:8080')
  })

  // beforeEach(() => {
  //   cy.reload()
  // })

  it('Text', () => {
    cy.get('span').should('contain', 'CADASTRO')
    cy.get('.v-btn__content').should('contain', 'CADASTRO')
  })

  it('Link', () => {
    cy.get('.menu > [href="/consulta"]').click()
    cy.get('h1').should('contain', 'CONSULTAR DÍVIDA ATIVA')
  })

  it('TextField', () => {
    cy.get('.menu > [href="/cadastro"]').click()
    cy.get('#input-161')
      .type('testcypress@gmail.com')
      .should('have.value', 'testcypress@gmail.com')
    cy.get('#input-164')
      .type('testcypress@gmail.com')
      .should('have.value', 'testcypress@gmail.com')
  })

  it.only('RadioButton', () => {
    cy.get('.menu > [href="/cadastro"]').click()
    cy.get('.v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
      .click()
      // .should('be.checked')

    cy.get(':nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
      .should('not.be.checked')
  })
})