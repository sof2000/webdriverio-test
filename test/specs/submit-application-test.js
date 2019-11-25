describe('demo.asteriag.com landing page', () => {
    browser.url('http://demo.asteriag.com');
    it('Title validation', () => {
        
        const title = browser.getTitle();
        expect(title).toBe('Asteria Bank – We Test For Better Software');
    });
    it('Image validation', () => {
        const imageElement = $('#wp-custom-header>img');
        expect(imageElement.isExisting()).toBe(true);
    });
    it('Top menu validation', () => {
        const topMenuElement = $('#top-menu');
        expect(topMenuElement.isExisting()).toBe(true);
    });
    it('Accounts Link validation', () => {
        const accountsElement = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        expect(accountsElement.isExisting()).toBe(true);
    });
    it('Click Accounts Link Text validation', () => {
        const accountsElement = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        expect(accountsElement.isClickable()).toBe(true);
        accountsElement.click();
        //browser.pause(2000);
    });

    it('Validation Accounts page', () => {
        // Element may have dynamic ID id=post-37
        //validate page title
        const pageTitleElement = $("h1[class='entry-title']");
        const expectedTitle = 'ACCOUNTS';
        const actualTitle = pageTitleElement.getText();
        //expect(pageTitleElement.getText()).toMatch('Accounts');
        //expect(pageTitleElement.getText()).toMatch('ACCOUNTS');
        expect(expectedTitle).toMatch(actualTitle);
        //validate input field label
        const fieldLabelElement = $('article>div>p:nth-child(1)');
        const expectedFieldLabelText = "Please, Enter your Zip Code:";
        const actualLabelElementText = fieldLabelElement.getText();
        expect(actualLabelElementText).toBe(expectedFieldLabelText);
        //validate input field
        const inputFieldElement = $('#zipcode1');
        expect(inputFieldElement.isExisting()).toBe(true);
        //validate place holder
        const expectedInputFieldPlaceholderText = 'Zip Code';
        const actualInputFieldPlaceholderText = inputFieldElement.getAttribute('placeholder');
        expect(actualInputFieldPlaceholderText).toBe(expectedInputFieldPlaceholderText);
        //validate go button
        const goButtonElement = $('#gozip');
        expect(goButtonElement.isClickable()).toBe(true);
        //validate go button text
        const expectedGoButtonText = 'GO';
        const actualGoButtonText = goButtonElement.getText();
        expect(actualGoButtonText).toMatch(expectedGoButtonText);
    });
    it('Set zip code and click GO button', () => {
        const inputFieldElement = $('#zipcode1');
        const goButtonElement = $('#gozip');
         //Set zip code
         inputFieldElement.setValue('80111');
         goButtonElement.click();
    });

    
    it('Validate Choose Account Type Page', () => {
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

    it('Check account type and click Open Account button', () => {
        const checkingAndSavingsAccountCheckboxElement = $('#checkingsavings');
        const openAccountElement = $('#openaccount');
        checkingAndSavingsAccountCheckboxElement.click();
        openAccountElement.click();
    });

    it('Validate Before you Apply Page', () => {
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

    it('Check option and click Go To Application button', () => {
        const noCheckboxElement = $('#savingplusno');
        const goToApplicationElement = $('#gotoapplication');
        noCheckboxElement.click();
        goToApplicationElement.click();
    });

    it('Validate Application Page', () => {
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
    it('Set values and click Continue button', () => {
        const firstNameElement = $('#firstname');
        firstNameElement.setValue('First Name')
        const lastNameElement = $('#lastname');
        lastNameElement.setValue('Last Name')
        const address1Element = $('#address1');
        address1Element.setValue('Address street')
        const address2Element = $('#address2');
        address2Element.setValue('Address avenue')
        const cityElement = $('#city');
        cityElement.setValue('Denver')
        const stateOption2Element = $('#state>option:nth-child(2)');
        stateOption2Element.click();
        const zipCodeElement = $('#zipcode2');
        zipCodeElement.setValue('80111')
        const emailElement = $('#email');
        emailElement.setValue('test@mail.com');
        const reemailElement = $('#reemail');
        reemailElement.setValue('test@mail.com')
        const phoneElement = $('#phone');
        phoneElement.setValue('5555555');
        const phoneTypeOptionCellElement = $('option=Cell');
        phoneTypeOptionCellElement.click();
        const citizenYesElement = $('#citizenyes');
        citizenYesElement.click();;
        const dualCitizenNoElement = $('#citizendualno');
        dualCitizenNoElement.click();
        //validate phone field
        const countryOptionUSAElement = $('option=USA');
        countryOptionUSAElement.click();
        //validate Date of Birth field
        const dateOfBirthElement = $('#dateofbirth');
        dateOfBirthElement.setValue('10/05/1980');
        //validate Finances field
        const financesOptionEmploymentElement = $('option=Employment');
        financesOptionEmploymentElement.click();
        //validate Go to Application button
        const continueElement = $('#continueapplication');
        continueElement.click();
    });

});