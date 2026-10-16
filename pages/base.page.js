class BasePage {
    async clickElement(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
        await element.click();
    }
}
module.exports = BasePage;
