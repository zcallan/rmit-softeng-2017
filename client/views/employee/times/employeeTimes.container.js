import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeTimes from './EmployeeTimes.jsx';
import { requestedEmployees, receivedEmployees, fetchEmployeesFail } from '../employee.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestedEmployees, receivedEmployees, fetchEmployeesFail, setPageTitle }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeTimes );
