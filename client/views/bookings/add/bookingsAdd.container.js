/* Import the dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookingsAdd from './BookingsAdd.jsx';
import { requestedCustomers, receivedCustomers, fetchCustomersFail } from 'views/customer/customer.actions.js';
import { requestedEmployees, receivedEmployees, fetchEmployeesFail } from 'views/employee/employee.actions.js';
import { requestActivities, receiveActivities, fetchActivitiesFail } from 'views/activities/activities.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

/* Map the data we wish to access from the store to the components props */
const mapStateToProps = state => ({
  customers: state.customers,
  employees: state.employees,
  user: state.user,
  activities: state.activities,
});

/* Map the actions the view may call to its props */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    requestedCustomers,
    receivedCustomers,
    requestedEmployees,
    receivedEmployees,
    fetchEmployeesFail,
    fetchCustomersFail,
    setPageTitle,
    receiveActivities,
    fetchActivitiesFail,
    requestActivities,
  }, dispatch );
};

/* Connect the actions and the state to the Add Bookings view */
export default connect( mapStateToProps, mapDispatchToProps )( BookingsAdd );
