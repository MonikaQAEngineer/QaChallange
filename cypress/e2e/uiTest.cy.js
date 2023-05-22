///reference types="Cypress"/>

describe('UI test', () => {
  const appUrl='http://localhost:3000/weather'
  beforeEach(()=>{
    cy.visit(appUrl)
  });
    it('Static elements', () => {
      cy.get('.title').should('have.text','Dashboard')
    });
    it('Verify Current Location', () => {
     cy.get('.columns > :first-child').contains('Oslo')
    });
    it('Verify add/remove new geographical location',()=>{
      cy.get('.mt-5 > a').click()
      cy.get('.container').children().its('length').should('eq',2)
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Bergen');
        cy.get(':nth-child(1) > :nth-child(3) > .button').click(); 
      });
      cy.get(':nth-child(3) > :nth-child(3)').should('have.text', 'Bergen');
      cy.get(':nth-child(1) > div > .delete').click();
      cy.get('.container').children().its('length').should('eq',2)
    });
    it('Verify user can switch units',()=>{
      cy.get('.mt-5 > a').click()
      cy.get('.buttons > :nth-child(1)').click()
      cy.get('.has-text-centered > a').click()
      cy.get(':nth-child(2) > [data-testid="weather-card"] > .card > .card-content > .content > .is-flex > [data-testid="weather-card-temperature"] > span').should('have.text','°C')
      cy.get('.mt-5 > a').click()
      cy.get('.buttons > :nth-child(2)').click()
      cy.get('.has-text-centered > a').click()
      cy.get(':nth-child(2) > [data-testid="weather-card"] > .card > .card-content > .content > .is-flex > [data-testid="weather-card-temperature"] > span').should('have.text','°F')
      cy.get('.mt-5 > a').click()       
    })
})



 