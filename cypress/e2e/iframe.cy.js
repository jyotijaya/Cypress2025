///<reference types='cypress'/>

describe("Iframe handling", function()
{
    it("TC_01",function(){
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        cy.get("#mce_0_ifr").then(($iframe)=>
        {
            let bodyframe=$iframe.contents().find('body');
            cy.wrap(bodyframe).clear().type("Hello")
        })



    })
})