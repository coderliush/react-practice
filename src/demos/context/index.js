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

  return (
    <MyContext.Provider value={{ num, setNum, sibNum, setSibNum }}>
      <Child />
      <Sib />
    </MyContext.Provider>
  )
}

// 函数组件使用 useContext 获取全局状态
function Child() {
  const { num, setNum, sibNum, setSibNum } = useContext(MyContext)
  
  return (
    <>
      <p>{num}</p>
      <p>{sibNum.num}</p>
      <button onClick={() => { setNum(num + 1) }}>num ++</button>
      <button onClick={() => { setSibNum(sibNum.num + 1) }}>sibNum ++</button>
    </>
  )
}


function Sib() {
  console.log('sib1')
  const { sibNum } = useContext(MyContext)
  return useMemo(() => {
    console.log('sib render')
    return <>sib</>
  }, [sibNum])
}


export default Parent