describe("测试环境变量的五种设置方式",function (){

    it('cypress.json中设置',function(){
        cy.log(`当前测试系统环境变量为${JSON.stringify(Cypress.env())}`)
        cy.log(`foor 环境变量的值是${JSON.stringify(Cypress.env("foor"))}`)
    });

    it('cypress.env.json中设置',function(){
        cy.log(`环境变量有${JSON.stringify(Cypress.env())}`)
        cy.log(`key 环境变量的值是${JSON.stringify(Cypress.env("key"))}`)
        cy.log(`host 环境变量的值是${JSON.stringify(Cypress.env("host"))}`)
        cy.log(`api_server 环境变量的值是${JSON.stringify(Cypress.env("api_server"))}`)
    });

})