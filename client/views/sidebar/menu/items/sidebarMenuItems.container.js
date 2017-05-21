import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarMenuItems from './SidebarMenuItems.jsx';
import { setCompany } from 'views/company/company.actions';


const mapStateToProps = state => ({
  user: state.user,
  companies: state.companies,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCompany }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( SidebarMenuItems );
