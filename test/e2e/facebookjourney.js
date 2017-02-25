module.exports = {

    'facebook logintest' : function (browser) {

        browser
            .url('https://boughtbymany.com/offers/pet-insurance/landing-claim-your-discount/')
            .maximizeWindow()

            .waitForElementVisible('#button-join-via-facebook')
            .click('#button-join-via-facebook')

    },


    'facebook credentials' : function (browser) {
        browser
            .waitForElementVisible('#email')
            .setValue('#email','venkatdotteja@gmail.com')
            .waitForElementVisible('#pass')
            .setValue('#pass','SonyHpDell3')
            .click('#loginbutton')
    },


    'ContinuingTheQuoteProcess test' : function (browser) {
        browser
            .waitForElementVisible('#done-sharing')
            .click('#done-sharing')

    }


}