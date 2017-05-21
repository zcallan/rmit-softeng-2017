import { connect } from 'react-redux';
import TimeSchedule from './TimeSchedule.jsx';


const mapStateToProps = state => ({
  companies: state.companies,
});

export default connect( mapStateToProps )( TimeSchedule );
