// also we have to keep files in the fixture folder

import "cypress-file-upload" // for file uploading , install plugin

describe("Demo Website Automation", () =>
    {
   

      it(' Single File uploading - pdf ', () => // we have to use plugin 
        {
 
       cy.visit("https://the-internet.herokuapp.com/upload");
       cy.get('#file-upload').attachFile("25 EPE-2024-spring.pdf") //fixture 
       cy.get("#file-submit").click()
       cy.get("div[class='example'] h3").contains("File Uploaded!")
       
      
  });

  it(' Single File uploading - image ', () => // we have to use plugin 
  {

 cy.visit("https://the-internet.herokuapp.com/upload");
 cy.get('#file-upload').attachFile("7203.jpg") //fixture 
 cy.get("#file-submit").click()
 cy.get("div[class='example'] h3").contains("File Uploaded!")
 

});



it(' Single File uploading - csv ', () => // we have to use plugin 
  {

 cy.visit("https://the-internet.herokuapp.com/upload");
 cy.get('#file-upload').attachFile("Application Scrutiny (1).csv") //fixture 
 cy.get("#file-submit").click()
 cy.get("div[class='example'] h3").contains("File Uploaded!")
 

});

it.only(' Drag n Drop ', () => // we have to use plugin 
  {

 cy.visit("https://the-internet.herokuapp.com/upload");
 cy.get('#drag-drop-upload').attachFile("Application Scrutiny (1).csv",{subjectType:"drag-n-drop"}) //fixture 
 cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should("be.visible")
 

});





});
 
 