/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-02 14:26:09
 * @LastEditors: liushuhao
 */
/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-02 10:51:42
 * @LastEditors: liushuhao
 */
import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react'

class Parent extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }
  onClick = () => {
    console.log('回调的ref', this.ref)
  }
  render() {
    return (
      <>
        <Child ref={this.ref} />
        <Child ref={(e) => this.ref = e} />
        <button  onClick={this.onClick}>调用子组件的函数</button>
      </>
    )
  }
}

class Child extends React.Component {
  constructor() {
    super()
    this.a = 1
    this.state = {
      num: 1
    }
  }
  childFn = () => {
      console.log('this', this)
  }
  render() {
    return (
      <button>child</button>
    )
  }
}


export default Parent

