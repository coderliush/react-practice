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
import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react'

const Child = forwardRef((props, ref) => {
  console.log('props', props)
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef}></input>
})

function Parent() {
  return (
    <>
      <input ></input>
    </>
  )
}




export default Parent

