const request = require('supertest');
const express = require('express')
// const server = 'http://localhost:8080';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
//  */
const app = require('../server/server.js');


describe('Route integration', () => {
  describe('GET, database', () => {
    describe('should get request for a user/user info', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status', async () => {
         const response = await request(app)
          .get('/db/user/test')
          expect(response.statusCode).toBe(200)
        })
          
      ;
    });
    describe('should get request for teaminfo', () => {
      it('responds with 200 status', () =>
        request(app)
          .get('/db/teaminfo/i5ddjui57lnyf8bkvq23g')
          .expect(200));
    });
  });

  describe('POST, database', () => {
    describe('should verify user login', () => {
      it('responds with the username and password', () =>
        request(app)
          .post('/db/login')
          .send({
            username: 'test',
            password: 'test'
          })
          .expect(200));
    });

    describe('should verify user created', () => {
      it('responds with 200 status and application/json content type', () =>
        request(app)
          .post('/db/register')
          .send({
            username: 'servertesting2',
            password: 'servertesting'
          })
          .expect(200));
    
    describe('should verify that activity was added', () => {        
      it('responds to invalid request with 400 status and error message in body', () => 
        request(app)
          .post('/db/addActivity')
          .send({
            teamid: 'i5ddjui57lnyf8bkvq23g',
            password: 'servertesting'
          })
          .expect(200));
    })});
  });
  describe('GET, API', () => {
    describe('should get activity', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status', async () => {
         const response = await request(app)
          .get('/api/acivity/random')
          .expect(200);
          // expect(response.statusCode).toBe(200)
        });
    });
    describe('should get type', () => {
      it('responds with 200 status', () =>
        request(app)
          .get('/api/acivity/type')
          .expect(200));
    });
    describe('should get people', () => {
      it('responds with 200 status', () =>
        request(app)
          .get('/api/acivity/people')
          .expect(200));
    });
  });
  
});