describe("获取title",function (){
    before(function (){
        cy.visit("https://www.cnblogs.com/happyCodingnimo/")
    })

    it('title',function (){
        cy.title()
        cy.title().should('contain',"也简")
    });
})