import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.jsx';
import { userAuthenticated, userAuthenticating, userLoginFail } from 'views/user/user.actions';


const mapStateToProps = state => ({
  user: state.user,
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ userAuthenticated, userAuthenticating, userLoginFail }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Login );
