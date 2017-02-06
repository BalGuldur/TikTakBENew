import { connect } from 'react-redux';
import Employees from '../components/employees/Employees';
import actions from '../actions';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(Employees)