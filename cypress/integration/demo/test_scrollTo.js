describe("scrollTo命令实例",function (){
    before(function (){
        cy.visit("http://localhost:63342/Cypress/cypress/integration/demo/test_scrollTo_H5.html?_ijt=qhp18hfvntd14429vhnss5pg5m")
    })
    it('带position的例子',function (){
        cy.scrollTo('bottom',{ensureScrollable:false})

        //将元素滚动条滑动到中间
        cy.get('#scroll-both')
            .scrollTo("center",{duration:1000})
    });

    it('带x，y的实例',function (){
        //向右滑动0，向下滑动0px
        cy.scrollTo(0,0,{duration:1000,ensureScrollable:false})
        //向右滑动0%，向左滑动50%
        cy.scrollTo("0%","50%",{duration:1000,ensureScrollable:false})
        //向右滑动50px，向左滑动50px
        cy.get('#scroll-both')
            .scrollTo("50px","50px",{duration:1000,ensureScrollable:false})
    })
})