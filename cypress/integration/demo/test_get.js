describe("get命令实际例子",function(){
    before(function(){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=sa3pmcrletob7c84c44gcdqp7d")
    })

    it('测试get',function(){
        cy.get("#main1")
        cy.get(".btn")
        cy.get("li")
        cy.get("ul>[data-testid=li4]")
    });
})