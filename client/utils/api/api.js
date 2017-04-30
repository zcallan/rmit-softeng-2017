/**
 * This file provides access to the API
 * and can be used as follows
 *
 * import API from 'api.js'
 * API.setToken('testing');
 */

/* Import dependencies */
import axios from 'axios';
import config from 'config/api.json';

class API {
  constructor() {
    this.token = '';
  }

  /**
   * We need to authenticate with the server, so this function
   * provides us a way to store the access token that will be
   * used in requests
   */
  setToken( token ) {
    this.token = token;
  }

  /**
   * This function provides the basis for making a HTTP request to the API
   * using the supplied access token to authenticate
   */
  request( opts ) {
    return axios({
      ...opts,
      baseURL: config.host,
      headers: {
        'authorization': this.token,
      }
    });
  }

  /* Authenticates the user using the provided username and password */
  authenticate( data ) {
    return this.request({
      method: 'post',
      url: '/authenticate',
      data,
    });
  }

  /* Registers a new customer using the provided information */
  register( data ) {
    return this.request({
      method: 'post',
      url: '/register',
      data,
    });
  }

  /* Retrieves the application version number */
  version() {
    return this.request({
      method: 'get',
      url: '/',
    });
  }

  /* Retrieves a list of employees in the system */
  getEmployees() {
    return this.request({
      method: 'get',
      url: '/employee',
    });
  }

  /* Creates a new employee using the provided information */
  createEmployee( data ) {
    return this.request({
      method: 'post',
      url: '/employee',
      data,
    });
  }

  /* Retrieves a singular employee based on their email address */
  getEmployee( email ) {
    return this.request({
      method: 'get',
      url: `/employee/${email}`,
    });
  }

  /* Deletes the employee with the specified email address */
  deleteEmployee( email ) {
    return this.request({
      method: 'delete',
      url: `/employee/${email}`,
    });
  }

  /* Retrieves a list of availabilities for the employee with the specified email address */
  getEmployeeAvailabilities( email ) {
    return this.request({
      method: 'get',
      url: `/employee/${email}/availabilities`,
    });
  }

  /* Adds an availability to the employee */
  addEmployeeAvailability( email, data ) {
    return this.request({
      method: 'post',
      url: `/employee/${email}/availabilities`,
      data
    });
  }

  /* Deletes an employees availability */
  deleteEmployeeAvailability( email, id ) {
    return this.request({
      method: 'delete',
      url: `/employee/${email}/availabilities/${id}`,
    });
  }

  /* Retrieves a list of all the customers on the system */
  getCustomers() {
    return this.request({
      method: 'get',
      url: '/customer',
    });
  }

  /* Creates a new booking using the provided data */
  createBooking( data ) {
    return this.request({
      method: 'post',
      url: '/booking',
      data,
    });
  }

  /* Retrieves a list of all the bookings in the system */
  requestBookings() {
    return this.request({
      method: 'get',
      url: '/booking',
    });
  }

  /* Retrieves a list of all the different activity types in the system */
  getActivities() {
    return this.request({
      method: 'get',
      url: '/activities',
    });
  }
}

/* Export this class as a Singleton */
export default ( new API() );
