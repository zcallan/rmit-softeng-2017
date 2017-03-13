import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from './Navbar.jsx';
import { toggleSidebar } from '../sidebar/sidebar.actions';


const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ toggleSidebar }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Navbar );
