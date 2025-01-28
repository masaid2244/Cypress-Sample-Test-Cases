describe('Demo Automation', () => {


    //describe('Demo Automation', () => {
    
        it.only('read all data ', () => {
            cy.visit("https://demo.opencart.com/admin/index.php"); // Launch URL
            cy.get("#input-username").clear().type("demo");
            cy.get("#input-password").clear().type("demo");
            cy.get("button[type='submit']").click();
            cy.url().should('include', 'https://demo.opencart.com/admin/index.php?route'); // Assertion
    
            cy.get("#menu-customer").click();
            cy.get("#collapse-5 > li:first-child").click();
    
          
            cy.get("table[class='table table-bordered table-hover']>tbody>tr") // This selects all the rows 
            .each(($row, index, $rows)=>{ //The each() method in Cypress allows us to iterate over a set of elements and perform actions or assertions on each element.
            // The .each() method allows Cypress to loop through each row that was selected.Inside this block, actions or assertions can be performed on each row
            cy.wrap($row).within(()=> { // cy.wrap() converts the current row ($row) into a Cypress object, enabling Cypress commands to interact with it.
            //.within() scopes all further actions to the current row. This ensures any actions (like finding elements or assertions) happen only within this row, not the entire document.
            cy.get ("td").each(($col, index, $cols)=> { //same operation on columns
            cy. log ($col.text()); //$col.text() gets the text content of the current cell.
          }) // cy.log() is used to log the content of the current cell ($col) to the Cypress Test Runner console.
      }) 






        });
    })

})
    
    
    
    