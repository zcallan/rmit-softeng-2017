import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.jsx';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setPageTitle }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
