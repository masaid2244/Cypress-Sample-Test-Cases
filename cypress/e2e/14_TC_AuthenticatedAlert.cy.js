

describe('Demo Website Automation', () => { // arrow function , Test suites
//first method
    it('Javascript Authentication Alert', () => {  // Test Cases , auth having user name and password 
        cy.visit('https://the-internet.herokuapp.com/basic_auth' , {auth : {username : "admin" , password : "admin"}})
        cy.get("div[class='example'] h3").should("have.text","Basic Auth")

    })
//second method , more easy , just add the username:password and then add "@" after https://
    it.only('Javascript Authentication Alert', () => {  // Test Cases , auth having user name and password 
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] h3").should("have.text","Basic Auth")

    })

  })
