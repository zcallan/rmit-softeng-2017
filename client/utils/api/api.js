import axios from 'axios';
import config from 'config/api.json';

class API {
  request( opts ) {
    return axios({
      ...opts,
      baseURL: config.host,
    });
  }

  authenticate( data ) {
    return this.request({
      method: 'post',
      url: '/authenticate',
      data,
    });
  }

  register( data ) {
    return this.request({
      method: 'post',
      url: '/register',
      data,
    });
  }

  version() {
    return this.request({
      method: 'get',
      url: '/',
    });
  }

  getEmployees() {
    return this.request({
      method: 'get',
      url: '/employee',
    });
  }

  createEmployee( data ) {
    return this.request({
      method: 'post',
      url: '/employee',
      data,
    });
  }

  getEmployee( email ) {
    return this.request({
      method: 'get',
      url: `/employee/${email}`,
    });
  }
}

export default ( new API() );
