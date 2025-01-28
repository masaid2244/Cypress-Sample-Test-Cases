// event is before or after alert is trigger
// by default cypress will handle alerts i.e it will close the alert window by itself ,and we dont need to write code to close it 
/* 
1) Javascript Alert: It will have some text and an 'OK' button
2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK"
4) Authenticated Alert : 

*/

// Javascript Alert : which is simple , it shows some alert message , some info and we have to click OK button. Cypress automatically closes this alert , we can write code in order to validaate this alert 

describe('Demo Website Automation', () => { // arrow function , Test suites

    it('Javascript Alert', () => {  // Test Cases
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') // cy.visit to launch and cy.url to capture url
        cy.url().should('eq', 'https://the-internet.herokuapp.com/javascript_alerts') // implicit assertions
        cy.get("button[onclick='jsAlert()']").click()
        //automatic closes the alert but for validating we are triggering an event
    let actual_alert="I am a JS Alert";
       
    cy.on("window:alert" , (expected_name) => { // cy.on is use to trigger an event where our event is window:alert in which we are validating the message
            assert.equal(expected_name,actual_alert) //using TDD explicit assertion 
        })
cy.get("#result").should('have.text',"You successfully clicked an alert")


    })

  })
