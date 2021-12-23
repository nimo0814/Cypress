describe("等待别名的实例",function (){
    it.skip('实例1',function (){
        cy.server()
        cy.route({
            url:'**/login',
            status:503,
            response:{
                success:false,
                data:'Not success'
            },
        }).as("login")
        cy.get("input[name=username]").type(username)
        cy.get("input[name=password]").type('${password}{enter}')

        //等待请求的响应
        cy.wait('@login').then((res)=>{
            //针对响应进行断言
            expect(res.status).to.eq(503)
            expect(res.responseBody.data).to.eq('Not success')
            expect(res.responseHeaders).to.have.property('x-token','abc-123-foo-bar')
        })
    });
})