describe('Demo Website Automation', () => { // arrow function , Test suites

    // Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK"


    it('Javascript Prompt Alert', () => {  // Test Cases
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') // now here lies a little difference , it is behavior of cypress then whenever an alerts appears , it handle it with ok button , but prompt alert is such a thing , if we want to validate it , then first we have to trigger an event to send a prompt or message then we should click on on the javascript prompt alert through cypress , in order to get validation
        
cy.window().then((capturing_window)=> { // we capture window using cy.stub , kind of window is prompt and then we pass the text 
    cy.stub(capturing_window,'prompt').returns("welcome Masaid Zeb");
})

cy.get("button[onclick='jsPrompt()']").click() //automatic closes the alert by clicking OK button but for validating we are triggering an event


   /* let actual_alert="I am a JS Confirm";
       
    cy.on("window:confirm" , (expected_name) => { // cy.on is use to trigger an event where our event is window:confirm
            assert.equal(expected_name,actual_alert) //using TDD explicit assertion 
        })*/


cy.get("#result").should('have.text',"You entered: welcome Masaid Zeb") 

    })





    it('Javascript prompt Alert by using Cancel button', () => {  // Test Cases , it.only is use when we want to run only 1 it block from multiples block.
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 

        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt', ()=> false) // this event will press cancel button , by default this event triggers on true , here we make it false to click on cancel 

        cy.get("#result").should('have.text',"You entered: null") 

    })



  })
