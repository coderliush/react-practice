/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-03 16:57:46
 * @LastEditors: liushuhao
 */
import React, { useContext, useState } from 'react'

const MyContext = React.createContext()

function Parent() {
  const [num, setNum] = useState(0)

  return (
    <MyContext.Provider value={{ num, setNum }}>
      <Child />
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
// 类组件使用 this.context 获取全局状态（仅示例，class Child 应该先于 Parent 组件）
class Child extends React.Component {
    constructor() {
        super()
        console.log('constructor', this.context)
    }

    componentDidMount() {
        console.log('componentDidMount', this.context)
    }

    render() {
      return <>this.context</>
    }
}
Child.contextType = MyContext

export default Parent