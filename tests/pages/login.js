import { Selector } from 'testcafe';

export default class Login {
    constructor() {
        this.url              = Selector('https://gist.github.com/');
        this.signInBtn        = Selector("a[data-ga-click='Header, sign in']");
        this.usernameTxtField = Selector("input#login_field");
        this.passwordTxtField = Selector("input#password");
        this.submitButton     = Selector("input[type='submit']");
    }
}
