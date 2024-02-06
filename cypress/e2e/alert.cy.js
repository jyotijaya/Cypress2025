///<reference types='cypress'/>


describe("Iframe handling", function()
{
    it("Simple alert handling",function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.contains("Click for JS Alert").click();
        cy.on("window:alert",(alert)=>
        {
            expect(alert).to.contains("I am a JS Alert")
            
        })
        cy.get("#result").should("have.text","You successfully clicked an alert");
    })

    it("prompt alert popup-OK",function()
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.contains("Click for JS Confirm").click();
        cy.on("window:confirm",(confirm)=>
        {
            expect(confirm).to.contain("I am a JS Confirm");
        })

    })

    it("prompt alert popup-Cancel",function()
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        
        cy.on("window:confirm",(confirm)=>
        {
            return true;
        })

        cy.contains("Click for JS Confirm").click();
    })


    
    
})