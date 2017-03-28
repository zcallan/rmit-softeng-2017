import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeList from './EmployeeList.jsx';
import { requestedEmployees, receivedEmployees, fetchEmployeesFail } from '../employee.actions.js';


const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestedEmployees, receivedEmployees, fetchEmployeesFail }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeList );
