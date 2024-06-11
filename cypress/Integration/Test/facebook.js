describe('Test suite - facebook - collection of test case', () => {
    it('login test', () => {
        
        cy.visit('https://www.facebook.com/login/');

        cy.get('#email').type('8793353661');
        cy.get('#pass').type('Ishu@774583');
        cy.get('[type="submit"]').click();
    });
});



