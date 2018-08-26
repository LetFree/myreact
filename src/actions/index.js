/*
 * @Author: Oliver 
 * @Date: 2018-08-26 22:31:22 
 * @Last Modified by:   Oliver 
 * @Last Modified time: 2018-08-26 22:31:22 
 */

export const ACTION_TYPE = 'ACTION_TYPE';
//actionCreator
let actionCreator = (config) => {
    return {
        type: ACTION_TYPE, // 必须定义 type
        config // 可定义任何属性，都会传递到 reducer，用于修改 state
    }
