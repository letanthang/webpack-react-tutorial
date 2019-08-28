import { hot } from 'react-hot-loader/root'
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise-middleware'
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux'

import reducers from '../redux/duck'
import i18n from '../i18n/i18n'

const Root = (props) => {
  let store = null
  const middlewares = [reduxPromise]
  if (process.env.NODE_ENV !== 'production') {
    // hot(module)(props.children)
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    store = createStore(
      reducers,
      props.initialState,
      composeEnhancers(
        applyMiddleware(...middlewares)
      )
    )
    // if (module.hot) {
    //   // Enable Webpack hot module replacement for reducers
    //   module.hot.accept('../redux/duck', () => {
    //     const nextRootReducer = require('../redux/duck/index');
    //     store.replaceReducer(nextRootReducer);
    //   });
    // }
  } else {
    store = createStore(reducers, applyMiddleware(...middlewares));
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {props.children}
      </I18nextProvider>
    </Provider>
  )
}

export default hot(Root)