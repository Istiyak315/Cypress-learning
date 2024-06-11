import Login from "../../support/pageObjects/orangeHRM/Login";
describe('orange HRM', () => {
    const login=new Login();
    it('', () => {
        login.visiturl();
        login.Login();
        
    });
});