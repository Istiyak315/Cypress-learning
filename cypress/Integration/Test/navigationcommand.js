describe('Ramesh shetty ', () => {
    it.only('testing navigation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//a[@href="https://rahulshettyacademy.com/documents-request"]').click();
        cy.wait(3000)
        cy.go('back')
        cy.url().should('include','AutomationPractice');
        cy.go('forward')
        cy.url().should('include','documents-request');
        cy.reload()

    });
    it.skip('window test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click();
        cy.on("window:alert",(msg)=>{
            expect(msg).to.eq('Hello , share this practice page and share your knowledge')
            return true;
            
        })

        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.eq('Hello , Are you sure you want to confirm?')
            return true;
        })

    })
});