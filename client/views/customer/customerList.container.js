/* Import any dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomerList from './CustomerList.jsx';
import { requestedCustomers, receivedCustomers, fetchCustomersFail } from './customer.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

/* Map any data we may need from the store to the props */
const mapStateToProps = state => ({
  customers: state.customers,
});

/* Map any actions the view may dispatch to the views props */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestedCustomers, receivedCustomers, fetchCustomersFail, setPageTitle }, dispatch );
};

/* Connect the state and the actions to the customer list */
export default connect( mapStateToProps, mapDispatchToProps )( CustomerList );
