import { test } from '@applitools/eyes-playwright/fixture';

test('applitools visual test', async ({ page, eyes }) => {
  await page.goto('http://localhost:4200/');

  await eyes.check('Home Page')

  await page.locator("[title='Forms']").click();
  await page.locator("[title='Form Layouts']").click();
  await eyes.check('Form Layouts Page')
})