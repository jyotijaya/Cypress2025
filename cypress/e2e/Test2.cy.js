///<reference types="Cypress"/>


describe("suite-1",function()
{
    it("TC_10",function()
    {   
        cy.visit(Cypress.env('url_opencart_contact'));
        cy.get("#fileUpload").selectFile("C:\\Babul\\Interview2024\\CypressFramework_2025\\cypress\\fixtures\\example.json")
        cy.get(".filename").should("have.text","example.json")
    })  
})

