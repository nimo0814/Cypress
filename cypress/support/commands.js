// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://dev.bos.maltbaby.com.cn/login')
    cy.get('input[type="text"]').type(username)
            .should('have.value',username)
        //输入密码
        cy.get('input[type="password"]').type(password)
            .should('have.value',password)
        //提交表单
        cy.get('button[type="submit"]').click()
        //判断页面跳转到/zentao/my/
        cy.url().should('include',"/resources")
})

Cypress.Commands.add('login_request',(username="nimo",password="Enjoy*0726")=>{
    cy.request({
        url:'http://dev.api.maltbaby.com.cn/privilege/api/user/login',
            method:'POST',
            headers:{
                "Content-type": "application/json"
            },
            body: {
                "username": username,
                "email": null,
                "password": password
            }
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
