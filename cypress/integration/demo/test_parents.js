describe("parents 命令的实际例子",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=69n7cogasurp0j1gmejimb1jcj")
    })

    it('.parents()',function (){
        cy.get("#li1").parents()
    });

    it('.parent()第一级父类元素',function (){
        cy.get("#li1").parent()
    });

    it('.siblings()同级元素',function (){
        cy.get("[data-cy=\"li2\"]").siblings()
    });



})