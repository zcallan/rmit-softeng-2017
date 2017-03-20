const chai = require('chai');
const request = require('request-json');
const config = require( '../config/config.json' );
const client = request.createClient( config.test.url );

describe('GET /', () => {
  it('should return the API name', done => {
    client.get('/', ( err, res, body ) => {
      chai.expect(body.name).to.equal('Booka API');
      done();
    });
  });

  it('should return the API version', done => {
    client.get('/', ( err, res, body ) => {
      chai.expect(body.version).to.equal(config.version);
      done();
    });
  });
});
