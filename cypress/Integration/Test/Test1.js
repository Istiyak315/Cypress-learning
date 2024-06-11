///<reference types="Cypress"/>
describe('test suit', () => {
    it('1st test case', () => {
       cy.visit('https://www.flipkart.com/account/login?signup=true') 
       cy.wait(10000)
    });
});