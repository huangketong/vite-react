/*
 * @Author: Ketong
 * @Date: 2021-07-12 11:32:21
 * @LastEditTime: 2021-10-02 15:53:27
 * @LastEditors: Ketong
 * @Description: Description
 */
import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

function App() {
  const [count, setCount] = useState(0)

  function getLoveDays() {
    const loveDay = '2020-09-15'
    const today = moment().format('YYYY-MM-DD');
    return moment(today).diff(loveDay, 'day')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>恋爱天数：<span className='loveDays'>{getLoveDays()}</span></p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Hello Vite + React!</p>
        {/* <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p> */}
        <p>
          <Link to='/index'>go to index</Link>
        </p>
        <p>
          <Link to='/about'>go to about</Link>
        </p>
        <p>
          <Link to='/my'>go to my</Link>
        </p>
        <p>
          <Link to='/my-video'>go to my-video</Link>
        </p>
        <p>
          <Link to='/games'>go to games</Link>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
