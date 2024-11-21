import { expect, } from 'chai';
import { describe, test } from 'mocha';
import { app } from '../src/index.ts';


describe('GET Success', () => {
    test('GET /posts', async () => {
      const res = await app.request('/search/Moscow');
      expect(res.status).to.be.equal(200);
    });
  });
