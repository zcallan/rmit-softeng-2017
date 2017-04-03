import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register.jsx';
import { userAuthenticated } from 'views/user/user.actions';
import { setPageTitle } from 'views/generic/page-title/pageTitle.actions.js';

const mapStateToProps = state => ({
  user: state.user,
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ userAuthenticated, setPageTitle }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Register );
