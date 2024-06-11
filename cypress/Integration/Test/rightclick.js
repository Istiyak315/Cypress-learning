describe('rightclick', () => {
    it('1st', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick();
    });
    it('double click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//button").dblclick();
        
    });
});