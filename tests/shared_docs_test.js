import SignIn from './pages/login';
import GitsHome from './pages/gits_page';

fixture `Sample Automation Gits`
    .page `https://gist.github.com/`;

const login = new SignIn();
const gits = new GitsHome();

test('Test one', async t => {
    await t
        .maximizeWindow()
        .click(login.signInBtn);

    await t.expect(login.usernameTxtField.exists).ok();
    await t.expect(login.passwordTxtField.exists).ok();
    await t.expect(login.submitButton.exists).ok();

    await t
        .typeText(login.usernameTxtField, 'BuddyArifin')
        .typeText(login.passwordTxtField, 'arfaBarra1988')
        .click(login.submitButton);

    await t.expect(gits.addNewGits.exists).ok();

    await t
        .click(gits.addNewGits)
        .click(gits.desc)
        .typeText(gits.desc, 'WUAHAHA');
});
