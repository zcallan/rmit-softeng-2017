const chai = require('chai');
const request = require('request-json');
const config = require( '../../config/config.json' );
const client = request.createClient( config.test.url );


describe('GET /availability', () => {
  before( done => {
    client.post('/user/test@test.com', {}, () => {
      done();
    });
  });

  it('should return a list of availabilities', done => {
    client.get('/availability', ( err, res, body ) => {
      chai.expect(body).to.be.instanceof(Array);
      done();
    });
  });
});
