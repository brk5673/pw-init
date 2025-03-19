import { request, expect } from '@playwright/test';
import user from '../pw-apitest-app/.auth/user.json'
import fs from 'fs'

async function globalSetup() {
  const authFile = './auth/user.json'
  const context = await request.newContext();

  const responseToken = await context.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      'user': {
      'email': '123@test.com.ar',
      'password': 'test123'
      }
    }
  })
  expect(responseToken.status()).toEqual(200)
  const responseBody = await responseToken.json();
  const accessToken = responseBody.user.token
  user.origins[0].localStorage[0].value = accessToken
  fs.writeFileSync(authFile, JSON.stringify(user))

  const articlePost = await context.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      'article': {
        'title': 'globallll title jfc',
        'description': 'Test description2',
        'body': 'Test body2',
        'tagList': []
      },
      headers: {
        'Authorization': `Token ${process.env.ACCESS_TOKEN}`
      }
    }
  })
  expect(articlePost.status()).toEqual(201)
  const response = await articlePost.json();
  const slugID = response.article.slug
  process.env['SLUGID'] = slugID
}

export default globalSetup;