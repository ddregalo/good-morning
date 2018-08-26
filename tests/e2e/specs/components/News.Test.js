describe("News Component", () => {
    it("Has a Section Title", () => {
      cy.visit("/");
      cy.contains("h3", "NEWS");
    });
  
    it('Displays news story titles as links to the full articles', () => {
      cy.visit("/");
      cy
        .get('a')
        .eq(0)
        .click()
    }); 
  });
  