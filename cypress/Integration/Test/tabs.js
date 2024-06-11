describe('new tab ', () => {
    it('1st test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        //==>invoke() to remove the attribute 
        //this will remove target attribute and click 
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.contains('Access all our Courses').click()//==>ths will check it is contains on new page or not
            cy.log(cy.title())//==> this will show the origin site link
        });
        cy.log(cy.title())//==> tthis wil show the current site link
        cy.xpath("(//button[@class='btn btn-primary'])[1]").click()
    });
    it.only('new window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.visit('/')
            cy.contains('Blog').click
            cy.log(cy.title())
        });
        cy.log(cy.title())
    });
});