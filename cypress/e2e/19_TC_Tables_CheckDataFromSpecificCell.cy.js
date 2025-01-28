describe('Demo Automation', () => {


    //describe('Demo Automation', () => {
    
        it.only('Check data in a specific row ', () => {
            cy.visit("https://demo.opencart.com/admin/index.php"); // Launch URL
            cy.get("#input-username").clear().type("demo");
            cy.get("#input-password").clear().type("demo");
            cy.get("button[type='submit']").click();
          //  cy.url().should('include', 'https://demo.opencart.com/admin/index.php?route'); // Assertion
    
            cy.get("#menu-customer").click(); //customer 
            cy.get("#collapse-5 > li:first-child").click(); //sub menu of customer
    
           cy.get("tbody tr:nth-child(1) td:nth-child(3)").should("have.text","!121@gmail.com")

            cy.get("tbody tr:nth-child(8) td:nth-child(2)").contains("!@#$ !@#$") // contains is also a assertion
    
            cy.get('thead > tr > .d-none').contains("Date Added")

            cy.get("tbody tr:nth-child(5) td:nth-child(4)").contains("Default")

            cy.get('.asc').contains("Customer Name")


           
        });
    });
    
    
    
    