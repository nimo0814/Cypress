describe('参数化案例，输入不同的值',function(){
    //定义测试数据
    var testdatas=["test","自动化测试","123456"]
    //前置-打开百度
    before(()=>{
        cy.visit('https://baidu.com')
    })
    //参数化
    testdatas.forEach((event)=>{
        it("百度输入框功能",function (){
            cy.get('#kw').type(event)
                .clear()
                .should('have.value','')
        })
    })
})