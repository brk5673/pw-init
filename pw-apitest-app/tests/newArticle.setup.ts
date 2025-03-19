import { expect, test as setup } from '@playwright/test';

setup('create new article', async({ request }) => {
  const articlePost = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      'article': {
        'title': 'Test title jfc',
        'description': 'Test description2',
        'body': 'Test body2',
        'tagList': []
      }
    }
  })
  expect(articlePost.status()).toEqual(201)
  const response = await articlePost.json();
  const slugID = response.article.slug
  process.env['SLUGID'] = slugID

})