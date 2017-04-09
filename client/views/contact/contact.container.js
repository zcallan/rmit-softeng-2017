import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contact from './Contact.jsx';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPageTitle }, dispatch );
};

export default connect( null, mapDispatchToProps )( Contact );
