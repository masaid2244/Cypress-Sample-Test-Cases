describe('Demo Automation', () => {


//describe('Demo Automation', () => {

    it.only('Calculate the total number of rows and columns in a table', () => {
        cy.visit("https://demo.opencart.com/admin/index.php"); // Launch URL
        cy.get("#input-username").clear().type("demo");
        cy.get("#input-password").clear().type("demo");
        cy.get("button[type='submit']").click();
        cy.url().should('include', 'https://demo.opencart.com/admin/index.php?route'); // Assertion

        cy.get("#menu-customer").click();
        cy.get("#collapse-5 > li:first-child").click();

        // Calculating the number of rows in a table
        cy.get(".table.table-bordered.table-hover > tbody > tr").should("have.length", 10);


        // Calculating the number of columns
        cy.get(".table.table-bordered.table-hover > thead > tr > td").should("have.length", 6);
    });
});



