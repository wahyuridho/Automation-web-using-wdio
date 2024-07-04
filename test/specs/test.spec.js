import LoginPage from "../pageobjects/login.page.js";

describe('Login Skenario', () => {
    it('Berhasil Login dengan kredential yang benar', async () => {
        await LoginPage.open()
        await LoginPage.username.addValue('standard_user')
        await LoginPage.password.addValue('secret_sauce')
        await LoginPage.submit()

        await browser.pause(2000)
        await expect(LoginPage.peekRobo).toBeDisplayed()
    })

    it('Muncul Error saat login dengan kredential yang diblokir', async () => {
        await LoginPage.open()
        await LoginPage.username.addValue('locked_out_user')
        await LoginPage.password.addValue('secret_sauce')
        await LoginPage.submit()

        await expect(LoginPage.errorButton).toBeDisplayed()
        await expect(LoginPage.alertBlockUser).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        await browser.pause(2000)
    })
})