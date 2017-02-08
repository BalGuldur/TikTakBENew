import { connect } from 'react-redux';
import MenuControl from '../components/MenuControl';
import actions from '../actions';

const mapStateToProps = (state) => ({menu_departments: state.menu_departments})

export default connect(mapStateToProps, actions)(MenuControl)