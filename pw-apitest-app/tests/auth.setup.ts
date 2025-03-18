import { test as setup } from '@playwright/test';
import user from '../.auth/user.json';
import fs from 'fs';

const authFile = '.auth/user.json';

setup('authentication', async ({ page }) => {
  // await page.goto('https://conduit.bondaracademy.com/');
  // await page.getByText('Sign in').click();
  // await page.fill('input[type="email"]', '123@test.com.ar');
  // await page.fill('input[type="password"]', 'test123');
  // await page.getByRole('button').click();

  // await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags');

  // await page.context().storageState({ path: authFile });

  const response = await page.request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      'user': {
      'email': '123@test.com.ar',
      'password': 'test123'
      }
    }
  })
  const responseBody = await response.json();
  const token = responseBody.user.token;
  user.origins[0].localStorage[0].value = token;
  fs.writeFileSync(authFile, JSON.stringify(user));

})