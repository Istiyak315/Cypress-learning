describe('test suit on automation', () => {
    it('1st test case ', () => {
        cy.visit('https://automationteststore.com/');
        // cy.xpath('//a[@class="logo"]').click();
        // cy.xpath("/a[contains(text(),'accessories')]").click();
        cy.xpath('//*[@id="footer"]/footer/section[2]/div/div[1]/div/ul/li[5]/a').click();
        cy.xpath('//*[@id="ContactUsFrm_first_name"]').type('Istiyak shaikh');
        cy.xpath('//*[@id="ContactUsFrm_email"]').type('Sistiyak315@gmail.com');
        cy.xpath('//*[@id="ContactUsFrm_enquiry"]').type('I wanted to search for shoes');
        cy.xpath('//*[@id="ContactUsFrm"]/div[2]/div[2]/button').click();
        cy.xpath("//*[contains(text(),'enquiry')]").should('have.text','Your enquiry has been successfully sent to the store owner!');
        


        
    });
});