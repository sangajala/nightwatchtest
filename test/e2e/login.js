/*
var conf = require('../../nightwatch.conf.js');
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth()+1
var year = currentDate.getFullYear()
module.exports = {

    'Demo test ': function (browser)
    {
        browser

            .url('https://bbm:bbm66m@uat.boughtbymany.com/quotes/cat-dog/#/pet-details')
            //.url('https://bbm:bbm66m@staging.boughtbymany.com/quotes/cat-dog/#/pet-details
            .maximizeWindow()


            // Expect to be redirected to login
            .assert.visible('#id_username')


            // Set login info
            .setValue('#id_username', 'surya@boughtbymany.com')
            .setValue('#id_password', 'SonyHpDell3')


            // Submit login
            .click('body .form-wrap .button')

            // Check we have the Q/B
            .waitForElementVisible('.panel-pet-details')



            // Start the Q/B

            .waitForElementVisible('#app > div > section > div.splash.fullheight > div > a')
            .click('#app > div > section > div.splash.fullheight > div > a')

            // clicking on the pet
            .pause(1000)

          //.waitForElementVisible('#insured_entities_1_species .mutt-natural-trigger')
            .click('#insured_entities_1_species .mutt-natural-trigger')

            //selecting the pet-dog
            //.pause(1000)
            .waitForElementVisible('#insured_entities_1_species > div > div.mutt-natural-modal-inner > div > div:nth-child(2) > label')
            .click('#insured_entities_1_species > div > div.mutt-natural-modal-inner > div > div:nth-child(2) > label')

            // clicking on the name button
            //.pause(500)
            .waitForElementVisible('#insured_entities_1_pet_name .mutt-natural-trigger')
            .click('#insured_entities_1_pet_name .mutt-natural-trigger')



            // entering the name of the pet
            //.pause(500)
            .waitForElementVisible('#insured_entities_1_pet_name > div > div.mutt-natural-modal-inner > input')
            .setValue('#insured_entities_1_pet_name > div > div.mutt-natural-modal-inner > input','test')
            .click('#insured_entities_1_pet_name > div > div.mutt-natural-modal-inner > button')

            //clicking on breed selection

            //.pause(500)
            .waitForElementVisible('#insured_entities_1_breed .mutt-natural-trigger')
            .click('#insured_entities_1_breed .mutt-natural-trigger')



            // selecting breed

            .click('#breed-modal-1 > div > div > div.mutt-field-radio-item.mutt-field-radio-item--first > label')


            // entering the breed
            .setValue('#insured_entities_1_breed > div > div.mutt-natural-modal-inner.breed-modal > input.mutt-natural-autocomplete', 'p')
            .pause(500)
            .setValue('#insured_entities_1_breed > div > div.mutt-natural-modal-inner.breed-modal > input.mutt-natural-autocomplete', 'u')
            .pause(500)
            .setValue('#insured_entities_1_breed > div > div.mutt-natural-modal-inner.breed-modal > input.mutt-natural-autocomplete', 'g')
            .pause(500)


        // clicking on the breed

            .waitForElementVisible('.mutt-autocomplete-dropdown.mutt-autocomplete-dropdown-show .mutt-autocomplete-dropdown__listitem[data-selectvalue="PUG"]')
            .click('.mutt-autocomplete-dropdown.mutt-autocomplete-dropdown-show .mutt-autocomplete-dropdown__listitem[data-selectvalue="PUG"]')
            .pause(500)


            // click on the done button
            .click('#insured_entities_1_breed > div > div.mutt-natural-modal-inner.breed-modal > button')

            // click on Date of Birth
            .pause(500)
            .click('#insured_entities_1_dob .mutt-natural-trigger')


            // select a day
            .pause(500)
            //.click('#insured_entities_1_dob .mutt-natural-modal-inner .mutt-date-selector dob-day')
            .click('#insured_entities_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(2)')


            // select a month
            .pause(500)
            .click('#insured_entities_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(3)')

        // select an year
            .pause(500)
            .click('#insured_entities_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(4)')

        // done button
            .pause(500)
            .click('#insured_entities_1_dob .mutt-natural-toggle')

        // pet gender click
            .pause(500)
            .click('#insured_entities_1_gender .mutt-natural-trigger')

        // Gender selection
            .pause(500)
            .click('#insured_entities_1_gender > div > div.mutt-natural-modal-inner > div > div:nth-child(1) > label')

        // health issue
            .pause(500)
            .click('#insured_entities_1_healthy .mutt-natural-trigger')


        // selecting pet health issue
            .pause(500)
            .click('#insured_entities_1_healthy > div > div.mutt-natural-modal-inner > div > div:nth-child(2) > label')


        // spayed or neutered
            .pause(500)
            .click('#insured_entities_1_spayed_neutered .mutt-natural-trigger')


        // selecting the spayed or neutered status
            .pause(500)
            .click('#insured_entities_1_spayed_neutered > div > div.mutt-natural-modal-inner > div > div:nth-child(2) > label')

        //clicking on pet value
            .pause(500)
            .click('#insured_entities_1_value .mutt-natural-trigger')

        // entering the pet value
            .pause(500)
            .setValue('#insured_entities_1_value > div > div.mutt-natural-modal-inner > div > input','400')

        // clicking on done button

            .pause(500)
            .click('#insured_entities_1_value .mutt-natural-toggle')

        // clicking on address
            .pause(500)
            .click('#insured_entities_1_pet_address_postcode .mutt-natural-trigger')


        // entering the address

            .pause(500)
            .setValue('#insured_entities_1_pet_address_postcode > div > div.mutt-natural-modal-inner > input','E')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode > div > div.mutt-natural-modal-inner > input','6')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode > div > div.mutt-natural-modal-inner > input',' 2')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode > div > div.mutt-natural-modal-inner > input','E')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode > div > div.mutt-natural-modal-inner > input','A')
            .pause(1000)
            .click('body > div.pca > div:nth-child(7) > div.pca.pcalist > div.pcaitem.pcafirstitem')


        // clicking on the done button

            .pause(500)
            .click('#insured_entities_1_pet_address_postcode .mutt-natural-toggle')

        // clicking on the continue button
            .pause(500)
            .click('#insured_entities_field_1 > div > div > div.mutt-button-wrapper > button.mutt-button.btn.space-right.space-left')





        //waiting for the page to load
            //.pause(5000)
            //.waitForElementVisible('h5.tighten')

            .waitForElementVisible('h1.fullstop')

            // <h1 class="fullstop flow">
            //  Policies for <span class="capitalise">test</span></h1>


        // clicking in select on the policy

        //.click('body .form-wrap .button')
            .click('body.btn--wide .button')
        .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60.policy-card-wrapper > div > div:nth-child(1) > div:nth-child(3) > article > div.product-option__foot.center > button')


        // adding pass away cover
            .pause(500)
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60 > div > div.row > div.col-sm-5.col-md-7 > ul > li:nth-child(1) > div > a')

        // adding theft loss cover
            .pause(500)
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60 > div > div.row > div.col-sm-5.col-md-7 > ul > li:nth-child(2) > div > a')

        // adding travel cover
            .pause(500)
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60 > div > div.row > div.col-sm-5.col-md-7 > ul > li:nth-child(3) > div > a')

        // clicking on the continue button in the policy page

            .pause(500)
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60 > div > div.row > div.col-sm-7.col-md-5 > div.hidden-xs > div > div > div.product-option__foot.clearfix.hidden-xs > button:nth-child(2)')

        // verfiying the land on the personal details page

            .waitForElementVisible('h1.fullstop.flow')

        // in the personal details page
            //.pause(500)
            .click('#policy_holders_1_title > span > a')
            .click('#policy_holders_1_title .mutt-natural-trigger')

        // selecting the saluation
            .pause(500)
            .click('#policy_holders_1_title > div > div.mutt-natural-modal-inner > div > div:nth-child(1) > label')

        // clicking on first name
            .pause(500)
            .click('#policy_holders_1_first_name > span > a')


        // entering the first name
            .pause(500)

            .setValue('#policy_holders_1_first_name > div > div.mutt-natural-modal-inner > input','automation')

        // clicking on done button

            .pause(500)
            .click('#policy_holders_1_first_name > div > div.mutt-natural-modal-inner > button')

        //clicking on second name
            .pause(200)
            .click('#policy_holders_1_last_name')

        // entering the second name
            .pause(200)
            .setValue('#policy_holders_1_last_name > div > div.mutt-natural-modal-inner > input','test')

        // click on done
            .pause(500)
            .click('#policy_holders_1_last_name .mutt-natural-toggle')


        // clicking on the date of birth
            .pause(300)
            .click('#policy_holders_1_dob .mutt-natural-trigger')

        // clicking on day

            .pause(300)
            .click('#policy_holders_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(2)')

         // selecting day
            .setValue('#policy_holders_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(2)','18')

        //clicking on month
            .pause(300)
            .click('#policy_holders_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(3)')

        // selecting the month
            .setValue('#policy_holders_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(3)','May')

        // clicking on year
            .pause(300)
            .click('#policy_holders_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(4)')
        //selecting the year

            .setValue('#policy_holders_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(4)','1989')

        // clicking on done button

            .click('#policy_holders_1_dob .mutt-natural-toggle')


        // clicking on the phone number
            .click('#policy_holders_1_telephone .mutt-natural-trigger')


        // entering the phone number

            .pause(300)
            .setValue('#policy_holders_1_telephone > div > div.mutt-natural-modal-inner > input','07000000000')

        // clicking on done button

            .pause(300)
            .click('#policy_holders_1_telephone .mutt-natural-toggle')


        // clicking on the continue button

            .pause(500)
            .click('#user-details .mutt-button')


        // verifying the land on the policy summary page

            .waitForElementVisible('h1.fullstop.flow-sm')


        // clicking on today button for the policy to start
            .pause(300)
            .click('#app > div > div > div:nth-child(3) > div > div > ul > li:nth-child(1) > button')

        // clicking on tommorrow button for the policy start date

            .pause(500)
            .click('#app > div > div > div:nth-child(3) > div > div > ul > li:nth-child(2) > button')



         // clicking the choose a date
            .pause(500)
            .click('#app > div > div > div:nth-child(3) > div > div > ul > li:nth-child(3) > button')


         // selecting a day
            .pause(300)
            .click('#policy_inception_date > div > select:nth-child(2)')
            .setValue('#policy_inception_date > div > select:nth-child(2)', day)


            // selecting the month
            .pause(300)
            .click('#policy_inception_date > div > select:nth-child(3)')
            .setValue('#policy_inception_date > div > select:nth-child(3)', month)

            // selecting the year
            .pause(300)
            .click('#policy_inception_date > div > select:nth-child(4)')
            .setValue('#policy_inception_date > div > select:nth-child(4)', year)


            // clicking on the continue button in the policy summary page

            .pause(400)
            .click('#summary > div > button')

            // verifying the landing page
            .waitForElementVisible('h1.fullstop.center')


            //clicking on the declaration radio button

            .waitForElementVisible('#policy_holders_1_agree_terms > label')
            .click('#policy_holders_1_agree_terms > label')

            // clicking on I agree button
            .pause(300)
            .click('#confirm > div > button.mutt-button')

            // verifying the landing page
            .waitForElementVisible('#payment_direct_debit_account_name > input')

            //entering the account number- paying via Direct Debit
            .setValue('#payment_direct_debit_account_name > input','Automation Test')

            // entering the account number
            .pause(300)
            .setValue('#payment_direct_debit_account_number > input','55779911')

            //entering the sort code
            .pause(300)
            .setValue('#payment_direct_debit_sort_code > input','200000')


            // clicking on continue and pay

            //.click('#payment_payment_type .button.btn.btn--icon')
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div.panel-payment > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.center.flow > button')

            // verifying the landing page-my account page
            .waitForElementVisible('h1.fullstop.flow-sm')


// policy-details
          // .click('#id_crossbreed1')
        // .click('#id_mixedbreed1')
//   #insured_entities_1_dob > div > div.mutt-natural-modal-inner > div > select:nth-child(2)
      //  <a class="btn">Let's get started</a>
        //!*[@id="app"]/div/section/div[1]/div/a
//!*[@id="app"]/div/section/div[1]/div/a
// browser.assert.containsText("","") 
// browser.elementIdClick(browser.element('link text','login').ELEMENT); 
// .click(utilfile.loginbutton)   
// visit the url 
// .waitForElementVisible('body');
// wait for the body to be rendered 
// check if we are seeing the Mobile Version of GitHub    
// .waitForElementVisible('email')
// wait for the body to be rendered  
// .waitForElementVisible(By.id('id_username')) 
// .setValue('input[type=email]','surya@boughtbymany.com') 
// .sendKeys('surya@boughtbymany.com') 
// .setValue('input[type=text]','surya@boughtbymany.com') 
// .waitForElementVisible('Find out more',1000) 
// .click('Find out more')   
// part two: 

            .end()
    }


};


*/
