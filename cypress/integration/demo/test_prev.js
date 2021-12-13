context("prev 家族命令的实际例子",function(){
    before(function(){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=rl0lut8a84epbqghmh3mkbgfm6")
    })

    it('.prev()',function (){
        cy.get("ul>li").last().prev()
    });

    it('.prevAll()',function (){
        cy.get("ul>li").last().prevAll()
    });

    it('.prevUntil()',function (){
        cy.get("ul>li").last().prevUntil("li[data-cy=\"li2\"]")
    });

})