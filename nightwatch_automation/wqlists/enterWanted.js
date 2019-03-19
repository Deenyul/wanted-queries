/**
 * Edits an employee and checks that the edit stuck.
 * @param {object} pageObject the page object currently being used for Wanted Queries
 * @param {object} wantedInfo {header: '', mke: '', oai: '', name: '', sex: '', ethnicity: '', height: '', weight: '', hair: '', offense: '',
 *  warrentDate: '', license: '', dlState: '', dlExpire: '', plate: '', plState: '', plDate: '',} - the values desired post-edit
 */
module.exports = (pageObject, wantedInfo, wantedResult) => {
    pageObject
    .waitForElementPresent('@header',5000)
       .click('@header') 
       .enterInFields(wantedInfo)
    pageObject.expect.element('@header').value.to.equal(wantedInfo.header)
    pageObject
        .click('@submit')
        .waitForElementVisible('@resultBody',10000)
        pageObject.expect.element('@resultBody').text.to.equal(wantedResult)
    pageObject
        .click('@clear')
        
    
}