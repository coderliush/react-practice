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

  const Sib = useMemo(() => {
    console.log('useMemo')
    return <p>Sib</p>
  }, [num])

  return (
    <MyContext.Provider value={{ num, setNum }}>
      <Child />
      {Sib}
    </MyContext.Provider>
  )
}

// 函数组件使用 useContext 获取全局状态
function Child() {
  const { num, setNum } = useContext(MyContext)
  return (
    <>
      <p>{num}</p>
      <button onClick={() => { setNum(num + 1) }}>num ++</button>
    </>
  )
}





export default Parent