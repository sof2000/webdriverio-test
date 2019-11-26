const menuLinksText = [
    "Accounts",
    "Business",
    "Loans",
    "Credit Cards",
    "Deposit",
    "Enroll"
]

function validateTextElement(selector, expectedValue) {
    // const pageElement = $(selector);
    // const expectedText = expectedValue;
    // const actualText = pageElement.getText();
    // expect(expectedText).toMatch(actualText);
    expect($(selector).getText()).toMatch(expectedValue);
}

function validatePlaceholderText(selector, expectedValue) {
    // const pageElement = $(selector);
    // const expectedText = expectedValue;
    // const actualText = pageElement.getAttribute('placeholder');
    // expect(expectedText).toMatch(actualText);
    expect($(selector).getAttribute('placeholder')).toMatch(expectedValue);
}

describe('demo.asteriag.com pages validation test suite', () => {
    browser.url('http://demo.asteriag.com');
    it('Landing page validation', () => {
        browser.navigateTo('http://demo.asteriag.com');
        const title = browser.getTitle();
        expect(title).toBe('Asteria Bank – We Test For Better Software');
        //Image validation
        const imageElement = $('#wp-custom-header>img');
        expect(imageElement.isExisting()).toBe(true);
        //top menu validation
        const topMenuElement = $('#top-menu');
        expect(topMenuElement.isExisting()).toBe(true);
        //Menu links validation
        const elements = $$('.menu-main-menu-container>ul>li>a');
        let i = 0;
        elements.forEach(element => {
            expect(element.getText()).toMatch(menuLinksText[i]);
            i++;
        });

    });

    it('Validation Accounts page', () => {
        browser.navigateTo('http://demo.asteriag.com/accounts');
        //validate page title
        // const pageTitleElement = $("h1[class='entry-title']");
        // const expectedTitle = 'ACCOUNTS';
        // const actualTitle = pageTitleElement.getText();
        // expect(expectedTitle).toMatch(actualTitle);
        validateTextElement("h1[class='entry-title']", 'ACCOUNTS');

        //validate input field label
        const fieldLabelElement = $('article>div>p:nth-child(1)');
        const expectedFieldLabelText = "Please, Enter your Zip Code:";
        const actualLabelElementText = fieldLabelElement.getText();
        expect(actualLabelElementText).toBe(expectedFieldLabelText);
        //validate input field
        const inputFieldElement = $('#zipcode1');
        expect(inputFieldElement.isExisting()).toBe(true);

        //validate place holder
        // const expectedInputFieldPlaceholderText = 'Zip Code';
        // const actualInputFieldPlaceholderText = inputFieldElement.getAttribute('placeholder');
        // expect(actualInputFieldPlaceholderText).toBe(expectedInputFieldPlaceholderText);
        validatePlaceholderText(inputFieldElement, 'Zip Code');


        //validate go button
        const goButtonElement = $('#gozip');
        expect(goButtonElement.isClickable()).toBe(true);
        //validate go button text
        const expectedGoButtonText = 'GO';
        const actualGoButtonText = goButtonElement.getText();
        expect(actualGoButtonText).toMatch(expectedGoButtonText);
    });

    
    it('Validate Choose Account Type Page', () => {
        browser.navigateTo('http://demo.asteriag.com/choose-account-type');
        //validate page title
        const pageTitleElement = $("h1[class='entry-title']");
        const expectedTitle = 'CHOOSE ACCOUNT TYPE';
        const actualTitle = pageTitleElement.getText();
        expect(expectedTitle).toMatch(actualTitle);
        //validate Checking Account checkbox
        const checkingAccountCheckboxElement = $('#checking');
        expect(checkingAccountCheckboxElement.isExisting()).toBe(true);
        //validate Checking Account Label
        const checkingAccountCheckboxLabelElement = $("label[for='checking']");
        const expectedCheckingAccountCheckboxLabelText = 'Checking Account';
        const actualCheckingAccountCheckboxLabelText = checkingAccountCheckboxLabelElement.getText();
        expect(expectedCheckingAccountCheckboxLabelText).toMatch(actualCheckingAccountCheckboxLabelText)
        //validate Savings Account checkbox
        const savingsAccountCheckboxElement = $('#savings');
        expect(savingsAccountCheckboxElement.isExisting()).toBe(true);
        //validate Savings Account Label
        const savingsAccountCheckboxLabelElement = $("label[for='savings']");
        const expectedSavingsAccountCheckboxLabelText = 'Savings Account';
        const actualSavingsAccountCheckboxLabelText = savingsAccountCheckboxLabelElement.getText();
        expect(expectedSavingsAccountCheckboxLabelText).toMatch(actualSavingsAccountCheckboxLabelText)
        //validate Checking and Savings Account checkbox
        const checkingAndSavingsAccountCheckboxElement = $('#checkingsavings');
        expect(checkingAndSavingsAccountCheckboxElement.isExisting()).toBe(true);
        //validate Checking and Savings Account Label
        const checkingAndSavingsAccountCheckboxLabelElement = $("label[for='checkingsavings']");
        const expectedCheckingAndSavingsAccountCheckboxLabelText = 'Checking and Savings Accounts';
        const actualCheckingAndSavingsAccountCheckboxLabelText = checkingAndSavingsAccountCheckboxLabelElement.getText();
        expect(expectedCheckingAndSavingsAccountCheckboxLabelText).toMatch(actualCheckingAndSavingsAccountCheckboxLabelText);
        //validate Open Account button
        const openAccountElement = $('#openaccount');
        expect(openAccountElement.isExisting()).toBe(true);
        //validate Open Account button text
        const expectedOpenAccountText = 'Open Account';
        const actualOpenAccountText = openAccountElement.getText();
        expect(expectedOpenAccountText).toMatch(actualOpenAccountText);
    });


    it('Validate Before you Apply Page', () => {
        browser.navigateTo('http://demo.asteriag.com/before-you-apply');
        //validate page title
        const pageTitleElement = $("h1[class='entry-title']");
        const expectedTitle = 'BEFORE YOU APPLY';
        const actualTitle = pageTitleElement.getText();
        expect(expectedTitle).toMatch(actualTitle);
        //validate Page Content
        const pageContentElement = $('.entry-content > p');
        const expectedContentText = 'Add a Savings Plus® account to your account?';
        const actualContentText = pageContentElement.getText();
        expect(expectedContentText).toMatch(actualContentText);
        //validate YES checkbox
        const yesCheckboxElement = $('#savingplusyes');
        expect(yesCheckboxElement.isExisting()).toBe(true);
        //validate YES Label
        const yesCheckboxLabelElement = $("label[for='savingplusyes']");
        const expectedYesCheckboxLabelText = 'YES';
        const actualYesCheckboxLabelText = yesCheckboxLabelElement.getText();
        expect(expectedYesCheckboxLabelText).toMatch(actualYesCheckboxLabelText)
       //validate NO checkbox
       const noCheckboxElement = $('#savingplusno');
       expect(noCheckboxElement.isExisting()).toBe(true);
       //validate NO Label
       const noCheckboxLabelElement = $("label[for='savingplusno']");
       const expectedNoCheckboxLabelText = 'NO';
       const actualNoCheckboxLabelText = noCheckboxLabelElement.getText();
       expect(expectedNoCheckboxLabelText).toMatch(actualNoCheckboxLabelText)
        //validate Go to Application button
        const goToApplicationElement = $('#gotoapplication');
        expect(goToApplicationElement.isExisting()).toBe(true);
        //validate Open Account button text
        const expectedGoToApplicationText = 'Go to Application';
        const actualGoToApplicationText = goToApplicationElement.getText();
        expect(expectedGoToApplicationText).toMatch(actualGoToApplicationText);
    });


    it('Validate Application Page', () => {
        browser.navigateTo('http://demo.asteriag.com/application');
        //validate page title
        const pageTitleElement = $("h1[class='entry-title']");
        const expectedTitle = 'APPLICATION';
        const actualTitle = pageTitleElement.getText();
        expect(expectedTitle).toMatch(actualTitle);
        //validate First Name field
        const firstNameElement = $('#firstname');
        expect(firstNameElement.isExisting()).toBe(true);
        //validate Middle Name field
        const middleNameElement = $('#middlename');
        expect(middleNameElement.isExisting()).toBe(true);
        //validate Last Name field
        const lastNameElement = $('#lastname');
        expect(lastNameElement.isExisting()).toBe(true);
        //validate Address 1 field
        const address1Element = $('#address1');
        expect(address1Element.isExisting()).toBe(true);
        //validate Address 2 field
        const address2Element = $('#address2');
        expect(address2Element.isExisting()).toBe(true);
        //validate City field
        const cityElement = $('#city');
        expect(cityElement.isExisting()).toBe(true);
        //validate State drop-down
        const stateElement = $('#state');
        expect(stateElement.isExisting()).toBe(true);
        //validate zip code field
        const zipCodeElement = $('#zipcode2');
        expect(zipCodeElement.isExisting()).toBe(true);
        //validate email field
        const emailElement = $('#email');
        expect(emailElement.isExisting()).toBe(true);
        //validate reemail field
        const reemailElement = $('#reemail');
        expect(reemailElement.isExisting()).toBe(true);
        //validate phone field
        const phoneElement = $('#phone');
        expect(phoneElement.isExisting()).toBe(true);
        //validate phone type field
        const phoneTypeElement = $('#phonetype');
        expect(phoneTypeElement.isExisting()).toBe(true);
        //validate Citizen YES checkbox
        const citizenYesElement = $('#citizenyes');
        expect(citizenYesElement.isExisting()).toBe(true);
        //validate Citizen NO checkbox
        const citizenNoElement = $('#citizenno');
        expect(citizenNoElement.isExisting()).toBe(true);
        //validate Dual Citizenship YES checkbox
        const dualCitizenYesElement = $('#citizedualnyes');
        expect(dualCitizenYesElement.isExisting()).toBe(true);
        //validate Dual Citizenship NO checkbox
        const dualCitizenNoElement = $('#citizendualno');
        expect(dualCitizenNoElement.isExisting()).toBe(true);
        //validate phone field
        const countryElement = $('#country');
        expect(countryElement.isExisting()).toBe(true);
        //validate Date of Birth field
        const dateOfBirthElement = $('#dateofbirth');
        expect(dateOfBirthElement.isExisting()).toBe(true);
        //validate Finances field
        const financesElement = $('#finances');
        expect(financesElement.isExisting()).toBe(true);
        //validate Go to Application button
        const continueElement = $('#continueapplication');
        expect(continueElement.isExisting()).toBe(true);
    });

    it('Validation ACCOUNT SETUP page', () => {
        browser.navigateTo('http://demo.asteriag.com/account-setup');
        //validate page title
        const pageTitleElement = $("h1[class='entry-title']");
        const expectedTitle = 'ACCOUNT SETUP';
        const actualTitle = pageTitleElement.getText();
        expect(expectedTitle).toMatch(actualTitle);
        //validate input field label
        const fieldLabelElement = $('article>div>p:nth-child(1)');
        const expectedFieldLabelText = "Please provide your SSN:";
        const actualLabelElementText = fieldLabelElement.getText();
        expect(actualLabelElementText).toBe(expectedFieldLabelText);
        //validate input field
        const inputFieldElement = $('#ssn');
        expect(inputFieldElement.isExisting()).toBe(true);
        //validate place holder
        const expectedInputFieldPlaceholderText = 'SSN';
        const actualInputFieldPlaceholderText = inputFieldElement.getAttribute('placeholder');
        expect(actualInputFieldPlaceholderText).toBe(expectedInputFieldPlaceholderText);
        //validate submit button
        const submitButtonElement = $('#submit');
        expect(submitButtonElement.isClickable()).toBe(true);
        //validate submit button text
        const expectedSubmitButtonText = 'Submit';
        const actualSubmitButtonText = submitButtonElement.getText();
        expect(actualSubmitButtonText).toMatch(expectedSubmitButtonText);
    });

    it('Validation CONFIRMATION page', () => {
        browser.navigateTo('http://demo.asteriag.com/confirmation');
        //validate page title
        const pageTitleElement = $("h1[class='entry-title']");
        const expectedTitle = 'CONFIRMATION';
        const actualTitle = pageTitleElement.getText();
        expect(expectedTitle).toMatch(actualTitle);
    });
    it('Validation CONFIRMATION message', () => {
        //validate message
        const fieldLabelElement = $('article>div>p:nth-child(1)');
        const expectedFieldLabelText = "Your application was submitted successfully.";
        const actualLabelElementText = fieldLabelElement.getText();
        expect(actualLabelElementText).toBe(expectedFieldLabelText);
    });

});