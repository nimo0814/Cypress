describe('hash的实例',function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test_Hash_H5.html?_ijt=3dt9tcivqol707abqd15ls77d8")
    })

    it('hash',function (){
        cy.get('#users li').find('a').click()
        cy.hash().should('match',/users\/.+$/)
    })
})