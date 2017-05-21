import { connect } from 'react-redux';
import SidebarMenu from './SidebarMenu.jsx';


const mapStateToProps = state => ({
  companies: state.companies,
});

export default connect( mapStateToProps )( SidebarMenu );
