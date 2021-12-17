describe("clear的实例",function () {
    before(function () {
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test_h5demo.html?_ijt=bnsk4qkduf20ljsnkirv7g98gb")
    })

    it('清空内容', function () {
        //清除testarea文本框内容
        cy.get('textarea').type('Hello World').clear()

        //清空input输入框内容
        cy.get('input').eq(0).type("123").clear()

        //清空当前聚焦状态元素的内容
        cy.focused().clear()
    });
})