/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-03 16:57:46
 * @LastEditors: liushuhao
 */
import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  
    function handleAlertClick() {
      setTimeout(() => {
        alert('You clicked on: ' + count);
      }, 3000);
    }
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button onClick={handleAlertClick}>
          Show alert
        </button>
      </div>
    );
  }




export default Counter