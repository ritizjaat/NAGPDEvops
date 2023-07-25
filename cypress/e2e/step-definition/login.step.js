import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../Pages/CommonPage";

const commonPage = new CommonPage();

Given('I navigate to the application', () => {
	cy.visit('/');
	//Below code is just to make sure page is loaded.
	cy.contains('Button', ' Login ', { timeout: 15000 }).should('be.visible');
});

When('I login to the application', () => {
	cy.login(Cypress.env('username'), Cypress.env('password'));
});

Then('I am able to login successfully', () => {
	commonPage.getLoadingSpinner().should('not.exist');
	commonPage.getUserNameDisplayInHeader().should('be.visible');
});


When('I try to login to the application with incorrect credentials', () => {
	cy.fixture("logindetails").then((data) => {
		cy.login(data.incorrectlogin.username, data.incorrectlogin.password)
	});
});

Then('{string} message is displayed', (message) => {
	cy.contains(message).should('be.visible');
});

Then('I am on {string} page screen', (page) => {
	cy.contains('button', page, { timeout: 10000 }).should('be.visible');
});



