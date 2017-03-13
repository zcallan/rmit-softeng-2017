const axios = require('axios');

test('Logging in with valid user credentials', () => {
  expect.assertions(1);

  axios.get('http://localhost:3001/authenticate').then(success => {
    expect(success.data.success).toEqual(true);
  });
});
