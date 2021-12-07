describe('登录',function(){
	const username='jane.lane'
	const password='password123'

	context('HTML表单登录测试',function(){
		it('登陆成功，跳转到dashboard页',function(){
			cy.visit('http://localhost:7077/login')
			//cy.get('input[name=username]').type(username)
			//更改username定位器，使其匹配到不止一个元素
			cy.get('input').type(username)
			cy.get('input[name=password]').type(password)
			//暂停测试
			//cy.pause()
			cy.get('form').debug().submit()

			//断言，验证登录成功则跳转到dashboard页面
			//断言，验证用户名存在
			cy.url().should('include','/dashboard')
			cy.get('h1').should('contain','jane.lane')
		})
	})
})