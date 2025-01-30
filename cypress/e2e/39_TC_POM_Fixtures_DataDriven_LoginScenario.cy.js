import login2 from "../PageObject/LoginPage_DataDriven_TestCaseScenrio"; // we imported the class that we made in the pom folder , here .. represents the same project 

describe('Demo Website Automation', () => {
    it('POM - With Fixture - Login Scenario Test Cases', () => {
        cy.fixture('orangeHRMDataDriven').then((fixturedata) => { //  // Load test data from the fixture file
            cy.wrap(fixturedata).each((datafromfixture) => {  //  // ✅ FIX: Use cy.wrap().each() instead of .forEach() to ensure Cypress handles async execution properly

                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

                const ln = new login2();  // object initiate
                ln.setUserName(datafromfixture.username); // see the fixture file and POM file
                ln.setPassword(datafromfixture.password);
                ln.ClickSubmitButton();

                if (datafromfixture.username == 'Admin' && datafromfixture.password == 'admin123') { // in case of positive test case
                    ln.VerifyLogin();
                    ln.logout();

                } else {       // negative test case
                   ln.verifyInvalidCredentials();
                }
            });
        });
    });
});
