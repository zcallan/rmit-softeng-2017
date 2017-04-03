import { connect } from 'react-redux';
import PageTitle from './PageTitle.jsx';

const mapStateToProps = state => ({
  pageTitle: state.pageTitle,
});

export default connect( mapStateToProps, null )( PageTitle );
