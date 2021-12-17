describe('click命令实例-position',function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=k5hmamaoo3pna2fjv8j3cdqji1")
    })

    it('.click(position)',function (){
        cy.get("#main2").click("top")
        cy.get("#main2").click("topLeft")
        cy.get("#main2").click("topRight")
        cy.get("#main2").click("left")
        cy.get("#main2").click("right")
        cy.get("#main2").click("bottom")
        cy.get("#main2").click("bottomLeft")
        cy.get("#main2").click("bottomRight")
        cy.get("#main2").click("center")
    });
})