// import * from "../DataTesting/DataUser.json"

describe('Elements', () => {

  beforeEach, () => {
    //cy.visit('https://demoqa.com/')
    //cy.viewport(1920, 1080)
    //cy.wait(500)

    cy.fixture('../DataTesting/DataUser.json')
    .then(credentials =>{
        this.credentials = credentials;
        })
  }

  it('Accedemos a la la página y sección', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type('Ismael')
  })

  it('Rellenamos los campos', () => {
    cy.get('#userEmail').type('ismaelsanromansanchez@gmail.com')
    cy.get('#currentAddress').type('C/ Republica de Ecuador, 6, nº 3 Izda, 06011, Badajoz (Badajoz)')
    cy.get('#permanentAddress').type('C/ Molino de San Jerónimo, nº 23, bajo, 10140, Guadalupe (Cáceres)')
    cy.get('#submit').click()
  })

  it('Comprobamos los campos completados', () => {
    cy.get('#name').contains('Ismael')
    cy.get('#email').contains('ismaelsanromansanchez@gmail.com')
    cy.get('.border > #currentAddress').contains('C/ Republica de Ecuador, 6, nº 3 Izda, 06011, Badajoz (Badajoz)')
    cy.get('.border > #permanentAddress').contains('C/ Molino de San Jerónimo, nº 23, bajo, 10140, Guadalupe (Cáceres)')
  })
})