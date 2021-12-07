describe('登录后-访问首页',function(){
    before(()=>{
        cy.login("nimo","Enjoy*0726")
    })
    // beforeEach(function(){
    //     Cypress.Cookies.preserveOnce('token')
    // })

    it("访问多鹿号管理",()=>{
        cy.visit("http://dev.bos.maltbaby.com.cn/local/dooluu")
        cy.url().should('include','/local/dooluu')
        cy.title().should('contain','多鹿--小二后台')
    })

    it("访问天赋实验室-系统课兑换",()=>{
        cy.visit("http://dev.bos.maltbaby.com.cn/talent/convert")
        cy.url().should("include","/talent/convert")

    })
})