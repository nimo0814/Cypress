describe('cypress request login 小二后台',function(){
    it('login 小二后台',function(){
        cy.request({
            url:'http://dev.api.maltbaby.com.cn/privilege/api/user/login',
            method:'POST',
            headers:{
                "Content-type": "application/json"
            },
            body:{
                "username": "nimo",
	            "email": null,
	            "password": "Enjoy*0726"
            }
        })
            .then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body.code).to.eq("00000000")


            })
    })
})