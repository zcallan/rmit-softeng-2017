import axios from 'axios';
import config from 'config/api.json';

class API {
  constructor() {
    this.token = '';
  }

  setToken( token ) {
    this.token = token;
  }

  request( opts ) {
    return axios({
      ...opts,
      baseURL: config.host,
      headers: {
        'authorization': this.token,
      }
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

  deleteEmployee( email ) {
    return this.request({
      method: 'delete',
      url: `/employee/${email}`,
    });
  }

  getEmployeeAvailabilities( email ) {
    return this.request({
      method: 'get',
      url: `/employee/${email}/availabilities`,
    });
  }

  addEmployeeAvailability( email, data ) {
    return this.request({
      method: 'post',
      url: `/employee/${email}/availabilities`,
      data
    });
  }

  deleteEmployeeAvailability( email, id ) {
    return this.request({
      method: 'delete',
      url: `/employee/${email}/availabilities/${id}`,
    });
  }

  getCustomers() {
    return this.request({
      method: 'get',
      url: '/customer',
    });
  }

  createBooking( data ) {
    return this.request({
      method: 'post',
      url: '/booking',
      data,
    });
  }
}

export default ( new API() );
