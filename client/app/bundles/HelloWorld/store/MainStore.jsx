import { createStore } from 'redux';
import MainReducer from '../reducers/MainReducer';

const configureStore = (railsProps) => (
  createStore(MainReducer, railsProps)
);

export default configureStore;
