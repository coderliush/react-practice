/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-04 15:28:18
 * @LastEditors: liushuhao
 */
import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react'

function Parent() {
  const [model, setModel] = useState({ list: [], visible: false })
  const onClick = () => {
    // model.list.push(1)
    setModel({ list: model.list, visible: true })
  }
  return (
    <>
      <Child model={model} />
      <button onClick={onClick}>+++</button>
    </>
  )
}

function Child() {
  console.log('render')
  return <>Child</>
}


export default Parent

