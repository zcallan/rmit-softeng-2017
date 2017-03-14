import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register.jsx';
import { userLogin, userLoginFail } from 'views/user/user.actions';


const mapStateToProps = state => ({
  user: state.user,
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ userLogin, userLoginFail }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Register );
