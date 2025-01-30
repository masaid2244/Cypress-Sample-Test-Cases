import login from "../PageObject/LoginPage"; // we imported the class that we made in the pom folder , here .. represents the same project 

// Test Suite
describe('Demo Website Automation', () => {



  // Test Case 1: 
  it('POM - With Fixture  - single test case', () => { // hard coded data , no fixtures 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    
    cy.fixture('orangehrm').then((fixturedata) => { // using the fixture
        
        const ln= new login(); // This creates an instance of the Login class and assigns it to the variable ln. This instance will be used to interact with the login functionality of the application


        ln.setUserName(fixturedata.username) // This line calls the username from fixture file

        ln.setPassword(fixturedata.password)
        ln.ClickSubmitButton();
        ln.VerifyLogin();

 });



      });



         
      

  
});
