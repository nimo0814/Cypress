describe("textarea标签的实例",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test_h5demo.html?_ijt=rkmbuu0acn2rhmt3gmeml3u1k")
    })

    // it('<textarea>标签的例子',function (){
    //     cy.get('textarea').type('Hello World')
    // });
    //
    // it('<option>标签的例子',function (){
    //     cy.get('input[list="fruit"]').type('Apple')
    // });
    //
    // it('<input type="date"> 标签的例子',function (){
    //     cy.get('input[type="date"]').type('1999-12-31')
    // });
    //
    // it('<input type="month"> 标签的例子',function (){
    //     cy.get('input[type="month"]').type('1999-12')
    // });
    //
    // it('<input type="week"> 标签的例子',function (){
    //     cy.get('input[type="week"]').type('1999-W23')
    // });
    //
    // it('<input type="time"> 标签的例子',function (){
    //     cy.get('input[type="time"]').type('23:15')
    // });

    it('结合键盘键',function (){
        cy.get('textarea').type('{shift}test')
    })

})