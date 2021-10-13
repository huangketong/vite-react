/*
 * @Author: Ketong
 * @Date: 2021-07-12 14:14:39
 * @LastEditTime: 2021-09-29 09:30:50
 * @LastEditors: Ketong
 * @Description: Description
 */

import loadable from '@loadable/component'

// import Index from './pages/index';
// import About from './pages/about';
// import My from './pages/my';

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
  },
  {
    path: '/my-video',
    component: loadable(() => import('./pages/my-video'))
  },
  {
    path: '/games',
    component: loadable(() => import('./pages/games'))
  }
]
