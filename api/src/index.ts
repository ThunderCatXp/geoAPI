import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getCity, getCityByLocaleName } from '../prisma/db'
import { cors } from 'hono/cors'

const app = new Hono()
app.use(cors())

app.get('/', async (c) => {
  return c.text('To use this API, use the endpoint with /search/:cityName or /searchLocalName/:cityName')
})

app.get('search/:name', async (c) => {
  const cityName = c.req.param('name');
  let city = await getCity(cityName);
  return c.json(city)
})

app.get('searchLocalName/:name', async (c) => {
  const cityName = c.req.param('name');
  let city = await getCityByLocaleName(cityName);
  return c.json(city)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
