import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeRegister from './EmployeeRegister.jsx';
import { receivedEmployee } from '../employee.actions.js';


const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ receivedEmployee }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeRegister );
