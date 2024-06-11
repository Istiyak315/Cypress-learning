import LoginPage from "../../support/pageObjects/Herouku/LoginPage";

describe('Heroku test', () => {
    const login=new LoginPage();

    it('login page', () => {
        login.visiturl();
        login.Login();


    });
});