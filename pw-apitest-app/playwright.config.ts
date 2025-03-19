import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    { 
      name: 'setup', 
      testMatch: '**/tests/auth.setup.ts'
    },
    {
      name: 'articleSetup',
      testMatch: 'newArticle.setup.ts',
      dependencies: ['setup']
    },
    { 
      name: 'regression',
      use: { ...devices['Desktop Chrome'], storageState: '.auth/user.json'},
      dependencies: ['setup'],
    },
    { 
      name: 'likeCounter',
      testMatch: 'likeCounter.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: '.auth/user.json'},
      dependencies: ['articleSetup'],
    },
  ],
});
