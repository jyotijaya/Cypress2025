///<reference types="Cypress"/>

Cypress._.times(1,(k)=>{
describe("suite-1",{retries:1},function()
{
        it("TC_1",function()
        {   
            cy.visit("https://www.google.com")
            expect(3).to.eq(4);
        })    
})
})
