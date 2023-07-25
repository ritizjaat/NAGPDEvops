import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const apiBaseURL = Cypress.env('apibaseurl');

Given('I add a new user to the portal', () => {
    cy.request(
        {
            method: "POST",
            url: `${apiBaseURL}/users`,
            body:
            {
                "name": "ritiz",
                "job": "leader"
            }
        }).as('response');
});

Given('User is added successfully', () => {
    cy.get('@response').then((response) => {
        expect(response.status).equal(201);
        expect(response.body.id).to.be.not.empty;
        cy.wrap(response.body.id).as('newlyAddedUserId');
    })
});

When('I delete the newly created user', () => {
    cy.get('@newlyAddedUserId').then((id) => {
        cy.request({
            method: "DELETE",
            url: `${apiBaseURL}/users/${id}`
        }).as('response');
    })
});

Then('User is deleted successfully', () => {
    cy.get('@response').then((response) => {
        expect(response.status).equal(204);
    })
});

Given('I get all the details of the user with first name {string}', (firstName) => {
    cy.request({
        method: "GET",
        url: `${apiBaseURL}/users?page=1`
    }).then((response) => {
        response.body.data.forEach(element => {
            if (element.first_name == (firstName)) {
                cy.wrap(element.id).as('userID');
            }
        });
    });
});

Given('User details is correct and matched with {string}', (testDataFileName) => {
    cy.get('@userID').then((userId) => {
        cy.request({
            method: "GET",
            url: `${apiBaseURL}/users/${userId}`
        }).then((response) => {
            expect(response.status).equal(200);
            cy.fixture(`${testDataFileName}`).then((data) => {
                cy.wrap(response.body).should('deep.equal', data)
            })
        })
    })
});

