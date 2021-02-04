/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-03 16:57:46
 * @LastEditors: liushuhao
 */
import React, { useContext, useState, useMemo } from 'react'

const MyContext = React.createContext()

function Parent() {
  const [num, setNum] = useState(0)
  const [sibNum, setSibNum] = useState({
    num: 1,
    visible: true
  })

  const Sib = useMemo(() => {
    console.log('useMemo')
    return <p>Sib</p>
  }, [sibNum])

  return (
    <>
      <Child />
      {Sib}
    </>
  )
}

// 函数组件使用 useContext 获取全局状态
function Child() {
  return (
    <>
      <p>{num}</p>
      <p>{sibNum.num}</p>
      <button onClick={() => { setNum(num + 1) }}>num ++</button>
      <button onClick={() => { setSibNum({ visible: true }) }}>sibNum ++</button>
    </>
  )
}





export default Parent