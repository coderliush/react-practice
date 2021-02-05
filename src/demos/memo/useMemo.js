/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-03 16:57:46
 * @LastEditors: liushuhao
 */
import React, { useState, useMemo } from 'react'

function Child() {
  console.log('Child render')
  return <>Child</>
}


function Parent() {
  const [model, setModel] = useState({ list: [], visible: false })

  const data = useMemo(() => model, [model.visible])

  return (
    <>
      <Child data={data} setModel={setModel}  />
      <button onClick={() => { 
        model.list.push(1)
        setModel({...model, list: model.list}) 
      }}>+</button>
      <button onClick={() => {
        setModel({ ...model, visible: !model.visible })
      }}>change visible</button>
    </>
  )
}





export default Parent