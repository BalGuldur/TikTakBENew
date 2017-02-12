import { connect } from 'react-redux';
import WorkWindow from '../components/work_window/WorkWindow';
import actions from '../actions';

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, actions)(WorkWindow)