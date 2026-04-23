const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  test('should return success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('DevSecOps Pipeline Running and my name is gaurav desale');
  });
});