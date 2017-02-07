import { connect } from 'react-redux';
import Halls from '../components/halls/Halls';
import actions from '../actions';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(Halls)