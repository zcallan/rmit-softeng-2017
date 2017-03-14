import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeDetails from './EmployeeDetails.jsx';
import { requestEmployees, receivedEmployees } from '../employee.actions.js';


const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestEmployees, receivedEmployees }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeDetails );
