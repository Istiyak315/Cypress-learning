describe('google search', () => {
    it('testing search results', () => {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('masai{enter}')
        cy.wait(2000)
        cy.scrollTo(0,1000)
        cy.wait(5000)
        cy.scrollTo(0,-2000)


        cy.contains('Masai School').scrollIntoView().click()
        

        
    });
});