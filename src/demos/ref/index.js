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
import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react'

const usePrevState = state => {
    const ref = useRef()
    useEffect(() => {
        ref.current = state 
    }, [])

    return ref.current
}

const Child = forwardRef((props, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus()
      }
    }))
    return <input ref={inputRef}></input>
  })
  
  function Parent() {
    const ref = useRef()  
    const onClick = () => {
      ref.current.focus()
    }
    return (
      <>
        <Child flag={true} ref={ref} />
        <button  onClick={onClick}>子组件聚焦</button>
      </>
    )
  }




export default Parent

