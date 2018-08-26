// https://docs.cypress.io/api/introduction/api.html

describe("Weather Component", () => {
  it("Has a Section Title", () => {
    cy.visit("/");
    cy.contains("h3", "LOCAL WEATHER");
  });

  it('Displays the temperature in Brixton from an api call', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://api.openweathermap.org/' +
      'data/2.5/weather?q=Brixton,uk' + '&units=metric&APPID=' + Cypress.env("weatherAPIKey"),
      response: {main: {temp: 25}}
    })
    cy.visit("/");
    cy.get('h3').eq(1).contains('The temperature in Brixton right now is 25');
  }); 
});
