//describe声明一个测试用例集
describe('第一个hello word脚本从百度开始',function(){
    beforeEach(()=>{//测试用例前置操作，相当于setup
        cy.visit('http://www.baidu.com')
    })
    it("百度输入框功能",function(){//it声明了一个测试用例
        cy.get('#kw').type('cypress')//cy.get定位元素，type输入文本
            .should('have.value','cypress')//should为断言，have.value是元素的value属性值，判断是否为'yoyo'
            .clear()//clear清空文本
            .should('have.value','')//继续断言，文本框内容为空字符串
    })
})