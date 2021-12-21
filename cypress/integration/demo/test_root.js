describe('root的实例',function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test_root_H5.html?_ijt=dnt0djuppi68mhl76s90edhp9f")
    })
    it('root',function (){
        cy.root()
        cy.get('form').within(($form)=>{
            cy.get('input[name="email"]').type('john.doe@email.com')
            cy.get('input[name="password"]').type('password')
            cy.root().submit()
        })
    });
})