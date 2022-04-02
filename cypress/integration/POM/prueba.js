describe('Elements', () => {
  it('Text Box TestCase', () => {
    cy.visit('https://demoqa.com/')
    cy.viewport(1920, 1080)
    cy.wait(500)

    cy.get('.category-cards > :nth-child(1) > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type('Ismael')
    cy.get('#userEmail').type('ismaelsanromansanchez@gmail.com')
    cy.get('#currentAddress').type('C/ Republica de Ecuador, 6, nº 3 Izda, 06011, Badajoz (Badajoz)')
    cy.get('#permanentAddress').type('C/ Molino de San Jerónimo, nº 23, bajo, 10140, Guadalupe (Cáceres)')
    cy.get('#submit').click()


  })
})