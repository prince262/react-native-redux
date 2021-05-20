// import { createStore, applyMiddleware } from 'redux'
// // import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

// import rootReducer from './Rootreducer'

// const store = createStore(
//   //rootReducer,
//   applyMiddleware(logger, thunk)
// )

// export default store





import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import Cookies from 'js-cookie';

import thunk from 'redux-thunk';
import { SignUpReducer } from './reducers/SignUpReducer';
// import {​​​​​​​​ AdminAuthReducer }​​​​​​​​ from'./reducers/adminReducer';

// const authInfo = Cookies.getJSON('authInfo') || null;

const intialState = { };

const reducer = combineReducers({
   adminAuthComplete: SignUpReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

