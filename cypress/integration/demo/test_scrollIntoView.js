describe('scrollIntoView的实例',function (){
    before(function (){
        cy.visit('http://localhost:63342/Cypress/cypress/integration/demo/test_scroll_H5.html?_ijt=tnklbjtuvir8a5mai01nj6e55k')
    })
    it('横向滚动条的例子',function (){
        cy.get('#scroll-horizontal button')
            .should('not.be.visible')

        cy.get('#scroll-horizontal button')
            .scrollIntoView({duration:2000})
            .should('be.visible')
    });
    it('纵向滚动条的例子',function (){
        cy.get('#scroll-vertical button')
            .should('not.be.visible')

        cy.get('#scroll-vertical button')
            .scrollIntoView({duration:2000})
            .should('be.visible')
    });

    it('横向、纵向滚动条的例子',function (){
        cy.get('#scroll-both button')
            .should('not.be.visible')

        cy.get('#scroll-both button')
            .pause()
            .scrollIntoView({duration:2000})
            .should('be.visible')
    });
})