describe("url实例",function (){
    before(function (){
        cy.visit("https://www.cnblogs.com/happyCodingnimo/")
    })

    it('url',function (){
        cy.url()
        cy.location('href')
        cy.url().should('eq',"https://www.cnblogs.com/happyCodingnimo/")
        cy.location('href').should('include',"happyCodingnimo")
    });

    it('三种等价写法',function (){
        cy.location('href').should('include','happyCodingnimo')

        cy.location().its('href').should('include','happyCodingnimo')

        cy.url().should('include','happyCodingnimo')
    })
})