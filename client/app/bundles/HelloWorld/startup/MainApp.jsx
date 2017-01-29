import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import configureStore from '../store/MainStore';
import routes from '../routes/routes.jsx'

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const MainApp = (props, railsContext) => {
  let error;
  let redirectLocation;
  let routeProps;
  const { location } = railsContext;

  // create your hydrated store
  const store = configureStore(props);

  // See https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md
  match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
    error = _error;
    redirectLocation = _redirectLocation;
    routeProps = _routeProps;
  });

  // This tell react_on_rails to skip server rendering any HTML. Note, client rendering
  // will handle the redirect. What's key is that we don't try to render.
  // Critical to return the Object properties to match this { error, redirectLocation }
  if (error || redirectLocation) {
    return { error, redirectLocation };
  }

  // // Important that you don't do this if you are redirecting or have an error.
  return (
    <Provider store={store}>
      <RouterContext {...routeProps} />
    </Provider>
  );

  // return <Provider store={configureStore(props)}>
  //   <MainContainer />
  // </Provider>
}

export default MainApp;
