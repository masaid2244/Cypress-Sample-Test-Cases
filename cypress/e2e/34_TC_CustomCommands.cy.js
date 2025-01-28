// custom comamnd : those command which we make by our own selves for easiness
// we write these command in the command.js of support folder
//const apiKey = Cypress.env('API_KEY');

describe('Demo Automation', () => {

  


    // using ClickLinkByLabel
    it('Custom Commands - Clicks the link with the given label', () => {
      cy.visit('https://www.wikipedia.org/'); // 
      cy.clickLinkByLabel('English'); 
      cy.get("#Welcome_to_Wikipedia").should("be.visible")
    });



    // using ClickLinkByLabel
    it('Custom Commands - Clicks the link with the given label', () => {


        cy.visit('https://the-internet.herokuapp.com/'); // 
        cy.clickLinkByLabel('Horizontal Slider'); 
        //cy.get("#Welcome_to_Wikipedia").should("be.visible")
      });


      it.skip('Custom Commands - Login', () => {


        cy.visit('https://the-internet.herokuapp.com/login'); // 
        cy.Login('tomsmith','SuperSecretPassword!');
        cy.url().contains("https://the-internet.herokuapp.com/secure")

    
        //cy.clickLinkByLabel(''); 
        //cy.get("#Welcome_to_Wikipedia").should("be.visible")
      }); 


    

  });
  