// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// beforeEach(function(){
//     cy.log('当前环境变量为${JSON.stringify(Cypress.env())}')
// })
Cypress.Cookies.defaults({
    preserve:'token'
})

Cypress.Commands.add('getIframeBody',()=>{
    return cy
        .get('iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
})
// Alternatively you can use CommonJS syntax:
// require('./commands')
