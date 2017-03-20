const chai = require('chai');
const request = require('request-json');
const config = require( '../../../config/config.json' );
const client = request.createClient( config.test.url );


describe('GET /user/:id', () => {
  before( done => {
    client.post('/register', {
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'test@test.com',
      password: 'hunter2',
    }, done);
  });

  after( done => {
    client.delete('/user/test@test.com', {}, () => {
      done();
    });
  });

  it('should return the users information', done => {
    client.get('/user/test@test.com', ( err, res, body ) => {
      chai.expect(body).to.have.property('name');
      chai.expect(body).to.have.property('email');
      chai.expect(body).to.have.property('type');
      done();
    });
  });
});
