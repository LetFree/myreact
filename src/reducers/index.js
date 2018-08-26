/*
 * @Author: Oliver 
 * @Date: 2018-08-26 22:32:40 
 * @Last Modified by:   Oliver 
 * @Last Modified time: 2018-08-26 22:32:40 
 */

 
import { ACTION_A, ACTION_B } from '../actions';
let initialState = { ... }
function example(state = initialState, action) {
    switch(action.type) {
        case ACTION_A:
          return Object.assign({}, state, action.config)
        case ACTION_B:
          return Object.assign({}, state, action.config)
	default:
	  return state
    }
