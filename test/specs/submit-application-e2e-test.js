describe('demo.asteriag.com submit application e2e test', () => {
    it('Submit Application', () => {
    browser.url('http://demo.asteriag.com');
        const accountsElement = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        //const accountsElement = $('a=Accounts');
        accountsElement.click();
        const inputFieldElement = $('#zipcode1');
        const goButtonElement = $('#gozip');
        //Set zip code
        inputFieldElement.setValue('80111');
        goButtonElement.click();

        //Select Account type and click open account button
        const checkingAndSavingsAccountCheckboxElement = $('#checkingsavings');
        const openAccountElement = $('#openaccount');
        checkingAndSavingsAccountCheckboxElement.click();
        openAccountElement.click();

        //Select Saving Plus NO and click go to application
        const noCheckboxElement = $('#savingplusno');
        const goToApplicationElement = $('#gotoapplication');
        noCheckboxElement.click();
        goToApplicationElement.click();

        //set user data and click continue
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
        //select USA
        const countryOptionUSAElement = $('option=USA');
        countryOptionUSAElement.click();
        //set DOB
        const dateOfBirthElement = $('#dateofbirth');
        dateOfBirthElement.setValue('10/05/1980');
        //select employment
        const financesOptionEmploymentElement = $('option=Employment');
        financesOptionEmploymentElement.click();
        //click continue button
        const continueElement = $('#continueapplication');
        continueElement.click();

        const ssnInputElement = $('#ssn');
        const submitButtonElement = $('#submit');
        //Set zip code
        ssnInputElement.setValue('45548888');
        submitButtonElement.click();

        //validate message
        const fieldLabelElement = $('article>div>p:nth-child(1)');
        const expectedFieldLabelText = "Your application was submitted successfully.";
        const actualLabelElementText = fieldLabelElement.getText();
        expect(actualLabelElementText).toBe(expectedFieldLabelText);
    });
});