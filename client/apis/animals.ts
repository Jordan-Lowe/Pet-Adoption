import request from 'superagent'
import { Animal } from '../../models/animal'

const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token'
const rootUrl = 'https://api.petfinder.com/v2/animals'

let accessToken: string

async function getAccessToken(): Promise<string> {
  if (!accessToken) {
    const res = await request
      .post(tokenUrl)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        grant_type: 'client_credentials',
        client_id: 'o5830XZeUDLnY2SMyzcAf4WOb8kB5NhaHlb4Im5jXEIra0WAiu',
        client_secret: 'Wl89JwJzxOhiJ0iXmA6LsjxZDZpwtv9keJMXqt8m',
      })
    accessToken = res.body.access_token
  }
  return accessToken
}

export async function getAnimals(): Promise<Animal[]> {
  const token = await getAccessToken()
  return await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body.animals
    })
}
