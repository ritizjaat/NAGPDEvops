export class LoginPage {

    getUserName() {
        return cy.get('input[name="username"]');
    }

    getPassword() {
        return cy.get("input[name='password']");
    }

    getLoginButton() {
        return cy.get("button[type='submit']");
    }

    loginToTheApplication(username, password) {
        this.getUserName().type(username);
        this.getPassword().type(password);
        this.getLoginButton().click();
    }
}