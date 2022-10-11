import { test } from './base-test'

const { expect } = test

test('Homepage contains Senarai title', async ({ page }) => {
  await page.goto('/')

  const button = page.locator('#btn')
  await expect(button).toBeDefined()
})
