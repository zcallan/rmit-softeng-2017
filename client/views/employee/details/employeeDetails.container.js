import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeDetails from './EmployeeDetails.jsx';
import { requestEmployees, receivedEmployees, updateEmployeeSchedule } from '../employee.actions.js';


const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestEmployees, receivedEmployees, updateEmployeeSchedule }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeDetails );
