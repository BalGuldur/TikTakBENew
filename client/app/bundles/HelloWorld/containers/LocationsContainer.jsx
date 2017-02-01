import { connect } from 'react-redux';
import Locations from '../components/locations/Locations';
import * as actions from '../actions/MainActionCreators';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(Locations)