describe('.select()实例',function (){
    before(function (){
        cy.visit('http://localhost:63342/Cypress/cypress/integration/demo/test_select_H5.html?_ijt=e9t1rlo05kktnr6cvaq3fg3876')
    })

    // it('.select(value)',function (){
    //     cy.get('select').eq(0).select("1").should("contain.text","apples")
    //     cy.get('select').eq(0).select("oranges").should("contain.value","2")
    // });
    //
    // it('.select(values)',function (){
    //     cy.get('select').eq(0)
    //         .select(["1","2"])
    //         .invoke("val")
    //         .should("deep.equal",["1","2"])
    // });
    //
    // it('.select(value,options)',function (){
    //     cy.get('select').eq(1)
    //         .select("hz",{force:true})
    //         .should("contain.text","杭州")
    // });

    // it('.select(values,options)',function (){
    //     cy.get('select').eq(1)
    //         .select(["hz","sh"],{force:true})
    //         .invoke("val")
    //         .should("deep.equal",["hz","sh"])
    // });
    it('select disable举例',function (){
        cy.get("select").eq(2).select("hz", {force: true})
    })
})