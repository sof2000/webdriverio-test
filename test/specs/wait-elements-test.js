describe('demo.asteriag.com submit application e2e test', () => {
    it('Submit Application', () => {
    browser.url('http://demo.asteriag.com');
        const title = browser.getTitle();
        expect(title).toBe('Asteria Bank – We Test For Better Software');

        const accountsElement = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        //accountsElement.waitForExist();
        //accountsElement.waitForExist(5000, true);
        //accountsElement.waitForExist(undefined, true);
        //accountsElement.waitForExist(undefined, true, 'ERROR Message custom');
        //accountsElement.waitForExist(undefined, false, 'ERROR Message custom');
        accountsElement.click();
        const inputFieldElement = $('#zipcode1');
        //inputFieldElement.waitForDisplayed();
        //inputFieldElement.waitForDisplayed(5000, true);
        //inputFieldElement.waitForDisplayed(undefined, true, 'STILL DISPLAYED ERROR');
        inputFieldElement.waitForDisplayed(5000);
        const goButtonElement = $('#gozip');
        goButtonElement.waitForEnabled();
        //Set zip code
        inputFieldElement.setValue('80111');
        goButtonElement.click();
    });
});