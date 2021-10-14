/*
 * @Author: Ketong
 * @Date: 2021-10-11 15:07:25
 * @LastEditTime: 2021-10-14 13:43:27
 * @LastEditors: Ketong
 * @Description: Description
 */

import React from 'react'
import './index.less'

export default () => {
  const array = Array.from(Array(6).keys())

  return (
    <div className="dance-container">
      {array.map(ele => (
        <div key={ele} className={`item item${ele}`}></div>
      ))}
    </div>
  )
}
