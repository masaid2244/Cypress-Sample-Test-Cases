// also we have to keep files in the fixture folder

import "cypress-file-upload" // for file uploading , install plugin

describe("Demo Website Automation", () =>
    {
   

      it(' Upload file and rename it  ', () => // we have to use plugin 
        {
 
       cy.visit("https://the-internet.herokuapp.com/upload");
       cy.get('#file-upload').attachFile({filePath:"25 EPE-2024-spring.pdf",fileName:"RenameFilebyMasaid.pdf"}) // filepath is my current name , filename is what name we want to change/rename
       cy.get("#file-submit").click()
       cy.get("div[class='example'] h3").contains("File Uploaded!")
       
       
  });

  


});
 
 