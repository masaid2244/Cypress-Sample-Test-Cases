describe('Demo Website Automation', () => { // arrow function , Test suites

    it('Radio Button ', () => {  // Test Cases
        cy.visit('https://testautomationpractice.blogspot.com/') // cy.visit to launch and cy.url to capture url 
        cy.get("input#name").type("Testing by Masaid")
        cy.get("#male").check().should('be.checked') // by using id , selecting is done by using "be.checked"
        cy.get("label[for='female']").should('not.be.checked') // negative test case
    })

  })
