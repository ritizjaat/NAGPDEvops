// Once the test is completed ,it will take screenshot  and store it in screenshots folder
afterEach(() => {
    cy.screenshot(Cypress.currentTest.title);
 });

 beforeEach(()=>{
 cy.log(`Test Case ${Cypress.currentTest.title} is starting`);
 });