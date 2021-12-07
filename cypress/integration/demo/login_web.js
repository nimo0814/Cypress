describe('登录web网站案例',function(){
    beforeEach(()=>{
        cy.visit('http://dev.bos.maltbaby.com.cn/login');
        cy.fixture('login.json').as('login')
    })
    it("登录后台案例",function () {
        cy.log("读取login.json文件账号："+this.login.username)
        cy.log("读取login.json文件密码："+this.login.password)
        //let定义变量
        let username=this.login.username
        let password=this.login.password
        let include=this.login.include
        //输入用户名
        cy.get('input[type="text"]').type(username)
            .should('have.value',username)
        //输入密码
        cy.get('input[type="password"]').type(password)
            .should('have.value',password)
        //提交表单
        cy.get('button[type="submit"]').click()
        //判断页面跳转到/zentao/my/
        cy.url().should('include',include)
        //判断存在cookie值'zentaosid'
        //cy.getCookie('token').should('have.property', 'value', '32b940ca594ef54d685a70955c631ea5661d')
    })
})