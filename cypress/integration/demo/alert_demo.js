$('button').on('click',(e)=>{
    alert('hi')
    alert('there')
    alert('friend')
})

it('can assert on the alert text content',()=>{
    const stub=cy.stub()
    cy.on('window:alert',stub)

    cy.get('button').click()
        .then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('hi')
            expect(stub.getCall(1)).to.be.calledWith('there')
            expect(stub.getCall(2)).to.be.calledWith('friend')
        })

})