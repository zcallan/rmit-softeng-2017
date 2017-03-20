import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register.jsx';
import { userAuthenticated } from 'views/user/user.actions';


const mapStateToProps = state => ({
  user: state.user,
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ userAuthenticated }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Register );
