describe('测试Cypress.config',function(){
    it('测试取值和设置值',function(){
        //获取pageloadTimeout，默认为60000
        cy.log('pageLoadTimeout的默认值为：${Cypress.config(’pageLoadTimeout‘)}')
        //设置pageLoadTimeout为10000
        Cypress.config('pageLoadTimeout',10000)
        //再次读取pageLoadTimeout的值
        cy.log('pageLoadTimeout的当前值为：${Cypress.config(’pageLoadTimeout‘)}')

    })
})