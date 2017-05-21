/* Import any depenencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookingsAdd from './customerBooking.jsx';
import { requestedCustomers, receivedCustomers, fetchCustomersFail } from 'views/customer/customer.actions.js';
import { requestedEmployees, receivedEmployees, fetchEmployeesFail } from 'views/employee/employee.actions.js';
import { requestActivities, receiveActivities, fetchActivitiesFail } from 'views/activities/activities.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

/* Map the required data from the store to the views props */
const mapStateToProps = state => ({
  customers: state.customers,
  employees: state.employees,
  user: state.user,
  activities: state.activities,
});

/* Map any actions this view may call to its props */
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

/* Connect the state and actions to the add a customer booking view */
export default connect( mapStateToProps, mapDispatchToProps )( BookingsAdd );
