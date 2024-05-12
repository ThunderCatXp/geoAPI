import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getCity } from '../prisma/db'

const app = new Hono()

app.get('/:name', async (c) => {
  const cityName = c.req.param('name');
  let city = await getCity(cityName);
  return c.text(city)
})

app.get('/', async (c) => {
  return c.text('To use this API, use the endpoint with /:cityName')
})


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
