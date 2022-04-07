/// <reference types="Cypress"/>

describe('Elements', () => {

  beforeEach, () => {
    //cy.visit('https://demoqa.com/')
    //cy.wait(500)

    cy.fixture('../DataTesting/DataUser.json')
    .then(credentials =>{
        this.credentials = credentials;
        })
  }

  it('Accedemos a la la página y sección', () => {
    cy.visit('https://demoqa.com/')
    cy.wait(500)
    cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click
    cy.get('[data-layer="Content"]').click
  })

    it('Checkeamos que los "CheckBox" estén correctos', () => {
    cy.get('.rct-option-expand-all > .rct-icon').click()
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click
    cy.get('#result').contains('home')
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click
    cy.get('.rct-option-collapse-all > .rct-icon').click

  })
})