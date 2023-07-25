export class CommonPage {
    getUserNameDisplayInHeader() {
        return cy.get('p.oxd-userdropdown-name');
    }

    getUserDropDown() {
        return cy.get('i.oxd-userdropdown-icon');
    }

    getUserDropDownField(name) {
        return cy.get('ul[role="menu"]').contains('li', name);
    }

    getLeftPanelMenuItem(name) {
        return cy.get('ul.oxd-main-menu').contains('span', name);
    }

    getPageHeading() {
        return cy.get('h6.oxd-text', { timeout: 7000 });
    }

    getLoadingSpinner() {
        return cy.get('.oxd-loading-spinner', { timeout: 15000 });
    }

    getConfirmationPopUp() {
        return cy.get('div.oxd-dialog-sheet');
    }

    labelToSelectorMap = {

    }

    getElementByLabel(label, timeout = 6000) {
        return cy.get(this.labelToSelectorMap[label], { timeout: timeout });
    }
}