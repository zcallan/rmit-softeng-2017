import axios from 'axios';
import config from 'config/api.json';

class API {
  request( opts ) {
    return axios({
      ...opts,
      baseURL: config.host,
    });
  }

  version() {
    return this.request({
      method: 'get',
      url: '/',
    });
  }

}

export default ( new API() );
