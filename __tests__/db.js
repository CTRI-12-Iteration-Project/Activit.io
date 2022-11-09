const Team = require('../server/db/mongo/TeamModel');
const User = require('../server/db/mongo/UserModel');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose')

// Here we will be unit testing the 3 main database functions from server/db/markets.js
const fs = require('fs');
const path = require('path');
const db = require('../server/db/db.js');

/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */ /**
   * Jest runs the "beforeAll" function once, before any tests are executed.
   * Here, we write to the file and then reset our database model. Then, we
   * invoke the "done" callback to tell Jest our async operations have
   * completed. This way, the tests won't start until the "database" has been
   * reset to an empty Array!
   */

  //test if making an account dbtest works
  //use create to make account+password
  //use find to check that account exists

  //creating a team
  //check that account has team associated
  //use find to check that team exists

  //adding a member
  //check that member is added to team
  //deleting a team
  //
  //adding activity
  //use create to add activity
  //check to see if activity list has increased by 1
describe('user db unit tests', () => {
  beforeAll(async () => {
    await User.create({
        user_id: "dbtest",
        username: "dbtest",
        password: "dbtest",
        teams: { 'dbtest': 'dbtest' } 
      });
  });

  afterAll(async () => {
    await User.deleteOne({
        user_id: "dbtest",
      });
});
  describe('user tests', () => {

    it('should confirm that a user was added', async () => {  
      const response = await User.findOne({user_id : "dbtest"}) 
      expect(response.user_id).toEqual("dbtest")
    });

    it('should be able to assign a new team', async () => {  
        const response = await User.findOneAndUpdate({user_id : "dbtest"}, {teams:{'dbtest':'dbtest', 'datest':'datest'}}, {new:true}) 
        expect(response.teams['datest']).toEqual("datest")
      });
});
})


describe('team db unit tests', () => {
    beforeAll(async () => {
      await Team.create({
          user_id: "dbtest",
          username: "dbtest",
          password: "dbtest",
          teams: { 'dbtest': 'dbtest' } 
        });
    });
  
    afterAll(async () => {
      await Team.deleteOne({
          user_id: "dbtest",
        });
  });
    describe('user tests', () => {
  
      it('should confirm that a user was added', async () => {  
        const response = await User.findOne({user_id : "dbtest"}) 
        expect(response.user_id).toEqual("dbtest")
      });
  });
  })
  
//delete database
