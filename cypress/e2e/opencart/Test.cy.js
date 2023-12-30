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
        cy.visit(Cypress.env('url_register'));
        cy.inputForm("jyoti","mishra");
    })
})

describe("suite-3",function()
{
    it("TC_03",function()
    {
        cy.visit(Cypress.env('url_login'));
        login_object.loginUser(data.email,data.password);
    })
})