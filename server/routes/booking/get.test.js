const chai = require('chai');
const request = require('request-json');
const config = require( '../../config/config.json' );
const client = request.createClient( config.test.url );

describe('GET /booking', () => {
  it('should return a list of bookings', done => {
    client.get('/booking', ( err, res, body ) => {
      chai.expect(body).to.be.instanceof(Array);
      done();
    });
  });
});
