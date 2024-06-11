///<reference types="@cypress/xpath" />

describe('Test suit - collection of test cases', () => {
    it('login test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//input[@name='username']").type('Admin');
        cy.xpath("//input[@type='password']").type('admin123');
        cy.xpath("//button[@type='submit']").click();
        cy.url().should('includes','admin')
        //cy.contains('Admin').click()
        // cy.xpath("//p[@class='oxd-userdropdown-name']").click()
        // cy.xpath('//a[@href="/web/index.php/auth/logout"]').click()

    //     cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[9]/a/span').click();
    //     cy.get('[placeholder="Type for hints..."]').type('vi');
    //     cy.get(".oxd-autocomplete-wrapper").each(($el,index,$list)=>{
    //         if($el.text()=='Vikash Sharma'){
    //             cy.wrap($el).click()
    //         }
    //     })

    });
});