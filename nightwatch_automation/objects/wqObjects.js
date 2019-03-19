var wantedQueriesCommands = {
    enterInFields: function(wantedInfo){
        if(wantedInfo.header){
            this
                .click('@header')
                .clearValue('@header')
                .setValue('@header', wantedInfo.header)
            }
            if(wantedInfo.mke){
                this
                .click('@mke')
                .clearValue('@mke')
                .setValue('@mke', wantedInfo.mke)
            }
            if(wantedInfo.oai){
                this
                .click('@oai')
                .clearValue('@oai')
                .setValue('@oai', wantedInfo.oai)
            }
            if(wantedInfo.name){
                this
                .click('@name')
                .clearValue('@name')
                .setValue('@name', wantedInfo.name)
            }
            if(wantedInfo.sex){
                this
                .click('@sex')
                .clearValue('@sex')
                .setValue('@sex', wantedInfo.sex)
            }
            if(wantedInfo.ethnicity){
                this
                .click('@ethnicity')
                .clearValue('@ethnicity')
                .setValue('@ethnicity', wantedInfo.ethnicity)
            }
            if(wantedInfo.height){
                this
                .click('@height')
                .clearValue('@height')
                .setValue('@height', wantedInfo.height)
            }
            if(wantedInfo.weight){
                this
                .click('@weight')
                .clearValue('@weight')
                .setValue('@weight', wantedInfo.weight)
            }
            if(wantedInfo.hair){
                this
                .click('@hair')
                .clearValue('@hair')
                .setValue('@hair', wantedInfo.hair)
            }
            if(wantedInfo.offense){
                this
                .click('@offense')
                .clearValue('@offense')
                .setValue('@offense', wantedInfo.offense)
            }
            if(wantedInfo.warrentDate){
                this
                .click('@warrentDate')
                .clearValue('@warrentDate')
                .setValue('@warrentDate', wantedInfo.warrentDate)
            }
            if(wantedInfo.license){
                this
                .click('@license')
                .clearValue('@license')
                .setValue('@license', wantedInfo.license)
            }
            if(wantedInfo.dlState){
                this
                .click('@dlState')
                .clearValue('@dlState')
                .setValue('@dlState', wantedInfo.dlState)
            }
            if(wantedInfo.dlExpire){
                this
                .click('@dlExpire')
                .clearValue('@dlExpire')
                .setValue('@dlExpire', wantedInfo.dlExpire)
            }
            if(wantedInfo.plate){
                this
                .click('@plate')
                .clearValue('@plate')
                .setValue('@plate', wantedInfo.plate)
            }
            if(wantedInfo.plState){
                this
                .click('@plState')
                .clearValue('@plState')
                .setValue('@plState', wantedInfo.plState)
            }
            if(wantedInfo.plDate){
                this
                .click('@plDate')
                .clearValue('@plDate')
                .setValue('@plDate', wantedInfo.plDate)
        }
        return this
    },

}


module.exports = {
    url: 'http://localhost:3000/#/enter',
    commands: [wantedQueriesCommands],
    elements: {
        versionNumber: 'h6',
        submit: 'button[id="saveBtn"]',
        clear:  'button[id="clearBtn"]',
        popOutBtn: 'div.bm-burger-button',
        resultBody: 'span[name="queryBody"]',
        errorMessage: {
            selector: '//li[@class="errorMessage"]',
            locateStrategy: 'xpath' 
        },
        homeLink: 'p[name="homeOption"]',
        enterWantedLink: 'p[name="enterOption"]',
        modifyWantedLink: 'p[name="modifyOption"]',
        cancelWantedLink: 'p[name="cancelOption"]',
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'select[name="sexInput"]',
        ethnicity: 'select[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]', 
        offense: 'input[name="offInput"]', 
        warrentDate: 'input[name="dowInput"]', 
        license: 'input[name="olnInput"]', 
        dlState: 'input[name="olsInput"]', 
        dlExpire: 'input[name="oldInput"]', 
        plate: 'input[name="licInput"]', 
        plState: 'input[name="lisInput"]', 
        plDate: 'input[name="lidInput"]',
    }
}