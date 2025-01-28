// also we have to keep files in the fixture folder

import "cypress-file-upload" // for file uploading , install plugin

describe("Demo Website Automation", () =>
    {
   

      it(' Shadow Dom - it encapsulate the DOM from other Documents ', () => 
        // The Shadow DOM is a web standard that provides a way to encapsulate a portion of a web component's DOM and CSS so that it is isolated from the rest of the document. This enables developers to create reusable components with scoped styles and markup that do not affect or get affected by other parts of the application.

        {
 
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("7203.jpg") // we used input class

        cy.wait(3000); 

        cy.get(".smart-item-name",{includeShadowDom:true}).should("be.visible")
     })
       
      
  });

