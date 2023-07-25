import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { NewTabPage } from "../Pages/NewTabPage";

const newTabPage = new NewTabPage();
Given('I navigate to the new tab functionality application', () => {
	cy.visit(Cypress.env("newtaburl"));
});

When('I tap on {string} button to open the window in new tab', (args1) => {
	newTabPage.getClickHereButton().invoke('removeAttr', 'target');
	newTabPage.getClickHereButton().click();
});

Then('{string} text is displayed', (args1) => {
	cy.get('h3').contains(args1).should('be.visible');
});
