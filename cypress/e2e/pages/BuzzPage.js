export class BuzzPage {

    getBuzzPosts() {
        return cy.get('div.orangehrm-buzz-newsfeed-posts').find('p.orangehrm-buzz-post-body-text');
    }

    getThreeIconButtonForPost(post) {
        return this.getBuzzPosts().contains(post).parents('div.oxd-sheet').find('div.orangehrm-buzz-post').find('button.oxd-icon-button');
    }

    // Add the locator here when we dont want to create seperate method and we can  use single step for same action on different locators
    // Example I click on "Post" button- we will add post locator here and will create single step definition. Same definition we can use for I click on "Delete Post" button
    labelToSelectorMap = {
        'buzz post input box': 'textarea.oxd-buzz-post-input',
        'Post': 'button.oxd-button',
        'Delete Post': 'p.oxd-text'
    }

    getElementByLabel(label, timeout = 6000) {
        return cy.get(this.labelToSelectorMap[label], { timeout: timeout });
    }

}