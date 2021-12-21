describe("window的实例",function (){
    before(function (){
        cy.visit("https://www.baidu.com/")
    })

    it('window',function (){
        cy.window()
            .its('bdCid')
            .should('equal','0')
    })
})