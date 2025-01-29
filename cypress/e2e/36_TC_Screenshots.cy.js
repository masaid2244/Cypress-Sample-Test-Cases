describe('test Suite', () => { 

    it('Screenshots by manually  - ', () => { 
        // Add your test steps here for the first test case
        cy.visit("https://demoqa.com/") //home page
        cy.title().should('eq',"DEMOQA"); // asserting title of page

        cy.screenshot("homepage") //homepage is the file name of this screenshot which we can see in screenshot folder 


    });


    it.skip('Screenshots at failure - automatic  - ', () => { 
        // Add your test steps here for the first test case
        cy.visit("https://demoqa.com/") //home page
        cy.title().should('eq',"DEMOQA123"); // intentionally fail the test case for capturing screenshot and run the cypress by terminal using npx cypress run --spec cypress\e2e\36_TC_Screenshots.cy.js


    });



// for running any test case inside this Visual code , use this command : npx cypress run --spec + relative path of that test case 

});

// html reports can be generated through 4 steps

// 1) npm i -save-dev cypress-mochawesome-reporter
// 2) add reporter: 'cypress-mochawesome-reporter', in config.js before e2e and require( 'cypress-mochawesome-reporter/plugin') (on);
// 3) Add to cypress/support/e2e.js                            import 'cypress-mochawesome-reporter/register'
// 4) run using vs code