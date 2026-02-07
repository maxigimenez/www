import { defineConfig, devices } from '@playwright/test'

const hasChecklyCreds = Boolean(process.env.CHECKLY_API_KEY && process.env.CHECKLY_ACCOUNT_ID)

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['github'],
    ['@checkly/playwright-reporter', {
      apiKey: process.env.CHECKLY_API_KEY,
      accountId: process.env.CHECKLY_ACCOUNT_ID,
      dryRun: !hasChecklyCreds,
    }],
  ],
  use: {
    baseURL: process.env.ENVIRONMENT_URL || 'http://localhost:3000',
    trace: 'on',
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
