import { connect } from 'react-redux';
import WorkWindow from '../components/work_window/WorkWindow';
import actions from '../actions';

const mapStateToProps = (state) => ({choosed_places: state.choosed_places})

export default connect(mapStateToProps, actions)(WorkWindow)