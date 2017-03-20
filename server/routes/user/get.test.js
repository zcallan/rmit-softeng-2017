const chai = require('chai');
const request = require('request-json');
const config = require( '../../config/config.json' );
const client = request.createClient( config.test.url );

describe('GET /user', () => {
  it('should return a list of users', done => {
    client.get('/user', ( err, res, body ) => {
      chai.expect(body).to.be.instanceof(Array);
      done();
    });
  });
});
