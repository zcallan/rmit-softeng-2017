import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bookings from './Bookings.jsx';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPageTitle }, dispatch );
};

export default connect( null, mapDispatchToProps )( Bookings );
