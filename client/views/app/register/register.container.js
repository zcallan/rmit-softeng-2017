/* This file binds the state ( data store ) to the view */

/* Import dependencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register.jsx';
import { userAuthenticated } from 'views/user/user.actions';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

/* We wish to access the user data in this view so we map it here */
const mapStateToProps = state => ({
  user: state.user,
});

/* Map any actions that the view may perform here */
function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ userAuthenticated, setPageTitle }, dispatch );
}

/* Connect the state and actions to the Register view */
export default connect( mapStateToProps, mapDispatchToProps )( Register );
