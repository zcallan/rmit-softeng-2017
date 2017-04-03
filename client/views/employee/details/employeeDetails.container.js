import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeDetails from './EmployeeDetails.jsx';
import { requestEmployees, receivedEmployees, updateEmployeeSchedule } from '../employee.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';


const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestEmployees, receivedEmployees, updateEmployeeSchedule, setTitle }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeDetails );
