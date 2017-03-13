import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeList from './EmployeeList.jsx';
import { requestEmployees, receivedEmployees } from '../employee.actions.js';


const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestEmployees, receivedEmployees }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeList );
