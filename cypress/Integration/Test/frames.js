///<reference types="cypress-iframe" />
describe('frames', () => {
    it('1st frame test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Blog').click()
    });
});