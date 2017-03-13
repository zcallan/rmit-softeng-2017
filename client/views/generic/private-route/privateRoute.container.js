import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute.jsx';


const mapStateToProps = state => ({
  user: state.user,
});

export default connect( mapStateToProps )( PrivateRoute );
