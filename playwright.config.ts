import { defineConfig, devices } from '@playwright/test'
// import { createChecklyReporter } from '@checkly/playwright-reporter'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['github'],
    ['@checkly/playwright-reporter', {
      apiKey: process.env.CHECKLY_API_KEY,
      accountId: process.env.CHECKLY_ACCOUNT_ID,  
    }]
    // createChecklyReporter({
    //   apiKey: process.env.CHECKLY_API_KEY,
    //   accountId: process.env.CHECKLY_ACCOUNT_ID,
    //   verbose: true,
    // }),
  ],
  use: {
    baseURL: process.env.ENVIRONMENT_URL,
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
