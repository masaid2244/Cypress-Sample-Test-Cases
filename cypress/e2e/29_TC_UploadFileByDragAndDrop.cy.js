// also we have to keep files in the fixture folder

import "cypress-file-upload" // for file uploading , install plugin

describe("Demo Website Automation", () =>
    {

it.only(' Drag n Drop ', () => // we have to use plugin 
  {

 cy.visit("https://the-internet.herokuapp.com/upload");
 cy.get('#drag-drop-upload').attachFile("Application Scrutiny (1).csv",{subjectType:"drag-n-drop"}) // we added one parameter in the attach file with subject type drag n drop
 cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should("be.visible")
 

});





});
 
 