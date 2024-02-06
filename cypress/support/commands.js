import { Login } from "../e2e/opencart/PageObject/login"
const login_object=new Login()


//Function to enter partial input in register page of naveenopencart
Cypress.Commands.add("inputForm",(firstname,lastname)=>{
    cy.get(login_object.webLocators.firstname).type(firstname).should("have.value",firstname);
    cy.get(login_object.webLocators.lastname).type(lastname).should("have.value",lastname);
    cy.get("input[type='submit']").should("be.enabled").click();

})

//Function to enter in put in google search engine
Cypress.Commands.add("userInput", (text)=>{
    cy.get(".bncx").type(text);
    cy.contains("Google search").click();
})