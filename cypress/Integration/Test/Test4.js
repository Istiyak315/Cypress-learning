describe('ramesh shetty app', () => {
    it.skip('table data', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//table[@class="table-display"]/tbody/tr[6]/td[4]').should('include','Appium (Selenium) - Mobile Automation Testing from ScratchAppium (Selenium) - Mobile Automation Testing from Scratch');
        cy.xpath('//table[@class="table-display"]/tbody/tr[4]/td').click();
        cy.get('.tableFixHead').click();

    });
    it('web testing by each method', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//table[@class="table-display"]/tbody/tr[9]/td').each(($el,index,$list)=>{

        let text1=$el.text();
        if(text1.includes('Python')){
            cy.wrap($el).next().then((price)=>{
                cy.log(price.text());

            })
        }


        })
    })

    it('Web data ttable', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//div[@class="tableFixHead"]/table/tbody/tr[9]/td[3]').each(($el,index,$list)=>{
            let text=$el.text();
            if(text.includes('Delhi')){
                cy.wrap($el).prev().then((Position)=>{
                    cy.log(Position.text());              
                })
            }
        })
    })


});