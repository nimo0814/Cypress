describe('web滚动窗口案例',function(){
    beforeEach(()=>{
        cy.visit('https://www.baidu.com')

    })
    it("滚动窗口，持续拖动底部",()=>{
        cy.scrollTo('bottom',{duration:3000})
    })
})