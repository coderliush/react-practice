/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-03 16:57:46
 * @LastEditors: liushuhao
 */
import React, { useState, useCallback } from 'react'

function Child(props) {
  console.log('Child render', props)
  return <>Child</>
}
function isEqual(prevProps, nextProps) {
  console.log('prev', prevProps)
  console.log('nextProps', nextProps)
  return false
}
const Memoed = React.memo(Child, isEqual)

function Parent() {
  const [num, setNum] = useState(0)
  return (
    <>
      <Memoed />
      <button onClick={() => { setNum(num + 1) }}>num ++</button>
    </>
  )
}





export default Parent