import { connect } from 'react-redux';
import Orders from '../components/orders/Orders';
import actions from '../actions';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(Orders)