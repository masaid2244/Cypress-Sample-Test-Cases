class  login { // // Define a class named 'login'
    txtusername = "input[placeholder='Username']"; // Define a selector for the username input field
    txtpassword = "input[placeholder='Password']";
    txtloginsubmitbtn = "button[type='submit']";
    txtexpectedresult = ".oxd-topbar-header-breadcrumb > .oxd-text";


// make methods

    setUserName(Username){ // Method to set the username in the input field
        cy.get(this.txtusername).type("admin") // Use Cypress to find the username input field and type the username

    }

    setPassword(Password){
        cy.get(this.txtpassword).type("admin123")

    }

    ClickSubmitButton(){
        cy.get(this.txtloginsubmitbtn).click() // i made mistake here by not writing the actions brackets that why my assertion was failing 

    }

    VerifyLogin(){
        cy.get(this.txtexpectedresult).should('have.text','Dashboard')
    }

     
    }

    export default login; // export this class