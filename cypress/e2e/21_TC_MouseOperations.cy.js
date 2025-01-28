import "cypress-iframe"
require ('@4tw/cypress-drag-drop') // plugin for drag and drop



describe("Demo Website Automation", () =>
     {
    it('Mouse Operation : Hovering Mouse ', () => 
        {
     cy.visit("https://demo.opencart.com/")

     cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/en-gb/catalog/desktops']").trigger("mouseover").click()  // use to hover over element and then click

     cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should("be.visible") // after hover an web element should be visible 

    });


    it.skip(' Right Click ', () =>
       {

      cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");

      cy.get(".context-menu-one.btn.btn-neutral").rightclick(); // use function rightclick
      cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy>span").contains("Copy")
     
      });

      it.skip(' Double Click ', () =>
        {
 
       cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
 
       cy.frameLoaded("#iframeResult") // just loaded frame not interacted
       
      
       cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick() // we move into Iframe , then we find inside that button to double click by using that trigger and dbl click

       cy.iframe("#iframeResult").find("#field2").should("have.value","Hello World!") // have.text is Suitable for static content like <p>, <h1>, <div>.
               //have.value is Suitable for inputs, textareas, dropdowns.
      
       });



       it(' Drag and Drop ', () => // we have to use plugin 
         {
  
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box5").drag("#box105",{force: true}) 
        
        // first locator is our element whom we want to drag and the second locator is the location where we want to drop it by using drag function . we use force : true , By default, Cypress ensures that: An element is visible.An element is not disabled.The action would not overlap with other elements. If any of these conditions fail, Cypress throws an error. Using { force: true } tells Cypress to perform the action regardless of these conditions.
       
   });
 
   it.only(' scrolling the page ', () => // 
   {

  cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")
  cy.get("img[src='/img/flags/small/tn_tu-flag.gif']").scrollIntoView().should("be.visible") // for scrolling 

  cy.get("img[src='/img/flags/small/tn_tu-flag.gif']").scrollIntoView({duration:5000}) // this duration function takes time i.e in how many second we want to scroll to that location
  cy.get("body > div:nth-child(19) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(164) > div:nth-child(1) > div:nth-child(2)").contains("Sri Lanka") 
});


});
  