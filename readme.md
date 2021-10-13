
使用 vite + react + antd 搭建一个单页面应用


> Vite 需要 Node.js 版本 >= 12.0.0

##### 初始化应用
 `npm init vite@latest my-vue-app --template react`

##### 运行程序
```
  cd my-vue-app
  npm install
  npm run dev
```
在浏览器中访问 `http://localhost:3000/`

截止目前已经可以正常运行起来一个`React`的单页面应用，但是仅此的话在实际的开发应用中是远远不够的。接下来就慢慢给应用加入实际开发中常见的东西吧

##### 在应用中使用 react 的 UI 组件库 antd
1. `npm i antd` 安装组件库
2. 应用`antd`

    1. 在 `src/main.jsx` 中引入全局的样式文件 
   ```
   main.jsx

   import 'antd/dist/antd.css';
   ```
    2. 在 `src/App.jsx` 引入对应的组件
    ```
    import { Menu, Dropdown, Button } from 'antd';

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );

    ...
    ...

    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>

    ```
    截止目前我们可以在项目中运行`antd`。
    
    不过现在有一个问题，我们可以`npm run build` 看一下打包文件，如下图，

    样式文件会被全部打包进去，接下来我们就要实现样式的按需引用

    3. 实现 `antd` 样式的按需引入
    
    使用 `vite-plugin-style-import` 插件，安装`less`依赖
    ```
    npm i -D vite-plugin-style-import less
    ```
    修改`vite.config.js`配置文件
    ```
    import { defineConfig } from 'vite'
    import reactRefresh from '@vitejs/plugin-react-refresh'
    import styleImport from 'vite-plugin-style-import';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [
        reactRefresh(),
        styleImport({
          libs: [
            {
              libraryName: 'antd',
              esModule: true,
              resolveStyle: (name) => {
                return `antd/es/${name}/style/index`;
              }
            }
          ],
        })
      ],
      css: {
        preprocessorOptions: {
          less: {
            // 支持内联 JavaScript
            javascriptEnabled: true,
          }
        }
      },
    })
    ```

    此时重新执行`npm run build`，会发现打包后的产物，已经没有过大的`.css`文件了。

    一个完整的应用，肯定少不了路由，接下里我们要为项目引入路由

3. 引入`react-router-dom`, 组织引用的路由
   ```
   npm i react-router-dom
   ```
    1. 使用 `Route Config`的形式为我们的应用添加路由规则，

      在`src`下新增`router.js`路由文件，新增`pages`,添加若干页面，如下图目录结构
      
      ```
      router.js 文件

      import Index from './pages/index';
      import About from './pages/about';
      import My from './pages/my';

      export const routerConfig = [
        {
          path: '/Index',
          // exact: true,
          component: Index
        },
        {
          path: '/about',
          component: About
        },
        {
          path: '/my',
          component: My
        }
      ]
      ```
    2. 修改`main.js`文件，引入我们的路由规则
      ```
      import React from 'react'
      import ReactDOM from 'react-dom'
      import './index.css'
      import App from './App'

      import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
      import {routerConfig} from './router';

      function RouteWithSubRoutes(route) {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component {...props} />}
          />
        );
      }

      ReactDOM.render(
        <React.StrictMode>
          <Router>
            <Switch>
              <Route path="/" exact>
                  <App />
              </Route>
              {routerConfig.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </React.StrictMode>,
        document.getElementById('root')
      )
      ```
    
    截止目前，我们的应用拥有了多个页面，多个页面之间可以互相跳转，这样才像是一个完整的应用。那么问题又来了，现在的应用是打包在一个文件中的，随着我们应用的增大，页面的增多，我们是需要将代码根据路由做到分离打包（Code Splitting）。


4. 代码分隔（Code Splitting）

  我们使用`react-router`推荐的方式去做代码分隔(`Code Splitting`)。
  
  安装 `loadable/component`依赖
  ```
  npm install @loadable/component
  ```
  
  修改`router.js`文件，使用`import`的方式引入页面

  ```
  import loadable from '@loadable/component'

  export const routerConfig = [
    {
      path: '/Index',
      // exact: true,
      component: loadable(() => import('./pages/index'))
    },
    {
      path: '/about',
      component: loadable(() => import('./pages/about'))
    },
    {
      path: '/my',
      component: loadable(() => import('./pages/my'))
    }
  ]
  ```
  此时运行`npm run build` 就会发现会根据路由打包多个文件，如下图


结语

作为一个一直使用`webpack`的用户，个人觉得`vite`的开发体验还是很棒的，是一个很不错的开发工具，而且它的学习成本会比较低，基本上是开箱即用，内置了强大的HMR、TS支持，它的 插件 API 和 JavaScript API 带来了高度的可扩展性，并有完整的类型支持。

从实际的体验上来说，`vite`相比`webpack`的速度确实是快很多，但是它的社区发展确实不如`webpack`，希望它能够快速的发展起来，为前端开发带来更好的体验。


附：

  [vite](https://cn.vitejs.dev/guide/why.html)

  [Code Splitting](https://reactrouter.com/web/guides/code-splitting)

  [loadable/component](https://github.com/gregberge/loadable-components)
  
  [route-config](https://reactrouter.com/web/example/route-config)