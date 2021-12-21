describe("reload的实例",function (){
    it('reload', function () {
        cy.visit("https://www.imooc.com/")
        cy.get("a[href=\"/course/list\"]").should('be.visible')
        cy.reload()
        cy.get("a[href=\"/course/list\"]").should('be.visible')
        cy.reload(true)
        cy.get("a[href=\"/course/list\"]").should('be.visible')

    });
})