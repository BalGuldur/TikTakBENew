import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import MainReducer from '../reducers/MainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (railsProps) => (
  createStore(MainReducer, railsProps,
    composeEnhancers(applyMiddleware(thunk))
  )
);

export default configureStore;
