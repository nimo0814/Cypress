describe('click命令实例-坐标x,y',function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=qi4gpefphhaaeu0btiv5mh8bls")
    })

    it('.click(x,y)',function (){
        cy.get("#main1").click(15,15)
    });
})