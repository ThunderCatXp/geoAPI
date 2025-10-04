import { expect, } from 'chai';
import { describe, test } from 'mocha';
import { app } from '../src/index.ts';


describe('GET Success', () => {
    test('GET /search/Moscow', async () => {
      const res = await app.request('/search/Moscow', {
        headers: {
          'Authorization': 'Bearer admin'
        }
      });
      expect(res.status).to.be.equal(200);
    });
});