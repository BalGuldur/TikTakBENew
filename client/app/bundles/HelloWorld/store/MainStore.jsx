import { createStore } from 'redux';
import MainReducer from '../reducers/MainReducer';

const configureStore = (railsProps) => (
  createStore(MainReducer, railsProps,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default configureStore;
