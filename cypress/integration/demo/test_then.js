describe("then回调函数的两种基本写法",function (){
    it('then()命令',function (){
        cy.get("#li").then(($text)=>{
            cy.log($text.text())
        })

        cy.get("#li1").then(function ($li){
            cy.log($li.text())
        })
    });

    it('then()比较值',function (){
        cy.get("#li1").then(($li)=>{
            const txt=$li1.text()
            cy.get("#li").should(($li2)=>{
                expect($li2.text()).to.be.eq(txt)
            })
        })
    })
})