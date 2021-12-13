describe("first 命令的实际例子",function (){
    before(function(){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=unsclvne68dno82ucabjs2tg0")
    })

    it('.first()',function(){
        cy.get("ul>li").first()
    });

    it('.last()',function(){
        cy.get("ul>li").last()
    });
})