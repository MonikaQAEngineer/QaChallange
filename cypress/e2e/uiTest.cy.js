/reference types="Cypress"/>

describe('UI test', () => {
  const appUrl='http://localhost:3000/weather'
  beforeEach(()=>{
    cy.visit(appUrl)
  });
    it('Static elements', () => {
      cy.get('.title').should('have.text','Dashboard')
    });
    it('Verify Current Location', () => {
      //cy.get('.columns').children().its('length').should('eq',3)
      //cy.wait(5000);
      //cy.get(':nth-child(1) > [data-testid="weather-card"] > .card > .card-content > .content > .is-flex > [data-testid="weather-card-location"]').contains('Oslo')
      cy.get('.columns > :first-child').contains('Oslo')
     
    });
    it('Verify add/remove new geographical location',()=>{
      cy.get('.mt-5 > a').click()
      cy.get('.container').children().its('length').should('eq',2)
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Bergen');
        cy.get(':nth-child(1) > :nth-child(3) > .button').click();
        cy.get(':nth-child(3) > :nth-child(3)').should('have.text', 'Bergen');
    });
  });

    it('Verify use can switch units',()=>{
      cy.get('.mt-5 > a').click()
      cy.get('.buttons > :nth-child(1)').click()
      cy.get('.buttons > :nth-child(1)').should('have.text', 'Metric ✅')
      cy.get('.has-text-centered > a').click()
      cy.get(':nth-child(2) > [data-testid="weather-card"] > .card > .card-content > .content > .is-flex > [data-testid="weather-card-temperature"] > span').should('have.text','°C')
      cy.get('.mt-5 > a').click()
      cy.get('.buttons > :nth-child(2)').click()
      cy.get('.has-text-centered > a').click()
      cy.get(':nth-child(2) > [data-testid="weather-card"] > .card > .card-content > .content > .is-flex > [data-testid="weather-card-temperature"] > span').should('have.text','°F')
      cy.get('.mt-5 > a').click()
      
       // cy.get('.container > :nth-child(1) > :nth-child(3)').children().its('length').should('eq',4)
    })
})

// describe('UI Test Mock  ', () => {
//   beforeEach(() => {
//     cy.intercept('GET', 'https://api.openweathermap.org/geo/1.0/direct**', (req) => {
//       req.reply([
//         {
//           name: 'Bergen',
//           lat: 60.3913,
//           lon: 5.3221
//         }
//       ]);
//     });

//     cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather**', (req) => {
//       req.reply({
//         name: 'Bergen',
//         weather: [{ main: 'Clouds', description: 'Few clouds' }],
//         main: { temp: 20 },
//         sys: { sunrise: 1621421222, sunset: 1621476500 },
//         dt: 1621452000
//       });
//     });

//     cy.visit('http://localhost:3000/weather');  // Replace with the URL of your application
//   });

//   it('Mock location as Bergen and validate weather data', () => {
//     //cy.get('.columns > :first-child').contains('Bergen')
//     //cy.get('.columns > :first-child').click()
//     // cy.get('#location-input').type('Bergen');
//     // cy.get('#search-button').click();

//     // cy.get('#weather-name').should('have.text', 'Bergen');
//     // cy.get('#weather-description').should('have.text', 'Few clouds');
//     // cy.get('#weather-temperature').should('have.text', '18');
//     // cy.get('#weather-sunrise').should('have.text', '1621421222');
//     // cy.get('#weather-sunset').should('have.text', '1621476500');
//     // cy.get('#weather-time').should('have.text', '1621452000');
//   });
// });

 