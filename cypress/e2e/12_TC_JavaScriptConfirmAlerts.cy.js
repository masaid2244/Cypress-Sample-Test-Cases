describe('Demo Website Automation', () => { // arrow function , Test suites




    //Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons


    it('Javascript Confirm Alert by using ok button', () => {  // Test Cases
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') // cy.visit to launch and cy.url to capture url
        cy.get("button[onclick='jsConfirm()']").click() 
        //automatic closes the alert by clicking OK button but for validating we are triggering an event
    let actual_alert="I am a JS Confirm";
       
    cy.on("window:confirm" , (expected_name) => { // cy.on is use to trigger an event where our event is window:confirm
            assert.equal(expected_name,actual_alert) //using TDD explicit assertion 
        })


cy.get("#result").should('have.text',"You clicked: Ok") 

    })




    

    it.only('Javascript Confirm Alert by using Cancel button', () => {  // Test Cases , it.only is use when we want to run only 1 it block from multiples block.
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') // cy.visit to launch and cy.url to capture url
        cy.get("button[onclick='jsConfirm()']").click() 
        //automatic closes the alert by clicking OK button but for validating we are triggering an event
    let actual_alert="I am a JS Confirm";
       
    cy.on("window:confirm" , (expected_name) => { // cy.on is use to trigger an event where our event is window:confirm
            assert.equal(expected_name,actual_alert) //using TDD explicit assertion 
        })


        cy.on('window:confirm', ()=> false) // this event will press cancel button , by default this event triggers on true , here we make it false to click on cancel 

cy.get("#result").should('have.text',"You clicked: Cancel") 



    })



  })
