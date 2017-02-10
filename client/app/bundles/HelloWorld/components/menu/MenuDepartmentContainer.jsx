import { connect } from 'react-redux';
import MenuDepartment from './MenuDepartment';
import * as actions from '../../actions/menu_departments';

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(MenuDepartment)