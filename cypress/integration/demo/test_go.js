describe("go的实例",function (){
    it('go', function () {
        cy.visit("https://www.imooc.com/")
        //cy.get("a[href=\"/course/list\"]").click()
        cy.go("back")
        cy.go("forward")
        cy.go(-1)
        cy.go(1)
    });
})