describe('My first Test , test no 1', () => {

    it('Visit HRM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
    })


    it('Visit HRM and fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','orangeHRM')
    })


  })



  //

  describe('test Suite', () => { 

    it('Test Case 1 - Description', () => { 
        // Add your test steps here for the first test case
    });


});
