describe('login form', function() {
    it('should be possible to login', function() {
        browser.get('http://127.0.0.1:9002');

        element(by.css('.user-login-form input[type=text]')).sendKeys("username");
        element(by.css('.user-login-form input[type=password]')).sendKeys('password');
        element(by.css('.user-login-form button')).click();

        var loggedInView = element.all(by.css('.logged-in'));
        expect(loggedInView.count()).toEqual(1);
    });
});