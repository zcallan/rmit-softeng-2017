import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarLink from './SidebarLink.jsx';
import { toggleSidebar } from '../../../sidebar.actions.js';


const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ toggleSidebar }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( SidebarLink );
