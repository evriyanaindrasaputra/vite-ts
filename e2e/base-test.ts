import { test as base } from '@playwright/test'
import type { LocatorFixtures as TestingLibraryFixtures } from '@playwright-testing-library/test/fixture'
import { locatorFixtures as fixtures } from '@playwright-testing-library/test/fixture'

export interface Fixtures extends TestingLibraryFixtures {
  noscript: boolean
}

export const test = base.extend<Fixtures>({
  ...fixtures,
  // Default value for noscript
  noscript: false,
})
