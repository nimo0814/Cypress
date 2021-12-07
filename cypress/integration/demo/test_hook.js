describe('Hooks',()=>{
    before(()=>{
        cy.log("所有的用例之前只执行一次，测试准备工作")
    })
    after(()=>{
        cy.log("所有的用例之后只执行一次")
    })
    beforeEach(()=>{
        cy.log("每个用例之前都会执行")
    })
    afterEach(()=>{
        cy.log("每个用例之后都会执行")
    })
    it('test case 1',()=>{
        cy.log("test case 1")
        expect(true).to.eq(true)
    })
    it('test case 2',()=>{
        cy.log("test case 2")
        expect(true).to.eq(true)
    })
    })