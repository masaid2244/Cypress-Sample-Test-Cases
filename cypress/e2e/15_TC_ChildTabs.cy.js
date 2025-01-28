describe("Demo Website Automation", () => {
    it('Handling Child page or Tab " ', () => {


      cy.visit("https://the-internet.herokuapp.com/windows"); // open parent tab

     cy.get(".example >a").invoke('removeAttr','target').click() // we remove the attribute because cypress by default doesnt handle child tab , we remove that attribute which was redirecting main to child tab by using removeAttr

     cy.url().should('eq',"https://the-internet.herokuapp.com/windows/new") // implicit assertions

     cy.go('back') // go to main page

     cy.url().should('eq','https://the-internet.herokuapp.com/windows') // should & and are implicit assertions
  
     
   
   
    });


  });
  