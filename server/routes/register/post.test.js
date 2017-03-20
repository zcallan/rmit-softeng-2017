const chai = require('chai');
const request = require('request-json');
const config = require( '../../config/config.json' );
const client = request.createClient( config.test.url );


describe('POST /register', () => {
  before( done => {
    client.delete('/user/test@test.com', {}, () => {
      done();
    });
  });

  it('should create a new user', done => {
    client.post('/register', {
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'test@test.com',
      password: 'hunter2',
    }, ( err, res, body ) => {
      chai.expect(body).to.have.property('token');
      chai.expect(body).to.have.property('user');
      chai.expect(body.user).to.have.property('name');
      chai.expect(body.user).to.have.property('email');
      chai.expect(body.user).to.have.property('type');
      done();
    });
  });
});
