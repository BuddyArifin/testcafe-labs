const {Given, When, Then} = require('cucumber');
const {Selector} = require('testcafe');

Given(/^I navigate to the Gist page$/, async () => {
    await testController.navigate('https://gist.github.com/');
});

When(/^I filled gist description$/, async () => {
    const desc = Selector("input[name='gist[description]']").with({ boundTestRun: testController });
    await testController.type(desc, 'Sample Desc');
});
