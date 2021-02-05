/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-03 16:57:46
 * @LastEditors: liushuhao
 */
import React, { useState, useMemo, useCallback } from 'react'

function Child() {
  console.log('child render');
  return <>Child</>
}

Child = React.memo(Child)

function Parent() {
  const [num, setNum] = useState(0)
  const fn = () => {}
  const memoizedCallback = useCallback(fn, [])
  return (
      <>
          <Child fn={memoizedCallback} />
          <button onClick={() => { setNum(num + 1) }}>increase</button>
      </>
  )
}





export default Parent