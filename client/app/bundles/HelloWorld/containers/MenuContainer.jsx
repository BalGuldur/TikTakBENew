import { connect } from 'react-redux';
import Menu from '../components/menu/Menu';
import actions from '../actions';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(Menu)