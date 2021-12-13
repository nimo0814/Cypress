// Mocha 提供的 Hook 函数
//  before()
//  beforeEach()
//  afterEach()
//  after()
//
//
// hook 的作用
// 利用钩子函数可以在所有测试用例执行前做一些预置操作（如：准被测试数据、测试环境）
//
// 或者在测试结束后做一些后置操作（如：清理测试数据）
//


describe("测试hook函数",function(){
    before(function(){
        cy.log("当前测试套件中【顶级套件】，【所有】测试用例执行之前运行【before】")
    })

    beforeEach(function(){
        cy.log("当前测试套件中【顶级套件】，【每个】测试用例执行之前运行【beforeEach】")
    })

    after(function(){
        cy.log("当前测试套件中【顶级套件】，【所有】测试用例执行结束后执行【after】")
    })

    afterEach(function(){
        cy.log("当前测试套件中【顶级套件】，【每个】测试用例结束后执行【afterEach】")
    })

    it("顶级测试套件-打印日志1",function (){
        cy.log("顶级测试套件-打印日志111111111")
    });

    it("顶级测试套件-打印日志2",function (){
        cy.log("顶级测试套件-打印日志222222222")
    });

    context("二级测试套件",function(){
        before(function(){
            cy.log("当前测试套件中【二级测试套件】，【所有】测试用例执行之前运行【before】")
        })

        after(function(){
            cy.log("当前测试套件中【二级测试套件】，【所有】测试用例执行结束后运行【before】")
        })

        it("二级测试套件-打印日志3",function (){
            cy.log("二级测试套件-打印日志33333333")
        });

        describe("三级测试套件",function(){
            it("三级测试套件-打印日志4",function(){
                cy.log("三级测试套件-打印日志44444444")
            });
        })
    })
})