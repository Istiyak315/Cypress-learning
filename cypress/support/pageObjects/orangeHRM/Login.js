class Login{
    visiturl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    Login(){
        cy.xpath("//input[@name='username']").type('Admin')
        cy.xpath('//input[@type="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
    }
}

export default Login