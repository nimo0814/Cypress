describe('baidu alert',function(){
    before(function(){
        cy.visit("https://www.baidu.com")
        cy.get("#s-usersetting-top").trigger('mouseover')
        cy.contains("搜索设置").click()
    })

    it('assert alert text',()=>{
        const stub=cy.stub()
        cy.on('window:alert',stub)

        cy.contains("保存设置").click()
            .then(()=>{
                expect(stub.getCall(0)).to.be.calledWith('已经记录下你的使用偏好')
            })
    })
})