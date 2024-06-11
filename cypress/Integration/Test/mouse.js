describe('Mouse hover', () => {
    it.skip('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url('').should('include','top');
    });
    it('Mouse hower-2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover');
        cy.contains('Top').click({force:true})
        cy.url('').should('include','top');

    });
});