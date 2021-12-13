describe("eq 命令的实际例子",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=17d0mk2vg8lque4k9r4gp402nv")
    })

    it('.eq()',function (){
        cy.get("ul>li").eq(1)
    });

})