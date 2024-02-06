///<reference types="Cypress"/>

describe("suite-1",function()
{
    it("TC_09",function()
    {
        // cy.visit("https://naveenautomationlabs.com/opencart/");
        // cy.contains('Brands').as('brands');
        // cy.get("@brands").should("have.text","Brands").click();
        // cy.url().then((url)=>
        // {
        //     cy.log(url)
        // })
    })


    it("TC_10",function()
    {
        cy.visit("https://example.cypress.io/commands/connectors");
        cy.get(".connectors-each-ul>li").each(($list,$el,index)=>
        {
            cy.log($list,$el,index)
        })
    })

})
