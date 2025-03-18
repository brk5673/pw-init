import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json';

test.beforeEach(async ({ page }) => {
  await page.route('*/**/api/tags', async route => {
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(tags)
    });
  });

  await page.goto('https://conduit.bondaracademy.com/');
  await page.waitForResponse('**/api/tags');
});


test('has title', async ({ page }) => {
  await page.route('*/**/api/articles*', async route => {
    const response = await route.fetch();
    const body = await response.json();
    body.articles[0].title = 'MOCK test title';
    body.articles[0].description = 'MOCK test description';

    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(body)
    });
  });

  
  const header = page.locator('.navbar-brand');
  await expect(header).toHaveText('conduit');

  await page.getByText('Global Feed').click();
  const title = page.locator('app-article-list h1').first()
  const description = page.locator('app-article-list p').first()
  await expect(title).toHaveText('MOCK test title');
  await expect(description).toHaveText('MOCK test description');
});

test('delete article', async ({ page, request }) => {
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

  const articlePost = await page.request.post('https://conduit-api.bondaracademy.com/api/articles', {
    headers: {
      'Authorization': `Token ${token}`
    },
    data: {
      'article': {
        'title': 'Test title jfc',
        'description': 'Test description2',
        'body': 'Test body2',
        'tagList': []
      }
    }
  })
  const articlePostBody = await articlePost.json();
  console.log(articlePostBody);
  const id = articlePostBody.article.slug;

  const deleteRequest = await page.request.delete(`https://conduit-api.bondaracademy.com/api/articles/${id}`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  })
  expect(deleteRequest.status()).toBe(204);

});