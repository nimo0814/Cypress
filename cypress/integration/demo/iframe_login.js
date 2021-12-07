describe('iframe login',function(){
    // //定义getIframeBody方法
    // const getIframeBody=()=>{
    //     // 尝试获取 iframe > document > body
    //           // 直到 body element 不为空
    //     return cy.get('iframe')
    //         .its('0.contentDocument.body').should('not.be.empty')
    //         .then(cy.wrap)//cy.wrap返回传递给它的对象
    // }
    before(function(){
        cy.visit("https://www.126.com/")
    })
    it("iframe type",function(){
        //定位输入框，输入账号
        cy.getIframeBody().find('[name="email"]').type("123@qq.com")
            .should('have.value','123@qq.com')
        //输入密码
        cy.getIframeBody().find('[name="password"]').type("123456")
            .should('have.value','123456')
        //点登录按钮
        cy.getIframeBody().find('#dologin').click()
    })
})