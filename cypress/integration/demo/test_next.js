describe("next 家族命令的实际例子",function(){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=kd28nabrskglq26ou4lbmj44s0")
    })

    it('.next()',function(){
        cy.get("ul>li#li1").next()
    });

    it('.nextAll()',function (){
        cy.get("ul>li#li1").nextAll()
    });

    it('.nextUntil()',function (){
        cy.get("ul>li#li1").nextUntil("li[data-test=\"li3\"]")
    })
})