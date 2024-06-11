import { Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('enter URL',()=>{
    
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})
When('User enter first name',()=>{
    cy.get('#firstName').type('Istiyak');
   
    
})
And('Last name',()=>{
    cy.get('#lastName').type('Shaikh');

})
And('Email',()=>{
    cy.get('#email').type('sistiyak315@gmail.com');
})
And('Number',()=>{
    cy.get('#number').type('8793353661')
})
Then('click on submit user should be displayed alert message',()=>{
    cy.xpath('//input[@class="ui green button"]').click();

    
    cy.on("window:alert",(msg)=>{
        expect(msg).to.eq('Thank You for reaching out to us, Istiyak Shaikh')
        return true;
        
    })
})

