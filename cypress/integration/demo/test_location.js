describe("location的实例",function (){
    before(function(){
        cy.visit("https://www.baidu.com/s?ie=UTF-8&wd=123")
    })

    it('location',function (){
        cy.location()
        cy.location("host")
        cy.location().should(function (loc){
            expect(loc.host).to.eq('www.baidu.com')
            expect(loc.hostname).to.eq('www.baidu.com')
            expect(loc.href).to.contain('https://www.baidu.com')
            expect(loc.origin).to.eq('https://www.baidu.com')
            expect(loc.pathname).to.contain('/')
            expect(loc.protocol).to.contain('https')
            expect(loc.search).to.eq('?ie=UTF-8&wd=123')
        })
    });
})