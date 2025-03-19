import { test, expect, request } from '@playwright/test'

test('Like counter increase', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByText('Global Feed').click();
  const firstIncreaseButton = page.locator('app-article-preview').first().locator('button')
  expect(firstIncreaseButton).toContainText('0')
  await firstIncreaseButton.click();
  expect(firstIncreaseButton).toContainText('1')
})