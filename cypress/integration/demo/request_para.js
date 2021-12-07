describe('network request', function() {

    it("pass the response data to the next request.", function()
    {
        // 先发一个请求，获取返回的接口数据
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
          .its('body.0')   // 返回一个list,获取list第一个对象
          .then((user) => {
            expect(user).property('id').to.be.a('number')
            // 发个新的post请求，userId用上个请求返回的数据
            cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
              userId: user.id,
              title: 'Cypress Test Runner',
              body: 'Fast, easy and reliable testing for anything that runs in a browser.',
            })
          })
          // 注意这里的值是第二个请求的返回值
          // response 是一个新的 post对象
          .then((response) => {
            expect(response).property('status').to.equal(201) // new entity created
            expect(response).property('body').to.contain({
              title: 'Cypress Test Runner',
            })
            // 我们不知道实际response返回的id值是多少 - 但是我们可以判断值 > 100
            // since JSONPlaceholder has built-in 100 posts
            expect(response.body).property('id').to.be.a('number')
              .and.to.be.gt(100)
            // we don't know the user id here - since it was in above closure
            // so in this test just confirm that the property is there
            expect(response.body).property('userId').to.be.a('number')
          })
    })

    })