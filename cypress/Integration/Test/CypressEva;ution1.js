describe('Orange HRM TEsting', () => {
    it('Logging in', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath('//input[@name="username"]').type('Admin');
        cy.xpath('//input[@name="password"]').type('admin123');
        cy.xpath('//button[@type="submit"]').click();
        cy.contains("Admin").click();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input').type('abcdy');
        cy.wait(2000);
        cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click()
        cy.xpath("(//div[@class='oxd-select-option'])[2]").click();
        cy.xpath("//input[@placeholder='Type for hints...']").type('ran');
        cy.xpath("(//span[@data-v-08ed484c])[1]").click();
        cy.xpath("(//div[@class='oxd-select-text-input'])[2]").click();
        cy.xpath("(//span[@data-v-13cf171c])[1]").click();
        cy.xpath('//button[@type="submit"]').click();

        cy.reload();

        cy.xpath("//input[@placeholder='Type for hints...']").type('jam');
        
        
        // cy.xpath('(//span[@data-v-67d2aedf])[1]').click();
        // cy.xpath("//input[@placeholder='Type for hints...']").type('ran');
        // cy.get("(//span[@data-v-08ed484c])[1]").click();
        // // cy.get(".oxd-autocomplete-text-input oxd-autocomplete-text-input--active").click();


    
        
    });
});