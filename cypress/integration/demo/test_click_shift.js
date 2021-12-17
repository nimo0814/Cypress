describe("click命令-组合键",function () {
    before(function () {
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test.html?_ijt=d510gd31s25r440jmilqquch6r")
    })

    it('.click(）+组合键', function () {
        cy.get('body').type('{shift}',{release:false})
        cy.get('li:first').dblclick()
    });
})
