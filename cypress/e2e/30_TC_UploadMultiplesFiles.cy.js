// also we have to keep files in the fixture folder

import "cypress-file-upload" // for file uploading , install plugin

describe("Demo Website Automation", () =>
    {
   

      it(' Multiple File uploading ', () => // we have to use plugin 
        {
 
       cy.visit("https://the-internet.herokuapp.com/upload");
       cy.get('#file-upload').attachFile(["25 EPE-2024-spring.pdf","7203.jpg"]) //fixture 
       cy.get("#file-submit").click()
       cy.get("div[class='example'] h3").contains("File Uploaded!")
       
      
  });

})
