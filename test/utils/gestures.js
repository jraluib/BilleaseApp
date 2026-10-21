/**
 * Cross-platform gesture helpers built on Appium's "mobile:" commands.
 */
const DIRECTIONS = ['up', 'down', 'left', 'right'];

export async function swipe(direction = 'up', percent = 0.75) {
  if (!DIRECTIONS.includes(direction)) throw new Error(`Invalid direction: ${direction}`);
  const { width, height } = await driver.getWindowRect();

  if (driver.isAndroid) {
    await driver.execute('mobile: swipeGesture', {
      left: width * 0.1,
      top: height * 0.2,
      width: width * 0.8,
      height: height * 0.6,
      direction,
      percent,
    });
  } else {
    await driver.execute('mobile: swipe', { direction });
  }
}

/** Swipe until the element is visible (or give up after maxSwipes) */
export async function scrollTo(element, { direction = 'up', maxSwipes = 8 } = {}) {
  for (let i = 0; i < maxSwipes; i++) {
    if (await element.isDisplayed().catch(() => false)) return element;
    await swipe(direction);
  }
  throw new Error(`Element not found after ${maxSwipes} swipes: ${element.selector}`);
}

export async function tapAt(x, y) {
  await driver
    .action('pointer', { parameters: { pointerType: 'touch' } })
    .move({ x: Math.round(x), y: Math.round(y) })
    .down()
    .up()
    .perform();
}
