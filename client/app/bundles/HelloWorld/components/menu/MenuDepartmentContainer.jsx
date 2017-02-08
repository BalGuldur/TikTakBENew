import { connect } from 'react-redux';
import MenuDepartment from './MenuDepartment';
import * as actions from '../../actions/menu_departments';

const mapStateToProps = (state) => ({menu_departments: state.menu_departments})

export default connect(mapStateToProps, actions)(MenuDepartment)