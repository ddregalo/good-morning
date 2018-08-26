// https://docs.cypress.io/api/introduction/api.html

describe("Weather Component", () => {
  it("Has a Section Title", () => {
    cy.visit("/");
    cy.contains("h3", "LOCAL WEATHER");
  });
});
