describe("Demo Website Automation", () => {
  // arrow function , Test suites

  it("    CheckBoxes ", () => {
    // Test Cases
    cy.visit("https://testautomationpractice.blogspot.com/"); // cy.visit to launch and cy.url to capture url
    cy.get("input#name").type("Testing by Masaid");
    cy.get("#sunday").check().should("be.checked"); // by using id , selecting is done by using "be.checked"
    cy.get("#monday").check().should("be.checked");

    cy.get("label[for='saturday']").should("not.be.checked"); // negative test case , unchecking

    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked"); // checking all checkboxes by using such css selector which locates all the checkboxes
    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked"); //uncheck all
    //cy.get("#monday").uncheck() // unchecking  1 monday
    cy.get("input.form-check-input[type='checkbox']").first().check(); // check first checkbox
    cy.get("input.form-check-input[type='checkbox']").last().check(); //
  });
});
