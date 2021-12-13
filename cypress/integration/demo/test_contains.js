describe("contains 命令实际例子",function(){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=j0a6jdov18dk0a4a154naqe6ro")

    })

    it('.contains(content)',function (){
        cy.contains("submit")
    });

    it('.contains(selector,content)',function (){
        cy.contains("ul>li","test1")
    });

    it('.contains(content)正则',function (){
        cy.contains("/l$/")
    })
})