import Page from './page.js'

class LoginPage extends Page {
    /**
     * define elements
     */
    get username () { return $('#user-name') }
    get password () { return $('#password') }
    get submitButton () { return $('input[type=submit]') }
    get peekRobo () { return $('div[class="peek"]')}
    get errorButton () {return $('button[class="error-button"]')}
    get alertBlockUser () {return $('h3[data-test="error"]')}

    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('/v1')
    }

    submit () {
        return this.submitButton.click()
    }
}

export default new LoginPage()