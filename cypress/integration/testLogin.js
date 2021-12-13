//导入测试数据
import {testLoginUser} from "./datas/testLogin.data";
describe("登录",function (){
    beforeEach(function (){
        cy.visit("/login")
    })

    //循环测试数据
    for(const user of testLoginUser){
        it(user.summary,function (){
            cy.get("input[name=username]").type(user.username)
            cy.get("input[name=password]").type(user.password)

            cy.get("form").submit()

            cy.url().should('include',"/dashboard")
            cy.get("h1").should('contain',user.username)
        })
    }
})