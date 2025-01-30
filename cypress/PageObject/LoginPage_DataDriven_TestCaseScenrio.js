class  login2 //  Define a class named 'login2'
{

    txtusername = "input[placeholder='Username']"; // Define a selector for the username input field
    txtpassword = "input[placeholder='Password']";
    txtloginsubmitbtn = "button[type='submit']";
    txtexpectedresult = ".oxd-topbar-header-breadcrumb > .oxd-text";
    txtInvalidCredentials = ".oxd-alert-content.oxd-alert-content--error";
    txtuserdropdownicon = ".oxd-userdropdown-tab > .oxd-icon";
    txtLogoutdropdown = ":nth-child(4) > .oxd-userdropdown-link"



// make methods

  
    setUserName(username){ // Method to set the username in the input field
        cy.get(this.txtusername).clear().type(username) //  username from fixture in this fied
    }

    setPassword(password){
        cy.get(this.txtpassword).type(password)

    }

    ClickSubmitButton(){
        cy.get(this.txtloginsubmitbtn).click() // i made mistake here by not writing the actions brackets that why my assertion was failing 

    }

    VerifyLogin(){
        cy.get(this.txtexpectedresult).should('have.text','Dashboard')
    }


    logout() {
            cy.wait(10000); // Wait for UI stability before clicking
            cy.get(this.txtuserdropdownicon).click();  
            cy.get(this.txtLogoutdropdown).click();
    }

    
    verifyInvalidCredentials() {
        cy.get(this.txtInvalidCredentials)
          .should('be.visible')
          .and('contain', 'Invalid credentials'); 
    }

     

}



export default login2 ; // export this class