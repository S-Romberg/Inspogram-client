/// <reference types="Cypress" />

context('forms', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/')
    })
  
    it('should go to autofilled form', () => {
        cy.get('.card').eq(0).click()
        cy.url().should('eq', 'http://localhost:3000/edit')
        cy.get('input').eq(0).should('have.text', '')
    })
    it('should take you to create form', () => {
        cy.get('.button').eq(3).click()
        cy.url().should('eq', 'http://localhost:3000/add')
    })

  })

context('content', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/')
    })
    it('should have pictures', () => {
        cy.get('.card-image').eq(0).find('img')
    })
    it('should have quote and author', () => {
        cy.get('.card-content').eq(0).find('ul').find('li').should('have.length', '2')
    })
})
  