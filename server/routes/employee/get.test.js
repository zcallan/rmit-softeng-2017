const chai = require('chai');
const request = require('request-json');
const config = require( '../../config/config.json' );
const client = request.createClient( config.test.url );

describe('GET /employee', () => {
  before(done => {
    client.post('/employee', {
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

  it('should return a list of employees', done => {
    client.get('/employee', ( err, res, body ) => {
      chai.expect(body).to.be.instanceof(Array);
      chai.expect(body[0]).to.have.property('email');
      chai.expect(body[0]).to.have.property('name');
      chai.expect(body[0].type).to.equal('employee');
      done();
    });
  });
});
