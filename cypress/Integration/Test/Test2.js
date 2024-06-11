import { interfaces, it } from "mocha";

describe('Test link', () => {
    it.skip('Test 1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//input[@name="checkBoxOption1"]').check().and('have.attr','type','checkbox');
        cy.xpath('//input[@name="checkBoxOption2"]').check().and('have.attr','name','checkBoxOption2');
        cy.xpath('//input[@name="checkBoxOption3"]').check().and('have.attr','type','checkbox');


        
    });
    it.skip('test multiple' , () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get("input[type='checkbox']").check().should('be.checked');
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked');
    })
    it.skip('radio test',() =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get("[value='radio1']").check().should('be.checked');
        cy.get("[value='radio2']").check().should('be.checked');
        cy.get("[value='radio3']").check().should('be.checked');

    })
    it.skip('dropdown test',() =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('[name="dropdown-class-example"]').select('Option3').should('have.value','option3')
        cy.get('[name="dropdown-class-example"]').select('Option2').should('have.value','option2')
        cy.get('[name="dropdown-class-example"]').select('Option1').should('have.value','option1')
    })
    it.skip('index test',() =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('[name="dropdown-class-example"]').select(3).should('have.value','option3')
        cy.get('[name="dropdown-class-example"]').select(2).should('have.value','option2')
        cy.get('[name="dropdown-class-example"]').select(1).should('have.value','option1')
        cy.get('[name="dropdown-class-example"]').select('').should('have.value','')
    })
    it.skip('select by text test',() =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('[name="dropdown-class-example"]').select('Option3').should('have.value','option3')
        cy.get('[name="dropdown-class-example"]').select('Option2').should('have.value','option2')
        cy.get('[name="dropdown-class-example"]').select('Option1').should('have.value','option1')
        cy.get('[name="dropdown-class-example"]').select('').should('have.value','')
    })
   
}); 
