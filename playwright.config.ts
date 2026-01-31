import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for ITPM Assignment
 * Runs tests ONLY in Chromium to avoid duplicate results
 */
export default defineConfig({
  testDir: './tests',

  // Run tests in parallel inside the same browser
  fullyParallel: true,

  // Fail if test.only is left accidentally
  forbidOnly: !!process.env.CI,

  // No retries (simple for assignment)
  retries: 0,

  // Use default workers
  workers: undefined,

  // HTML report (required for submission)
  reporter: 'html',

  // Shared settings
  use: {
    trace: 'on-first-retry',
  },

  /**
   * ✅ ONLY ONE BROWSER (Chromium)
   * This avoids repeated test cases in report
   */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
