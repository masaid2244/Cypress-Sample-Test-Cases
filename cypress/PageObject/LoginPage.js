class  login {
    txtusername = "input[placeholder='Username']";
    txtpassword = "input[placeholder='Password']";
    txtloginsubmitbtn = "button[type='submit']";
    txtexpectedresult = ".oxd-topbar-header-breadcrumb > .oxd-text";




    setUserName(Username){
        cy.get(this.txtusername).type("admin")

    }

    setPassword(Password){
        cy.get(this.txtpassword).type("admin123")

    }

    ClickSubmitButton(){
        cy.get(this.txtloginsubmitbtn).click()

    }

    VerifyLogin(){
        cy.get(this.txtexpectedresult).should('have.value','Dashboard')
    }

     
    }

    export default login;