/*
 * @Author: Oliver 
 * @Date: 2018-08-26 22:35:10 
 * @Last Modified by:   Oliver 
 * @Last Modified time: 2018-08-26 22:35:10 
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionA } from 'actions';
class ComponentA extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(actionA())
    }
    render() {
//由于所用到的 state 都绑定到了 props 中，component 中用到的时候可在 props 中获取
	<div>{this.props.propA}</div>
    }
}
let mapStateToProps = (state) => { 
// attention,会把最新的 state 数据绑定到组件 props 中。 
//只需绑定和本组件相关的 state 即可（state 是包含了整个应用的所有数据的。
let { reducerA, reducerB } = state; 
    return { 
        propA: reducerA.propA, 
        propB: reducerB.propB 
    }
};
export default connect(mapStateToProps)(ComponentA);