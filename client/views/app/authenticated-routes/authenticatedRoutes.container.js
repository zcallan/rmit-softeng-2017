import { connect } from 'react-redux';
import AuthenticatedRoutes from './AuthenticatedRoutes.jsx';


const mapStateToProps = state => ({
  user: state.user,
});

export default connect( mapStateToProps )( AuthenticatedRoutes );
