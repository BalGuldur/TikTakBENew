import { connect } from 'react-redux';
import Locations from '../components/locations/Locations';
import actions from '../actions';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(Locations)