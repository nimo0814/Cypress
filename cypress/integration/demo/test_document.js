describe("document的例子",function (){
    before(function (){
        cy.visit("https://www.baidu.com/")
    })
    it('document',function (){
        cy.document()
        cy.document().its('contentType').should('eq','text/html')
    })
})