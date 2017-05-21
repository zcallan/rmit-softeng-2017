/* This file binds the state ( data store ) to the view */

/* Import dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logout from './Logout.jsx';
import { userLogout } from 'views/user/user.actions.js';

/* We wish to access the user data in this view so we map it here */
const mapStateToProps = state => ({
  user: state.user,
});

/* Map any actions that the view may perform here */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch );
};

/* Connect the state and actions to the Logout */
export default connect( mapStateToProps, mapDispatchToProps )( Logout );
