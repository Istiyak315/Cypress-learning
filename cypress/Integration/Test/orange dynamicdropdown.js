describe('dynamic dropdown', () => {
    it('1st  test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[name='username']").type('Admin');
        cy.get('[type="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.xpath('//li[1]//a[1]//span[1]').click(); //click on admin
        cy.get('[placeholder="Type for hints..."]').type('jam');//search on textbook
        cy.xpath('//div[@class="oxd-autocomplete-wrapper"]').each(($el,index,$list)=>{
            if($el.text()=='James Butler'){
                cy.wrap($el).click();
            }
        })
    });
});