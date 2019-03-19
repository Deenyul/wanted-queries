let wqMaxSuccess = require('../wqlists/wqSuccessMax')
let wqMinSuccess = require('../wqlists/wqSuccessMin')
let wqRequired = require('../wqlists/wqRequiredOnly')
let enterWanted =require('../wqlists/enterWanted')
let wantedQ = {}

module.exports = {
    beforeEach: browser => {
        wantedQ = browser.page.wqObjects()
        wantedQ.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.0')
    },
    after: browser => {
        browser.end()
    },
    'Verify length entries work at minimum values of their range:QODC96 ': browser => {
        // Test  Case link https://dmutah.atlassian.net/browse/QODC-96
        wqMinSuccess.forEach(warrentEntered  => {
            enterWanted(wantedQ, warrentEntered, 'Jimy Dean.A^.aje242135.Jim.F.W.000.000.Red.Theft.1900-01-01.1.MN.2019-01-01.12dsa.AZ.2019-01-02')
        })     
    },

    'Verify length entries work at maximum values of their range:QODC97 ': browser => {
        // Test  Case link https://dmutah.atlassian.net/browse/QODC-97
        wqMaxSuccess.forEach(warrentEntered  => {
            wantedQ
            enterWanted(wantedQ, warrentEntered,"Jimmy @plousa Dean3.A^b!.aje242135.Jimmy The Hoarse Wrangler Dean.O.B.999.999.yellowishy.GrandTheftHorse.2019-02-19.a123456789(*&^%$#@!.HI.2019-03-15.12dsa.WY.2019-03-15")
        
        })     
    },
    'Verify query will work with entries in required fields only:QODC99 ': browser => {
        // Test  Case link https://dmutah.atlassian.net/browse/QODC-99
        wqRequired.forEach(warrentEntered  => {
            wantedQ
            enterWanted(wantedQ, warrentEntered, "Jimy Dean.A^.aje242135.Jim.F.W.711.274.Blue.Theft.1900-01-01......")
        })     
    },

}
