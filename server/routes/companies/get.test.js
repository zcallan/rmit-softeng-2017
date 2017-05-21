const chai = require('chai');
const request = require('request-json');
const config = require( '../../config/config.json' );
const client = request.createClient( config.test.url );

describe('GET /companies', () => {
  it('should return a list of companies', done => {
    client.get('/companies', ( err, res, body ) => {
      chai.expect(body).to.be.instanceof(Object);
      chai.expect(body[0]).to.have.property('rmit');
      chai.expect(body[0]).to.have.property('monash');
      done();
    });
  });
});
