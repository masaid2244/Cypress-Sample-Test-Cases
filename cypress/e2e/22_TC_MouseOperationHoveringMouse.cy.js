describe("Demo Website Automation", () =>
    {
   it('Mouse Operation : Hovering Mouse ', () => 
       {
    cy.visit("https://demo.opencart.com/")

    cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/en-gb/catalog/desktops']").trigger("mouseover").click()  // use to hover over element and then click

    cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should("be.visible") // after hover an web element should be visible 

   });

});