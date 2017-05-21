/* Import depenencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotFound from './NotFound.jsx';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

/* Map any actions the view may perform here */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPageTitle }, dispatch );
};

/* Connect the actions to the NotFound view */
export default connect( null, mapDispatchToProps )( NotFound );
