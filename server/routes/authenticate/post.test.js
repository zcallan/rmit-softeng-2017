const chai = require('chai');
const request = require('request-json');
const config = require( '../../config/config.json' );
const users = require( '../../config/users.json' );
const client = request.createClient( config.test.url );

describe('POST /authenticate', () => {
  it('should return an error when provided with no username', done => {
    client.post('/authenticate', {}, ( err, res, body ) => {
      chai.expect(body.error).to.equal('A username must be supplied');
      chai.expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return an error when provided with no password', done => {
    client.post('/authenticate', { username: 'test' }, ( err, res, body ) => {
      chai.expect(body.error).to.equal('A password must be supplied');
      chai.expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return an error when the username provided does not match a user', done => {
    client.post('/authenticate', { username: '1234567890', password: 'hunter2' }, ( err, res, body ) => {
      chai.expect(body.error).to.equal('The user could not be found');
      chai.expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return an error when the authentication fails', done => {
    client.post('/authenticate', { username: users.defaultUsers[0].email , password: 'hunter2' }, ( err, res, body ) => {
      chai.expect(body.error).to.equal('The username or password provided were incorrect');
      chai.expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it('should return the users information when the authentication is successful', done => {
    client.post('/authenticate', { username: users.defaultUsers[0].email , password: users.defaultUsers[0].password }, ( err, res, body ) => {
      chai.expect(body.user.email).to.equal(users.defaultUsers[0].email);
      chai.expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return an jwt token when the authentication is successful', done => {
    client.post('/authenticate', { username: users.defaultUsers[0].email , password: users.defaultUsers[0].password }, ( err, res, body ) => {
      chai.expect(body).to.have.property('token');
      chai.expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
