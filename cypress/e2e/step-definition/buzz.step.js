
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BuzzPage } from "../pages/BuzzPage";
import { CommonPage } from "../pages/CommonPage";

const commonPage = new CommonPage();
const buzzPage = new BuzzPage();

Given('I click on {string} on the left side panel', (leftMenuItemName) => {
    commonPage.getLeftPanelMenuItem(leftMenuItemName).click();
});

Given('I enter {string} in {string}', (message, element) => {
    var updatedMessage = message.replaceAll("{randomString}", Math.random() * 100)
    cy.wrap(updatedMessage).as('postMessage');
    buzzPage.getElementByLabel(element, 15000).type(updatedMessage, { force: true });
});

Then('{string} is displayed in buzz post', (post) => {
    cy.get('@postMessage').then((message) => {
        buzzPage.getBuzzPosts().should('contain.text', message);
    });
});

Given('I tap on three icon button for the post {string}', (args1) => {
    cy.get('@postMessage').then((message) => {
        buzzPage.getThreeIconButtonForPost(message).click({ force: true });
    });
});

Given('Confirmation popup is displayed', () => {
    commonPage.getConfirmationPopUp().should('be.visible');
});

When('I click on {string} on the popup', (args1) => {
    commonPage.getConfirmationPopUp().contains(args1).click();
});

Then('{string} post is not visible in the buzz', (args1) => {
    cy.get('@postMessage').then((message) => {
        buzzPage.getBuzzPosts().should('not.contain.text', message);
    });
});

When('I tap on {string} button in Buzz Page', (buttonName) => {
    buzzPage.getElementByLabel(buttonName).contains(buttonName).click({ force: true });
});

