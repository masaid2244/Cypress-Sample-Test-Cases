import 'cypress-iframe'

describe('Demo Website Automation', () => { 

    it('IFrames : an HTML element that loads another HTML document within a web page', () => {  
       // Approach no 1  , by using custom command; 
        cy.visit('https://the-internet.herokuapp.com/iframe')  // 

        cy.getIframebyMasaidZeb('#mce_0_ifr') // we made our own custom command in command.js in support folder , by which we can call from that place everytim we need to deal with these i frames. 
        .type("Welcome Masaid Zeb - ISTQB CTFL {ctrl+a}");  //  {ctrl+a} to select the text written


                 cy.get("[title='Bold']").click() //bold text 

    })




    it('IFrames : an HTML element that loads another HTML document within a web page', () => {  
        // Approach no 2 , by using plugin ; npm install -D cypress-iframe, after that we have to import also import 'cypress-iframe'
 
         cy.visit('https://the-internet.herokuapp.com/iframe') 

         cy.frameLoaded("#mce_0_ifr") // loaded iFrame but not interacted with it 

        cy.iframe("#mce_0_ifr") //interact with iFrame
        .type("Welcome Masaid Zeb - ISTQB CTFL {ctrl+a}");
 
         cy.get("[title='Bold']").click() //bold text 
 
     })

  })



