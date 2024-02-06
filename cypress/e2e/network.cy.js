///<reference types="cypress"/>

describe("suite-1",()=>
{
    it("get call",function()
    {
        cy.request({
               url:"https://reqres.in/api/users",
               method: "GET",
               qs:{
                page: 2
               },
               headers:{
                "Content-Type":"application/json"
               }

        }).then((response)=>
        {
            expect(response.status).to.be.eq(200);
        })
    })

    it("get original response",function()
    {
        cy.visit("https://dummyapi.io/explorer");
        
        cy.intercept(
            {
                method:"GET",
                path:"/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
            }
        ).as("getusers");

        cy.contains("Comments List").click();
        

        cy.wait("@getusers").then((intercept)=>
        {
            expect(intercept.response.body.total).equal(2)
        })
    })

    it.only("mock above response",function()
    {
        cy.visit("https://dummyapi.io/explorer");
        cy.intercept("GET","/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",{fixture:"example.json"}).as("getlimit");
        
        cy.contains("Comments List").click();

        cy.wait("@getlimit").then((mock)=>
        {
            expect(mock.response.body.email).equal("abc@gmail.com");
        })
    })
})