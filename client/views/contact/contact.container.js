/* Import the depenencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contact from './Contact.jsx';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

/* Map any actions this view may call to the views props */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPageTitle }, dispatch );
};

/* Connect the actions to the Contact view */
export default connect( null, mapDispatchToProps )( Contact );
