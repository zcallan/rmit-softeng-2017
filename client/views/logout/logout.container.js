import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logout from './Logout.jsx';
import { userLogout } from '../user/user.actions.js';


const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( Logout );
