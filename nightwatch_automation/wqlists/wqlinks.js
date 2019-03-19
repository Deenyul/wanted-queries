/**
 * Edits an employee and checks that the edit stuck.
 * @param {object} pageObject the page object currently being used for Wanted Queries
 * @param {object} desiredLink {@homeLink @enterWantedLink @modifyWantedLink @cancelWantedLink } - the values desired post-edit
 */
module.exports = (pageObject, desiredLink) => {
    pageObject
        .click('@popOutBtn')
        .waitForElementPresent('nav.bm-item-list',500) 
        .click (desiredLink)

    
}