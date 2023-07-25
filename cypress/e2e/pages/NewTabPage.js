export class NewTabPage {
    getClickHereButton() {
        return cy.get("a:contains('Click Here')");
    }

    getNewWindowTitle() {
        return cy.get("title:contains('New Window)");
    }
}