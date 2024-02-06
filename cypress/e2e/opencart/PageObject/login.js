export class Login
{

    webLocators=
    {
        firstname:"#input-firstname",
        lastname:"#input-lastname",
        email:"#input-email",
        password:"#input-password",
        loginbtn:"input[value='Login']"
    }

    loginUser(email, password)
    {
        cy.get(this.webLocators.email).type(email).should("have.value",email);
        cy.get(this.webLocators.password).type(password).should("have.value",password);
        cy.get(this.webLocators.loginbtn).should("be.enabled").click();
    }


}