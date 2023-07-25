const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { CommonPage } from "../Pages/CommonPage";


const commonPage = new CommonPage();
When('I click on {string} Button', (name) => {
    commonPage.getUserDropDownField(name).then((element) => {
        cy.wrap(element).click();
    })
});


When('I click on {string} menu', (button) => {
    Cypress.on('uncaught:exception', () => {
        return false;
    })
    commonPage.getUserDropDown().then((element) => {
        cy.wrap(element).click({ force: true });
    })
});

Then('I am on {string} page', (pageName) => {
    commonPage.getPageHeading().should('have.text', pageName);
    cy.get('.oxd-loading-spinner', { timeout: 15000 }).should('not.exist');
});