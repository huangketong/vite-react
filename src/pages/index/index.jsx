/*
 * @Author: Ketong
 * @Date: 2021-07-12 14:09:42
 * @LastEditTime: 2021-10-14 13:42:35
 * @LastEditors: Ketong
 * @Description: Description
 */

import React, { useState } from 'react'
import './index.css'
import { Select, Button } from 'antd'

// const { counts, sayHello } = require('./module.js');
import { counts, sayHello } from './module.js'

const Option = Select.Option

export default () => {
  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('flex-start')
  const [alignItems, setAlignItems] = useState('flex-start')

  const click = () => {
    console.log('counts: ', counts)
    sayHello()
  }

  return (
    <>
      <div className="title-container">
        <div>
          <h4>flex-direction:</h4>
          <Select className="select" value={flexDirection} onChange={e => setFlexDirection(e)}>
            <Option value="row">row</Option>
            <Option value="column">column</Option>
            <Option value="row-reverse">row-reverse</Option>
            <Option value="column-reverse">column-reverse</Option>
          </Select>
        </div>
        <div>
          <h4>justify-content:</h4>
          <Select className="select" value={justifyContent} onChange={e => setJustifyContent(e)}>
            <Option value="flex-start">flex-start</Option>
            <Option value="center">center</Option>
            <Option value="flex-end">flex-end</Option>
            <Option value="space-around">space-around</Option>
            <Option value="space-between">space-between</Option>
          </Select>
        </div>
        <div>
          <h4>align-items:</h4>
          <Select className="select" value={alignItems} onChange={e => setAlignItems(e)}>
            <Option value="flex-start">flex-start</Option>
            <Option value="center">center</Option>
            <Option value="flex-end">flex-end</Option>
            <Option value="baseline">baseline</Option>
            <Option value="stretch">stretch</Option>
          </Select>
        </div>
      </div>
      <div
        className="container"
        style={{
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
      </div>

      <h2>import/export 是 ES6 的标准，适用范围如 React</h2>
      <div>
        <p>import {counts}</p>
        <Button type="primary" onClick={click}>
          import{' '}
        </Button>
      </div>
    </>
  )
}
