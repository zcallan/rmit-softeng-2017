import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomerList from './CustomerList.jsx';
import { requestedCustomers, receivedCustomers, fetchCustomersFail } from './customer.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

const mapStateToProps = state => ({
  customers: state.customers,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestedCustomers, receivedCustomers, fetchCustomersFail, setPageTitle }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( CustomerList );
