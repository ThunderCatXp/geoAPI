import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getCity, getCityByLocaleName } from '../prisma/db.ts'
import { cors } from 'hono/cors'
import { bearerAuth } from 'hono/bearer-auth';
import { EtcdTokenManager } from './etcd.ts'

export const app = new Hono()
const tokenManager = new EtcdTokenManager();

app.get('/', async (c) => {
  const authInfo = tokenManager.isUsingDefaultToken() 
    ? `\nDevelopment mode: Use Authorization: Bearer ${tokenManager.getDefaultToken()} to access protected endpoints`
    : '\nProduction mode: Valid API token required for protected endpoints';
  
  return c.text('To use this API, use the endpoint with /search/:cityName or /searchLocalName/:cityName' + authInfo);
});

// Apply authentication middleware to protected routes
app.use('/search/*', bearerAuth({
  verifyToken: (token: string, c) => tokenManager.validateToken(token)
}));

app.use('/searchLocalName/*', bearerAuth({
  verifyToken: (token: string, c) => tokenManager.validateToken(token)
}));

// Protected routes
app.get('/search/:name', async (c) => {
  const cityName = c.req.param('name');
  let city = await getCity(cityName);
  return c.json(city);
});

app.get('/searchLocalName/:name', async (c) => {
  const cityName = c.req.param('name');
  let city = await getCityByLocaleName(cityName);
  return c.json(city);
});


const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
});

export default app;