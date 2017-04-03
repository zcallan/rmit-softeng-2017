const chai = require('chai');
const request = require('request-json');
const config = require( '../../../config/config.json' );
const client = request.createClient( config.test.url );


describe('DELETE /customer', () => {
  before( done => {
    /* Create an employee */
    client.post('/customer', {
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'test@test.com',
      password: 'hunter2',
    }, () => {
      done();
    });
  });

  it('should delete the customer', done => {
    /* Delete the employee */
    client.delete('/customer/test@test.com', {}, () => {
      /* Make sure the user doesn't exist any more */
      client.get('/customer/test@test.com', ( err, res ) => {
        chai.expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
