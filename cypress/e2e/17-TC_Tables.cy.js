describe('Demo Website Automation', () => { // arrow function , Test suites


beforeEach("Login",()=> { // it will run with every it block , so we can keep our shared steps in this block

cy.visit("https://demo.opencart.com/admin/index.php")
cy.get("#input-username").clear().type("demo")
cy.get("#input-password").clear().type("demo")
cy.get("button[type='submit']").click()
cy.url().should('contains','https://demo.opencart.com/admin/index.php?route') // assertion implicit
cy.get("#menu-customer").click()
cy.get("#collapse-5>li:first-child").click() //>li> we have different li so we choose first child as its the customer in the sub dropdown

})


// Calculate the total number of rows and column in a table
    it.only('Tables : Calculates Number of row and columns in a table', () => {  // Test Cases
        
     cy.url().should('contains','https://demo.opencart.com/admin/index.php?route=customer/customer&user_token=') // demo assertion


     //calculating no of rows in a table , Html knoeledge is must in this

     cy.get(".table.table-bordered.table-hover>tbody>tr").should("have.length",'10') 

     //calculating no of columns

     cy.get(".table.table-bordered.table-hover>thead>tr>td").should("have.length","6")

    })


// read the data from a specific row and column 


    it('Table - checking the data in specific row and column of a table ', () => {
         
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text","!121@gmail.com")

        cy.get("tbody tr:nth-child(8) td:nth-child(2)").contains("!@#$ !@#$") // contains is also a assertion


    })


// read all the data in a table
    it('Table - ', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr") //getting table
              .each(($row, index, $rows)=>{ //The each() method in Cypress allows us to iterate over a set of elements and perform actions or assertions on each element.
              cy.wrap($row).within(()=> { // wrap function will read text
              cy.get ("td").each(($col, index, $cols)=> { //same operation on columns
              cy. log ($col.text()); //all text
            })  
        })  
    })    
})
    

//pagination , video # 11
 


  })
