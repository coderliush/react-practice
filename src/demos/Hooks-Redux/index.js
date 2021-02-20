/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-03 16:57:46
 * @LastEditors: liushuhao
 */
import React, { useContext, useReducer, useMemo } from 'react'

const MyContext = React.createContext()

const initialState = {
    num: 0,
    sibNum: 1,
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': return {
            ...state,
            num: state.num + action.add
        }
        default: return state
    }
}

function Parent() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            <Child />
            <Sibing />
        </MyContext.Provider>
    )
}

function Child() {
    const { state, dispatch } = useContext(MyContext)  // 子组件使用 context 

    return (
        <>
            <p>{state.num}</p>
            <button onClick={() => { dispatch({ type: 'ADD', add: 1 }) }}>num ++</button>
        </>
    )
}

function Sibing() {
    const { state } = useContext(MyContext)  // 子组件使用 context 
    
    console.log('Sibing render',)
    return <>Sibing: {state.sibNum}</>
}

export default Parent