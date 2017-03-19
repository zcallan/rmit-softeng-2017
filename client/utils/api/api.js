import axios from 'axios';
import config from 'config/api.json';

class API {
  request( opts ) {
    return axios({
      ...opts,
      baseURL: config.host,
    });
  }

  authenticate(data) {
    return this.request({
      method: 'post',
      url: '/authenticate',
      data,
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
