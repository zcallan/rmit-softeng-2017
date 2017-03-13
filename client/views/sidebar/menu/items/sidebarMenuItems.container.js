import { connect } from 'react-redux';
import SidebarMenuItems from './SidebarMenuItems.jsx';


const mapStateToProps = state => ({
  user: state.user,
});

export default connect( mapStateToProps )( SidebarMenuItems );
