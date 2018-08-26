/*
 * @Author: Oliver 
 * @Date: 2018-08-26 22:33:48 
 * @Last Modified by:   Oliver 
 * @Last Modified time: 2018-08-26 22:33:48 
 */
import ReactDOM from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
let store = createStore(reducers);
ReactDOM.render((
  <Provider store={store}>
   // ...
  </Provider>
), document.querySelector('#app'));