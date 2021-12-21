describe("visit实例",function (){
    it('visit',function (){
        cy.visit("https://www.cnblogs.com/happyCodingnimo/")
    });
    it('visit+timeout',function (){
        cy.visit("https://www.cnblogs.com/happyCodingnimo/",{
            timeout:3000,
        })
    });
    it('visit+auth', function () {
        cy.visit("https://www.cnblogs.com/happyCodingnimo/",{
            auth:{
                "username":"test",
                "password":"test"
            }
        })
    });
    it('visit+onBeforeLoad',function (){
        cy.visit("https://www.cnblogs.com/happyCodingnimo/",{
            onBeforeLoad(win){
            }
        })
    });
    it('visit+onload', function () {
        cy.visit("https://www.cnblogs.com/happyCodingnimo/",{
            onLoad(contentWindow) {
                if(contentWindow.angular){
                    //do something
                }
            }
        })
    });
    it('visit+qs', function () {
        cy.visit("https://www.cnblogs.com/happyCodingnimo/",{
            qs:{
                page:'1',
                role:'admin'
            }
        })
    });

    it('visit+method+body', function () {
        cy.visit({
            url:"https://www.cnblogs.com/happyCodingnimo/",
            method:'POST',
            body:{
                name:'nimo',
                email:'123455@qq.com'
            }

        })
    });

    it('visit+window对象', function () {
        cy.visit('index.html').then((contentWindow)=>{

        })
    });
})