const chai = require('chai');
const request = require('request-json');
const config = require( '../../../config/config.json' );
const client = request.createClient( config.test.url );


describe('GET /customer/:id', () => {
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

  it('should return the customers information', done => {
    client.get('/customer/test@test.com', ( err, res, body ) => {
      chai.expect(body).to.have.property('name');
      chai.expect(body).to.have.property('email');
      chai.expect(body).to.have.property('type');
      done();
    });
  });

  it('should return a 404 error when the customer doesn\'t exist', done => {
    client.get('/customer/thiscustomerdoesnotexist@test.com', ( err, res ) => {
      chai.expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
