import login from "../PageObject/LoginPage";

// Test Suite
describe('Demo Website Automation', () => {



  // Test Case 1: Single `it` block using fixture data
  it('POM - Without Fixture ', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    
         
         const ln= new login();


         ln.setUserName("Admin")
         ln.setPassword("admin123")
         ln.ClickSubmitButton();
        cy.url().should( 'contain', 'orangehrm')

           // ln.VerifyLogin();

    
 
  });

  
});
