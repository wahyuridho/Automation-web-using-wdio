import LoginPage from "../pageobjects/login.page.js";
import ProductPage from "../pageobjects/product.page.js";
import { data } from "../data/data.js";

describe('Login Skenario', () => {
    it('Berhasil Login dengan kredential yang benar', async () => {
        await LoginPage.open()
        await LoginPage.username.addValue('standard_user')
        await LoginPage.password.addValue('secret_sauce')
        await LoginPage.submit()

        await browser.pause(2000)
        await expect(LoginPage.peekRobo).toBeDisplayed()


        
        for(let i = 0; i < data.length; i++){

            var productName = data[i].name;
            await ProductPage.setProductName(productName)
            const productPrice = await ProductPage.getProductPrice()
            // console.log(`Harga ${productName}: ${productPrice}`);

            expect(productPrice).toBe(data[i].price);
        }

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