const jsondata=require('../fixtures/example.json')
///<reference types="Cypress"/>


describe("suite-1",function()
{
    
        jsondata.forEach((data)=>
        {
            it("TC_1",function()
            {   
                cy.visit("https://www.google.com/search?q=javascript+tutorial");
                cy.get("#APjFqb").clear().type(data.skill);
            })
        })      
            
})

