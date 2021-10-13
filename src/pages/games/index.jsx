/*
 * @Author: Ketong
 * @Date: 2021-09-26 09:51:16
 * @LastEditTime: 2021-10-11 15:36:28
 * @LastEditors: Ketong
 * @Description: Description
 */

import React, { useState } from "react";
import GoldEgg from './gold-egg';
import Sudoku from './sudoku';
import Dance from './dance';

import { Select } from 'antd';
const Option = Select.Option;

export default () => {
  const [name, setName] = useState('Dance')
  
  const onChange = (val) => {
    setName(val);
  }

  function renderGame() {
    switch (name) {
      case 'Sudoku':
        return <Sudoku />;
      case 'GoldEgg':
        return <GoldEgg />;
      case 'Dance':
        return <Dance />;
      default:
        return null
    }
  }

  return <div style={{display: 'flex', alignItems: "center", flexDirection: 'column',}}>
    <Select onChange={onChange} value={name} style={{marginBottom: '40px'}}>
      <Option value='Sudoku'>Sudoku</Option>
      <Option value='GoldEgg'>GoldEgg</Option>
      <Option value='Dance'>Dance</Option>
    </Select>
    {renderGame()}
  </div>
}