describe('Demo Website Automation', () => {

    it('Explicit assertions , that are not built in but user defined , TDD assert has more easy syntax', () => {
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expected_name = "xyz"; // here we started user defined assertion logic 

        cy.get(".oxd-userdropdown-name").then( (x) => {

            let actual_name=x.text()

            //TDD WE use assert keyword
            assert.notEqual(expected_name,actual_name) // intsall chai for IDE suggestions
          
            //BDD we use expect keyword

            expect(expected_name).to.not.equal(actual_name)

        })


        




    })

  })
