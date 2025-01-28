describe("Demo Website Automation", () => {
  it('search for shirts on the site using "Xpath" ', () => {
    cy.visit("https://www.automationexercise.com/products?search=tops");
    cy.xpath('//*[@id="susbscribe_email"]').type("masa@23.com"); // for using xpath we have to write in command.js file
    cy.xpath('//*[@id="susbscribe_email"]').click;
    cy.xpath('//*[@id="susbscribe_email"]').type("2-2");

    //cy.title().should('eq','OrangeHRM')
  });
});
