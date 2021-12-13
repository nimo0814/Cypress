describe("children 命令的实际例子",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=mhbftaskjlv47bpsfhr0rrhh6i")
    })

    it('.children()',function (){
        cy.get("ul").children()
    });

    it('.children(selector)',function (){
        cy.get("ul").children("#li1")
    });
})