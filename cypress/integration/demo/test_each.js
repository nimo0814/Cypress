describe("each 命令的实际例子",function(){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=u3iclv7s8g4crvb96oa4skmtjk")
    })

    it('.each()',function (){
        cy.get("ul>li").each(($li) => {
            cy.log($li.text())

        })
    });

})