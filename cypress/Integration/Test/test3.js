describe('testing ramesh shetty', () => {
    it('suggestion example', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
        cy.get('#autocomplete').type('us')
            cy.get('.ui-menu-item-wrapper').each(($el,index,$list)=>{
                if($el.text()=='Brunei Darussalam'){
                    cy.wrap($el).click()
                }
        
    });
});
});