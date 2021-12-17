describe("type命令的实例",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test_h5.html?_ijt=7rr27ab8qq7akr995dlhu9sbko")
    })

    // it('.type()-输入内容',function (){
    //     cy.get("input").type("1234ABC!@#")
    // });
    //
    // it('.type()输入特殊字符',function(){
    //     cy.get("input").type("{del}")
    // });

    it('.type(text,options)',function (){
        cy.get("input").type("{selectall}",{parseSpecialCharSequences:false})
    });


})