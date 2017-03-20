const chai = require('chai');
const request = require('request');
const config = require( '../config/config.json' );

describe('GET /', () => {
  it('should return the API name', done => {
    request.get(config.test.url, ( err, res, body ) => {
      chai.expect(JSON.parse(body).name).to.equal('Booka API');
      done();
    });
  });

  it('should return the API version', done => {
    request.get(config.test.url, ( err, res, body ) => {
      chai.expect(JSON.parse(body).version).to.equal(config.version);
      done();
    });
  });
});
