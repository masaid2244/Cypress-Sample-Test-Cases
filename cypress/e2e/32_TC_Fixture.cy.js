let globaldata; // Declare a global variable to store fixture data

// Test Suite
describe('Demo Website Automation', () => {

  // Before hook to load fixture data once for all tests
  before(() => {
    cy.fixture('orangehrm').then((fixturedata) => { // file name in fixture folder 
      globaldata = fixturedata; // Assign fixture data to the global variable that will be used 
    });
  });

  // Test Case 1: Single `it` block using fixture data
  it('Fixture usage - Approach 1 for single it block', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Use cy.fixture within this block for local usage
    cy.fixture('orangehrm').then((fixturedata) => {
      cy.get("input[placeholder='Username']").type(fixturedata.username);
      cy.get("input[placeholder='Password']").type(fixturedata.password);
      cy.get("button[type='submit']").click();

      // Assertion for successful login
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .contains(fixturedata.expectedResult);
    });
  });

  // Test Case 2: Generic approach using global variable for multiple `it` blocks
  it('Fixture usage - Approach 2 for multiple it blocks', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Use the global variable for fixture data
    cy.get("input[placeholder='Username']").type(globaldata.username);
    cy.get("input[placeholder='Password']").type(globaldata.password);
    cy.get("button[type='submit']").click();

    // Assertion for successful login
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
      .contains(globaldata.expectedResult);
  });
});
