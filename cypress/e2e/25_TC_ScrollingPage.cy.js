import "cypress-iframe"
require ('@4tw/cypress-drag-drop') // plugin for drag and drop



describe("Demo Website Automation", () =>
     {
    
   it(' scrolling the page ', () => // 
   {

  cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")
  cy.get("img[src='/img/flags/small/tn_tu-flag.gif']").scrollIntoView().should("be.visible") // for scrolling 

  cy.get("img[src='/img/flags/small/tn_tu-flag.gif']").scrollIntoView({durution:5000}) // this duration function takes time i.e in how many second we want to scroll to that location
  cy.get("body > div:nth-child(19) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(164) > div:nth-child(1) > div:nth-child(2)").contains("Sri Lanka") 
});


});
  