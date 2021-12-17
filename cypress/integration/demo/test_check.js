describe("check命令的实例",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test_checkH5.html?_ijt=v8c2iqgr53aerauvkdoi74vu5m")
    })
    it(".check()的例子",function (){
        cy.get('[type="radio"]').check()
        cy.get('[type="checkbox"]').check()
        cy.get('#house').check()
    });

    it(".check(value)的例子",function (){
        cy.get('[type="radio"]').check("sz")
        cy.get('[type="checkbox"]').check("money")
    });

    it(".check(values)的例子",function (){
        cy.get('[type="checkbox"]').check(["money","house"])
    });

    it(".check(options)的例子",function (){
        cy.get('[type="radio"]').check({force:true}).should("be.checked")
    });

    it(".uncheck()的例子",function (){
        cy.get('[type="checkbox"]').uncheck()
    });




})