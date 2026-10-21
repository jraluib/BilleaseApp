/**
 * Base class with reusable, wait-aware helpers.
 * All page objects extend this.
 */
export default class BasePage {
  /** Accessibility id selector (works on both Android & iOS) */
  byAccessibilityId(id) {
    return $(`~${id}`);
  }

  async waitForVisible(element, timeout = 15000) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Element not visible after ${timeout}ms: ${element.selector}`,
    });
    return element;
  }

  async tap(element) {
    await this.waitForVisible(element);
    await element.click();
  }

  async type(element, text) {
    await this.waitForVisible(element);
    await element.clearValue();
    await element.setValue(text);
  }

  async getText(element) {
    await this.waitForVisible(element);
    return element.getText();
  }

  async isShown(element, timeout = 5000) {
    try {
      await element.waitForDisplayed({ timeout });
      return true;
    } catch {
      return false;
    }
  }

  async hideKeyboard() {
    if (await driver.isKeyboardShown()) {
      await driver.hideKeyboard();
    }
  }
}
