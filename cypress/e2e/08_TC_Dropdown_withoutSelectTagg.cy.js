describe("Demo Website Automation", () => {
    // arrow function , Test suites
  
    it.skip("DropDowns : Select tagg ,  ", () => {
      // Test Cases , By using it.skip , this it block wil not execute , it is equivalent to commenting code
      cy.visit("https://testautomationpractice.blogspot.com/"); // cy.visit to launch and cy.url to capture url
      cy.get("input#name").type("Testing by Masaid");
  
      cy.get("#country") // locating a dropdown
        .select("japan") // selecting a option as in simple dropdowns
        .should("have.value", "japan"); //assert . i.e implicit assertions are should , and
    });
  
    it("DropDowns : without Select tagg ,  ", () => {
      // Test Cases
      cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/"); // cy.visit to launch and cy.url to capture url
  
      cy.get("#select2-billing_country-container").click();
      cy.get("input[role='combobox']").type("Pakistan").type("{enter}"); // first we located the dropdown then for pressing enter we wrote .type('{enter}')
      cy.get("#select2-billing_country-container").should(
        "have.text",
        "Pakistan"
      ); // implicit assertions , have.text is use to check the texts in dropdowns
    });
  
    it.skip("DropDowns : Auto suggestions plus static result ,  ", () => {
      // Test Cases , this type off dropdown is like we input some text , on base of which we get some search results that are dynamically updating in a manner that if u type more words then it will be updated according to that , but also static in a sense that for a specific word we will get same search results every time
      cy.visit("https://www.wikipedia.org/"); // cy.visit to launch and cy.url to capture url
      cy.get("#searchInput").type("Seljuke");
      cy.get(".suggestions-dropdown").contains("Seljuk dynasty").click();
    });
  
  
  
    it.skip("DropDowns : Dynamic Dropdown like google search bar ,  ", () => { // Test Cases ,
      cy.visit("https://www.google.com/"); // cy.visit to launch and cy.url to capture url
      cy.get("#APjFqb").type("selcuklu"); // locating dropdown and then checking the results then using its class search for all results and then choosed 1 of them and click on it 
      cy.get(".wM6W7d").contains("selçuklu").click(); // may get captcha error here 
    });
  
  
  
  
  
  });
  