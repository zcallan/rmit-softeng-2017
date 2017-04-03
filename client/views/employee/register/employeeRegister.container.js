import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EmployeeRegister from './EmployeeRegister.jsx';
import { receivedEmployee } from '../employee.actions.js';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ receivedEmployee, setPageTitle }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( EmployeeRegister );
