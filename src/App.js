/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-01-28 19:53:43
 * @LastEditors: liushuhao
 */
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import routes from './routes'
import HooksRedux from './demos/Hooks-Redux'
import './App.css'

function App() {
    return (
      <div className="App">
        <div className="contents"><HooksRedux /></div>
      </div>
    )
}

export default App

