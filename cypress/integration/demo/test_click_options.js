describe("click命令-传options参数",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=9q5mc8sc3smiqhvbnfkngu3ijn")
    })

    it('.click({force:true})',function (){
        cy.get("#main1").click({force:true})
    });

    it('.click(position,{force:true})',function (){
        cy.get("#main2").click("topRight",{force:true})
    });

    it('.click(x,y,{force:true})',function (){
        cy.get("#main1").click(15,15,{force:true})
    });

    it('.click({multiple:true})',function (){
        cy.get("ul>li").click({multiple:true})
    });


})