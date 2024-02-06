///<reference types="Cypress"/>
import { Login } from "./PageObject/login";
import data from "../../fixtures/example.json"

const login_object=new Login();

describe("suite-1",function()
{
    it("TC_01",function()
    {   
        //validate title of page
        cy.visit(Cypress.env('url_home'));
        cy.title().should('eq',"Your Store");
    })
})

describe("suite-2",function()
{
    it("TC_02",function()
    {
        //validate register input form
        cy.visit(Cypress.env('url_register'));
        cy.inputForm("jyoti","mishra");
    })
})

describe("suite-3",function()
{
    it("TC_03",function()
    {
        //validate login
        cy.visit(Cypress.env('url_login'));
        login_object.loginUser(data.email,data.password);
    })

    it("validating children queries", function()
    {
        cy.visit(Cypress.env('url_login'))
        cy.get(".navbar-nav").children().should("have.length",8)
        cy.get(".navbar-nav").contains("ul","Desktops", {matchCase: true})
        cy.get(".navbar-nav").find(">li", {timeout: 10000}).filter(".dropdown").should("have.length",4)
        cy.get(".navbar-nav").find(">li", {timeout: 10000}).find("a").first().should("have.text","Desktops")
        cy.contains("New Custome").trigger("mouseover")
    })
})