/*
 * @Author: Oliver 
 * @Date: 2018-08-26 22:28:56 
 * @Last Modified by: Oliver
 * @Last Modified time: 2018-08-26 23:21:31
 */

// 下面代码测试环境支持es6预编译
import express from 'express';

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Main from '../components/Main';
import './App.css';

class App extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  constructor () {
    super()
    this.state = {
      themeColor : 'red'
    }
  }
  getChildContext () {
    return {
      themeColor : this.state.themeColor
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;