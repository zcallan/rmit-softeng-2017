import { connect } from 'react-redux';
import Register from './Register.jsx';


const mapStateToProps = state => ({
  user: state.user,
});

export default connect( mapStateToProps )( Register );
