describe('demo.asteriag.com landing page', () => {
    it('Title validation', () => {
        browser.url('http://demo.asteriag.com');
        const title = browser.getTitle();
        expect(title).toBe('Asteria Bank – We Test For Better Software');
        const elements = $$('.menu-main-menu-container>ul>li>a');
        console.log('Elements:' + elements.length);
        elements.forEach(element => {
            console.log(element.getText());
        });
        expect($("ul[id='top-menu']").isExisting()).toBe(true);
    })
    it('Validate Accounts Link', () => {
        const accountsLink = $('a*=Account');
        expect(accountsLink.isExisting()).toBe(true);
        console.log(accountsLink.getCSSProperty('font-size'));
        accountsLink.click();
        const accountsTitle = $('.entry-title=Accounts');
        browser.pause(5000);
        expect(accountsTitle.isExisting()).toBe(true);
        expect()
    });
    it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
          e = 2.78;
    
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
      });
    it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
            e = 2.78;

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });
    it("works for simple literals and variables", function() {
        var a = '12 test';
        expect(a).toEqual('12 test');
      });
});
describe("The 'toContain' matcher", function() {
    it("works for finding an item in an Array", function() {
      var a = ["foo", "bar", "baz"];

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });

    it("also works for finding a substring", function() {
      var a = "foo bar baz";

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });
  });
  describe("The 'toEqual' matcher", function() {

    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
    it("The 'toMatch' matcher is for regular expressions", function() {
        var message = "foo bar baz";
    
        expect(message).toMatch("bar");

      });
  });