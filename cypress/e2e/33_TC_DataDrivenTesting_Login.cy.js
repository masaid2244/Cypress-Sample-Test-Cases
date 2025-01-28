describe('demo Automation', () => { // first of all this is a sample test case for all log in scenarios , where we can do positive and negatives test cases i.e valid credentials and invalid credentials , for this we craeted one json file with multiple data , let say 3 cases , we will call that fixture file , store in a variable and from that variable we will take each time value into a a new variable and that variable will be used later in test case steps or it block 

    it('Data driven testing - login', () => { 
    
       cy.fixture('orangeHRMDataDriven').then((data)=>{ // from this file , data will be assign to a variable name data

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


        data.forEach((datafromfixture) => { // from that daata , at a time 1 block will be taken by datafrom fixture variable 
            cy.get("input[placeholder='Username']").type(datafromfixture.username); 
            cy.get("input[placeholder='Password']").type(datafromfixture.password);
            cy.get("button[type='submit']").click();

             if (datafromfixture.username == 'Admin' && datafromfixture.password == 'admin123' ) //positive test case
                 {
                 cy.get('.oxd-userdropdown-tab > .oxd-icon').click() //logout
                 cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

             } 

           else { cy.get(".oxd-alert-content.oxd-alert-content--error") // negative test case
            .contains(datafromfixture.expectedResult);

           }

        
        });


       })
       
    });

   

    // Add more it blocks as needed
});
