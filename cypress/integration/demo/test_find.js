describe("find命令实际例子",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=rjjirbq6p6v2evv1a9qmnl8nes")
    })

    it("正确写法",function(){
        //先获取到ul这个元素，再在它后代找到#li元素
        cy.get("ul").find("#li1")
    });

    it("错误写法",function (){
        cy.find("#li")
    });
})