import "cypress-iframe"
require ('@4tw/cypress-drag-drop') // plugin for drag and drop



describe("Demo Website Automation", () =>
     {


    it(' Right Click ', () =>
       {

      cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");

      cy.get(".context-menu-one.btn.btn-neutral").rightclick(); // use function rightclick
      cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy>span").contains("Copy")
     
      });

      


});
  