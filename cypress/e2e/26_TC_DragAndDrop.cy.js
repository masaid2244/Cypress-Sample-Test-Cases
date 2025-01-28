import "cypress-iframe"
require ('@4tw/cypress-drag-drop') // plugin for drag and drop



describe("Demo Website Automation", () =>
     {
    

       it(' Drag and Drop ', () => // we have to use plugin 
         {
  
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box5").drag("#box105",{force: true}) 
        
        // first locator is our element whom we want to drag and the second locator is the location where we want to drop it by using drag function . we use force : true , By default, Cypress ensures that: An element is visible.An element is not disabled.The action would not overlap with other elements. If any of these conditions fail, Cypress throws an error. Using { force: true } tells Cypress to perform the action regardless of these conditions.
       
   });
 

});
  