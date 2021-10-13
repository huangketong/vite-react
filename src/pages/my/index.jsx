/*
 * @Author: Ketong
 * @Date: 2021-07-12 14:02:59
 * @LastEditTime: 2021-09-29 11:25:07
 * @LastEditors: Ketong
 * @Description: Description
 */

import React from 'react';
import { Button } from 'antd';
import './index.css';

const isObject = (obj) => typeof obj === 'object' && obj !== null;

const shallowClone = (obj) => {
  if (!isObject(obj)) return obj;

  const cloneObj = Array.isArray(obj) ? [] : {};

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      cloneObj[prop] = obj[prop];
    }
  }
  return cloneObj;
};

export default () => {
  function test() {
    const promiseAll = [
      new Promise((resolve, reject) => {
        const promise1 = Promise.resolve(123);
        resolve(promise1);
      }),
      42,
      new Promise((resolve, reject) => {
        resolve(33333);
      }),
    ];

    Promise.all(promiseAll)
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  }

  function cloneDeep(target) {
    // 判断是否为对象
    if (!typeof targe === 'object') {
      return target;
    }
    // 定义一个空的对象
    let newObj = Array.isArray(target) ? [] : {};

    for (let key in target) {
      newObj[key] =
        typeof target[key] === 'object' ? cloneDeep(target[key]) : target[key];
    }
    return newObj;
  }

  function doCloneDeep() {
    let obj = ['1', 2, 3, { a: 12 }];
    console.log('doCloneDeep: ', cloneDeep(obj));
  }

  function doCloneShallow() {
    let obj = ['1', 2, 3, { a: 12 }];

    console.log('shallowClone: ', shallowClone(obj));
  }
  function doJsonString() {
    let obj = {
      a: '',
      b: null,
      c: undefined,
      d: ['1', 2, 3, { a: 12 }],
      e: { m: 5, n: '66' },
      m: new Date(),
      n: NaN,
      f: function fn() {
        console.log('11');
      },
      r: new RegExp('/d'),
      s: Symbol(66),
      [Symbol('test')]: 1,
    };

    // 定义不可枚举的属性
    Object.defineProperty(obj, 'innumerable', {
      enumerable: false,
      value: 'innumerable',
    });
    console.log('obj: ', obj);
    // const target = JSON.parse(JSON.stringify(obj))

    const target = { ...obj };

    console.log(target);
  }

  function doSlice() {
    // let arr = [1, 2, 3, 4];
    // console.log([...arr])
    let obj = {
      a: '',
      b: null,
      c: undefined,
      d: ['1', 2, 3, { a: 12 }],
    };
    let shallowCloneObj = Object.assign(obj);
    console.log(shallowCloneObj);
  }

  function doHas() {
    let obj = {
      name: 'tom',
    };

    function Person() {
      this.name = 'P';
      this.age = 18;
    }

    Person.prototype.address = '杭州';

    const obj2 = new Person();
    console.log('obj2: ', obj2);
    console.log('obj2: ', obj2.constructor.prototype);
    // console.log('obj2: ', Person.prototype)
    console.log(
      'obj2._proto_ === Person.prototype: ',
      obj2.__proto__ === Person.prototype
    );
    console.log('in: ', 'address' in obj2);
    console.log('hasOwnProperty: ', obj2.hasOwnProperty('address'));
    console.log('isPrototypeOf: ', Person.prototype.isPrototypeOf(obj2));
  }

  const clickPromise = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ test: 1 });
      }, 1000);
    })
      .then((data) => {
        console.log('result1', data);
        //dosomething
        return test2();
        // return {test: 2}
      })
      .then(
        (data) => {
          console.log('result2', data);
        },
        (data) => {
          console.log('reject', data);
        }
      )
      .catch((e) => {
        console.log('catch: ', e);
      });
  };

  function test2(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ test: 2 });
      }, 2000);
    });
  }

  // 手写promise
  function MyPromise(executor) {
    let self = this;
    this.status = 'padding';
    this.value = undefined;
    this.reason = undefined;
    this.resolveCallback = [];
    this.rejectCallback = [];

    function resolve(value) {
      if (self.status === 'padding') {
        console.log('resolve: ', this);
        self.value = value;
        self.status = 'resolved';
        self.resolveCallback.forEach((fn) => {
          fn();
        });
      }
    }

    function reject(reason) {
      if (self.status === 'padding') {
        console.log('reject: ', this);
        self.value = reason;
        self.status = 'rejected';
        self.rejectCallback.forEach((fn) => {
          fn();
        });
      }
    }

    executor(resolve, reject);
  }

  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    let self = this;
    if (self.status === 'padding') {
      console.log('padding');
      self.resolveCallback.push(() => onFulfilled(self.value));
      self.rejectCallback.push(() => onRejected(self.reason));
    }
    if (self.status === 'resolved') {
      onFulfilled(self.value);
    }
    if (self.status === 'rejected') {
      onRejected(self.reason);
    }
  };

  return (
    <React.Fragment>
      <div className="div1">my</div>
      <div className="div2">
        <button style={{ marginRight: '50px' }} onClick={test}>
          按钮元素
        </button>
        <span style={{ marginLeft: '20Px' }}>行内span</span>
      </div>
      <div>
        <Button type="primary" onClick={doCloneShallow}>
          浅拷贝执行
        </Button>
        <Button type="primary" onClick={doCloneDeep}>
          深拷贝执行
        </Button>
        <Button type="primary" onClick={doJsonString}>
          doJsonString
        </Button>
        <Button type="primary" onClick={doSlice}>
          slice
        </Button>
      </div>
      <div>
        <Button type="primary" onClick={doHas}>
          has in hasOwnProperty
        </Button>
      </div>
      <Button type="primary" onClick={clickPromise}>
        promise 链式调用
      </Button>
      <h2>CSS两栏布局</h2>
      <h3>利用BFC的特性：BFC的区域不会与外部浮动元素重叠</h3>
      BFC（Block Formatting
      Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。
      <div style={{ marginBottom: 20 }}>
        <div className="left">float: left width: 180px height: 100px</div>
        <div className="right">overflow: hidden height: 150px</div>
      </div>
      <h3>flex布局</h3>
      <div className="parent">
        <div className="child1"></div>
        <div className="child2"></div>
      </div>
      <h3>左浮动float + 右marginLeft</h3>
      <div>
        <div className="f1"></div>
        <div className="f2"></div>
      </div>
      <h3>左浮动float + 右float（width: calc(100% - width)）</h3>
      <div style={{ overflow: 'hidden' }}>
        <div className="f3"></div>
        <div className="f4"></div>
      </div>
      <h3>table布局</h3>
      <div className="table">
        <div className="tableLeft"></div>
        <div className="tableRight"></div>
      </div>
      <h3>Grid布局</h3>
      <div className="grid">
        <div className="gridLeft">left</div>
        <div className="gridRight">right</div>
      </div>
      <h3>绝对定位</h3>
      <div className="container">
        <div className="positionLeft"></div>
        <div className="positionRight"></div>
      </div>
      <div style={{ height: '50px' }}></div>
      <div>BFC 解决Margin边距重叠</div>
      <div className="div5">
        <div className="div6"></div>
        
        <div style={{display: 'flex'}}>
        {/* 为子元素设置一层BFC */}
          <div className="div6" />
        </div>
      </div>
      <div style={{ height: '50px' }}></div>

      <h3>文字环绕</h3>
      <img style={{float: 'left', width: '200px'}} src='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07cf66626683495398c362c112f53983~tplv-k3u1fbpfcp-watermark.image'/>
      {/* 设置文字内容为BFC: float: 'left' || display: 'flex' || display: 'inline-block' */}
      <div style={{ width: '300px', backgroundColor: 'bisque', display: 'inline-block'}}>写文章不容易，给个星星和赞吧。写文章不容易，给个星星和赞吧。写文章不容易，给个星星和赞吧。写文章不容易，给个星星和赞吧。写文章不容易，给个星星和赞吧。写文章不容易，给个星星和赞吧。</div>
    </React.Fragment>
  );
};
