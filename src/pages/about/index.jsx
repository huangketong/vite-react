/*
 * @Author: Ketong
 * @Date: 2021-07-12 14:03:17
 * @LastEditTime: 2021-10-14 13:40:45
 * @LastEditors: Ketong
 * @Description: Description
 */

import React, { useEffect } from 'react'
import TextComponent from './event'

export default () => {
  // useEffect(() => {

  //   const handle = () => {
  //     // 在原生事件中可以使用
  //     window.event.cancelBubble = true;
  //     console.log('click test element')
  //   }
  //   document.getElementById('test').addEventListener(
  //     'click',
  //     handle,
  //     false
  //   );

  //   return document.getElementById('test').removeEventListener('click', handle, false)
  // }, []);

  const handleRoot = () => {
    console.log('click root element')
  }

  const handleParent = e => {
    // e.preventDefault();
    console.log('click parent element')
  }
  const handleChild = e => {
    e.stopPropagation()
    console.log('click child element')
  }
  return (
    <div>
      <h3>事件冒泡</h3>
      {/* <div
        style={{ backgroundColor: '#eee', width: 400}}
        onClick={handleRoot}
      >
        <div
          style={{ backgroundColor: '#aaa', width: 300, height: 300 }}
          onClick={handleParent}
        >
          <div
            style={{ backgroundColor: 'blue', width: 150, height: 100 }}
            onClick={handleChild}
          ></div>

          <div
            style={{ backgroundColor: 'green', width: 150, height: 100 }}
            id="test"
          ></div>
        </div>
      </div> */}
      <TextComponent />
    </div>
  )
}
