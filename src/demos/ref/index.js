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

const usePrevState = state => {
  const ref = useRef()
  useEffect(() => {
    ref.current = 123
  })
  
  return ref.current
}

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
  const [modal, setModal] = useState({ visible: false, list: [] })
  const prevModal = usePrevState(modal)
  console.log('000', modal);
  console.log('111', prevModal);
  return (
    <>
      <button onClick={() => setModal({ visible: !modal.visible, list: modal.list.push(1) })}>showModal</button>
      <p>{modal.visible}{modal.list}</p>
      <p>{prevModal.visible}{prevModal.list}</p>
    </>
  )
}




export default Parent

