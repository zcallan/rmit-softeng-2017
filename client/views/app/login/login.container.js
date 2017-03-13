import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.jsx';
import { userLogin, userLoggedIn, userLoginFail } from 'views/user/user.actions';


const mapStateToProps = state => ({
  user: state.user,
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ userLogin, userLoggedIn, userLoginFail }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Login );
