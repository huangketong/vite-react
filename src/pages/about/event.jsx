/*
 * @Author: Ketong
 * @Date: 2021-09-10 14:00:31
 * @LastEditTime: 2021-09-10 15:13:43
 * @LastEditors: Ketong
 * @Description: Description
 */

import React from 'react';

class TextComponent extends React.Component {

  child = null;
  parent = null;

  componentDidMount() {
    this.parent.addEventListener('click', (e) => {
      console.log('parent Dom')
    })

    this.child.addEventListener('click', () => {
      console.log('child Dom')
    })

    document.addEventListener('click', () => {
      console.log('document Dom')
    })
    
    document.body.addEventListener('click', () => {
      console.log('body Dom')
    })

    document.getElementById('root').addEventListener('click', () => {
      console.log('root Dom')
    })

    window.addEventListener('click', () => {
      console.log('window Dom')
    })

    console.log('componentDidMount')
  }

  clickParent = () => {
    console.log('clickParent React')
  }
  clickChild = (event) => {
    // event.preventDefault();
    event.stopPropagation();
    console.log('clickChild React')
  }

  render() {
    console.log('render')
    return (
      <div
        ref={(ref) => this.parent = ref}
        className="parent"
        style={{ height: '200px', width: '200px', backgroundColor: '#fafa' }}
        onClick={this.clickParent}
      >
        <div
          ref={(ref) => this.child = ref}
          className="child"
          style={{ height: '100px', width: '100px', backgroundColor: '#f1f' }}
          onClick={this.clickChild}
        ></div>
      </div>
    );
  }
}

export default TextComponent;