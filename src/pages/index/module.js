/*
 * @Author: Ketong
 * @Date: 2021-09-12 21:40:26
 * @LastEditTime: 2021-09-13 14:59:01
 * @LastEditors: Ketong
 * @Description: 导入require 导出 exports/module.exports 是 CommonJS 的标准，适用范围如 Node.js 
 */

// exports.counts = 1;
// exports.sayHello = function() {
//     console.log("hello, ", counts);
// };

import axios from 'axios';

let counts = 1;
function sayHello() {
  // console.log("hello, ", counts);
  // alert(`"hello , ${counts}`)
  axios.post('/growth_api/v1/lottery/draw?aid=2608&uuid=6966510154675340814', {}).then(res => {
    console.log(res)
  }).catch((err) => console.log(err))
}

axios.defaults.baseURL = 'https://api.juejin.cn';
axios.defaults.headers.common['Authorization'] = '_ga=GA1.2.1769856358.1606034751; n_mh=VYMfDkTiIdFQdExdToi6eesZZ7_Cv5d1loczTgUDvh8; odin_tt=0efff507dd67bf3ebc3c228db6c821adf1c3908acf7ba02a6af2a15c642e00e32d4ef4107ba858d5899fe596e24daea1e758d926f709ab780193048c280e7363; _tea_utm_cache_6587={%22utm_source%22:%22gold_browser_extension%22}; passport_csrf_token_default=e106b8c96408dfb3b537066b01d58440; passport_csrf_token=e106b8c96408dfb3b537066b01d58440; sid_guard=be19627a269a2fe4320bad4c471ac56c%7C1627352592%7C5184000%7CSat%2C+25-Sep-2021+02%3A23%3A12+GMT; uid_tt=dbc28026c9c69fd483746d3184d11dbd; uid_tt_ss=dbc28026c9c69fd483746d3184d11dbd; sid_tt=be19627a269a2fe4320bad4c471ac56c; sessionid=be19627a269a2fe4320bad4c471ac56c; sessionid_ss=be19627a269a2fe4320bad4c471ac56c; MONITOR_WEB_ID=cedfeab8-0bd5-4290-a49b-780d1669c470; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; _gid=GA1.2.932477695.1631511659';;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Referer'] = 'https://juejin.cn/';
axios.defaults.headers.post['Origin'] = 'https://juejin.cn';




setTimeout(() => {
  counts += 2
}, 3000);

export { counts, sayHello };