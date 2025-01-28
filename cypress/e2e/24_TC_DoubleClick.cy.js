import "cypress-iframe"
require ('@4tw/cypress-drag-drop') // plugin for drag and drop



describe("Demo Website Automation", () =>
     {
    

      it(' Double Click ', () =>
        {
 
       cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
 
       cy.frameLoaded("#iframeResult") // just loaded frame not interacted
       
      
       cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick() // we move into Iframe , then we find inside that button to double click by using that trigger and dbl click

       cy.iframe("#iframeResult").find("#field2").should("have.value","Hello World!") // have.text is Suitable for static content like <p>, <h1>, <div>.
               //have.value is Suitable for inputs, textareas, dropdowns.
      
       });
});
  