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
    it('Accounts Link Text validation', () => {
        const accountsElement = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        expect(accountsElement.getText()).toMatch('Accounts');
    });

    it('Business Link validation', () => {
        const businessElement = $('.menu-main-menu-container>ul>li:nth-child(2)>a');
        expect(businessElement.isExisting()).toBe(true);
    });
    it('Business Link Text validation', () => {
        const businessElement = $('.menu-main-menu-container>ul>li:nth-child(2)>a');
        expect(businessElement.getText()).toMatch('Business');
    });

    it('Loans Link validation', () => {
        const loansElement = $('.menu-main-menu-container>ul>li:nth-child(3)>a');
        expect(loansElement.isExisting()).toBe(true);
    });
    it('Loans Link Text validation', () => {
        const loansElement = $('.menu-main-menu-container>ul>li:nth-child(3)>a');
        expect(loansElement.getText()).toMatch('Loans');
    });

    it('Credit Cards Link validation', () => {
        const creditCardElement = $('.menu-main-menu-container>ul>li:nth-child(4)>a');
        expect(creditCardElement.isExisting()).toBe(true);
    });
    it('Credit Cards Link Text validation', () => {
        const creditCardElement = $('.menu-main-menu-container>ul>li:nth-child(4)>a');
        expect(creditCardElement.getText()).toMatch('Credit Cards');
    });

    it('Deposit Link validation', () => {
        const depositElement = $('.menu-main-menu-container>ul>li:nth-child(5)>a');
        expect(depositElement.isClickable()).toBe(true);
    });
    it('Deposit Link Text validation', () => {
        const depositElement = $('.menu-main-menu-container>ul>li:nth-child(5)>a');
        expect(depositElement.getText()).toMatch('Deposit');
    });

    it('Enroll Link validation', () => {
        const enrollElement = $('.menu-main-menu-container>ul>li:nth-child(6)>a');
        expect(enrollElement.isDisplayed()).toBe(true);
    });
    it('Enroll Link Text validation', () => {
        const enrollElement = $('.menu-main-menu-container>ul>li:nth-child(6)>a');
        expect(enrollElement.getText()).toContain('Enroll');
    });
    it('Arrow down button validation', () => {
        const arrowElement = $('.menu-scroll-down');
        expect(arrowElement.isExisting()).toBe(true);
    });

});