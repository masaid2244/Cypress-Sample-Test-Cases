describe('test Suite', () => { 

    it('Browser Navigation - ', () => { 
        // Add your test steps here for the first test case
        cy.visit("https://demo.opencart.com/") //home page
        cy.title().should('eq',"Your Store"); // asserting title of page


        cy.get("li:nth-child(7) a:nth-child(1)").click() //camera page
       cy.get("div[id='content'] h2").should("be.visible")


        cy.go('back'); //move to home page 
        cy.title().should('eq',"Your Store"); // asserting title of page

        cy.go("forward")
        cy.get("div[id='content'] h2").should("be.visible")

        // using -1 for back  and 1 for forward 

        cy.go(-1); //move to home page 
        cy.title().should('eq',"Your Store"); // asserting title of page

        cy.go(1)
        cy.get("div[id='content'] h2").should("be.visible")


        cy.wait(3000)
        cy.reload(); // for reloading or refreshing page 

    });


});