describe('Demo Website Automation', () => { // arrow function , Test suites

    it('search for shirts on the site using "CSS LOCATOR"', () => {  // Test Cases
        cy.visit('https://www.automationexercise.com/products') // cy.visit to launch and cy.url to capture url 
        cy.get("#search_product").type("tops") // to enter data , cy.get is always used with CSS locator 
        cy.get("[id='submit_search']").click() // used attribute
        cy.get(".title.text-center").contains("Searched Products") // used class by using .class
        //cy.title().should('eq','OrangeHRM')
    })

  })
