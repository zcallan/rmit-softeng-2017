const chai = require('chai');
const request = require('request-json');
const config = require( '../../../config/config.json' );
const client = request.createClient( config.test.url );


describe('DELETE /employee', () => {
  before( done => {
    /* Create an employee */
    client.post('/employee', {
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'test@test.com',
      password: 'hunter2',
    }, () => {
      done();
    });
  });

  it('should delete the employee', done => {
    /* Delete the employee */
    client.delete('/employee/test@test.com', {}, () => {
      /* Make sure the user doesn't exist any more */
      client.get('/employee/test@test.com', ( err, res ) => {
        chai.expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
