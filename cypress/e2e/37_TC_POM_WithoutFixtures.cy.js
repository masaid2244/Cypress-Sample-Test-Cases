import login from "../PageObject/LoginPage"; // we imported the class that we made in the pom folder , here .. represents the same project 

// Test Suite
describe('Demo Website Automation', () => {



  // Test Case 1: 
  it('POM - Without Fixture ', () => { // hard coded data , no fixtures 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    
         
         const ln= new login(); // This creates an instance of the Login class and assigns it to the variable ln. This instance will be used to interact with the login functionality of the application


         ln.setUserName("Admin") // This line calls the setUser Name method on the ln instance, passing the string "Admin" as an argument.

         ln.setPassword("admin123")
         ln.ClickSubmitButton();
         ln.VerifyLogin().should('have.value','Dashboard')


  });

  
});
