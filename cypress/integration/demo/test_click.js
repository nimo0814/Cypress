describe('click命令实例',function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=jlg39oe655jnqkc4tu5earlebr")
    })

    it('.click()',function (){
        cy.get("#main1").click()
    });
})