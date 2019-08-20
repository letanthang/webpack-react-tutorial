import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'

import reducers from '../redux/reducers'

export default (props) => {
  let store = null
  if (process.env.NODE_ENV !== 'production') {
    hot(module)(props.children)
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middlewares = [reduxPromise]
    store = createStore(
      reducers,
      props.initialState,
      composeEnhancers(
        applyMiddleware(...middlewares)
      )
    )
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../redux/reducers', () => {
        store.replaceReducer(reducers);
      });
    }
  } else {
    store = createStore(reducers, applyMiddleware(...middleware));
  }

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}