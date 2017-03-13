import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideNavigation from './Sidebar.jsx';
import { toggleSidebar } from './sidebar.actions.js';


const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleSidebar }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( SideNavigation );
