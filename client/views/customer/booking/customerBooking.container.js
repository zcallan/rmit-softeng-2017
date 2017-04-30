import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookingsAdd from './customerBooking.jsx';
import { requestedCustomers, receivedCustomers, fetchCustomersFail } from 'views/customer/customer.actions.js';
import { requestedEmployees, receivedEmployees, fetchEmployeesFail } from 'views/employee/employee.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';


const mapStateToProps = state => ({
  customers: state.customers,
  employees: state.employees,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestedCustomers, receivedCustomers, requestedEmployees, receivedEmployees, fetchEmployeesFail, fetchCustomersFail, setPageTitle }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( BookingsAdd );
