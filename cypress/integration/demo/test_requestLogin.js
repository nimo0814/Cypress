describe('cypress request login',function(){
    before(function(){
        cy.login_request()
    })

    it("访问多鹿号管理",()=>{
        cy.visit("http://dev.bos.maltbaby.com.cn/local/dooluu")
        cy.url().should('include','/local/dooluu')
        cy.title().should('contain','多鹿--小二后台')
    })
})