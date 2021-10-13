/*
 * @Author: Ketong
 * @Date: 2021-09-08 17:54:54
 * @LastEditTime: 2021-09-08 18:19:24
 * @LastEditors: Ketong
 * @Description: Description
 */
import React, { useState } from 'react';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import AliPlayer from 'aliplayer-react';

export default () => {

  const [url, setURL] = useState('https://media.w3.org/2010/05/sintel/trailer_hd.mp4')

  const config = {
    source: url,
    width: "100%",
    height: "200px",
    autoplay: false,
    isLive: false,
    rePlay: false,
    playsinline: true,
    preload: true,
    controlBarVisibility: "click",
    showBarTime: "2000",
    useH5Prism: true,
};

  return (
    <div>
      <ReactPlayer playing={true} url={url} height='200px' width='100%'/>

      <AliPlayer config={config}/>
    </div>
  );
};