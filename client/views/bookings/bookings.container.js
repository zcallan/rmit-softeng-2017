/* Import depenencies */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bookings from './Bookings.jsx';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

/* Map any actions this view may call to the props */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPageTitle }, dispatch );
};

/* Map actions to the Bookings view */
export default connect( null, mapDispatchToProps )( Bookings );
