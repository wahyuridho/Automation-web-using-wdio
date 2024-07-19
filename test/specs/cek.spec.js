describe('Login page', () => {
    it('should open login page', async () => {
        await browser.url('https://sanbercode.com/login');

        const email = $('(//input[@name="email"]/parent::div[@class="col-xs-12"])[1]/child::*[2]')
        const password = $('//input[@id="password-field"]')
        const left = $('//a[@class="text-dark pull-left"]')
        const right = $('//a[@id="to-recover"]')
        const kirim = $('//button[@id="btnKirim"]')

        await email.addValue('Hahaha')
        await password.addValue('dafsfasfa')

        await kirim.click()

        await browser.pause(4000);
    });
})