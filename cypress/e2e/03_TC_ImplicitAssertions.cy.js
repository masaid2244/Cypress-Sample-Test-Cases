describe('Demo Website Automation', () => 
    {

    it('Assertion ,, Implicit assertions ', () => 
        {

     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  // Implicit assertions have 2 keywords i.e 1.should 2.and
cy.url().should('include', 'orangehrmlive.com')
 cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 cy.url().should( 'contain', 'orangehrm')

/*cy.url().should('include', 'orangehrmlive.com')
.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.should( 'contain', 'orangehrm') */

//cy.url().should('include', 'orangehrmlive.com' )
//.and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//.and ('contain', 'orangehrm' )
//.and ('not.contain', 'greenhrm' )


/*cy.get('.orangehrm-login-branding > img').should('exist')
cy.xpath('//a').should('have.length','5')
cy.get("input[placeholder='Username']").type("Admin")
cy.get("input[placeholder='Username']").should('have.value',"Admin")*/

    }
)


    

  }
)


