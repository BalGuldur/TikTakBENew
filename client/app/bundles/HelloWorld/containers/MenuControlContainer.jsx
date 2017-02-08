import { connect } from 'react-redux';
import MenuControl from '../components/MenuControl';
import actions from '../actions';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(MenuControl)