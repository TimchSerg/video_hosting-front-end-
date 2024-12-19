import { useGetVideoByNameQuery } from "app/services/video";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Player, BigPlayButton } from 'video-react';

function addListenerMulti(el: any, s: any, fn: Function) {
  s.split(' ').forEach( (e:any) => el.addEventListener(e, fn, false));
}

function detectIphone(){
  const useragent = navigator.userAgent.toLowerCase();
  if (useragent.search("iphone") > -1)
    return true;
  else  return false;
}

export const VideoNamePage: React.FC = () => {
  const { filename } = useParams()
  const { data } = useGetVideoByNameQuery(filename ? filename : '');

  const handleVideoUpload = (filename: string, vid: HTMLVideoElement) => {
    axios(
      {
        url: `/api/video/file/video/${filename}`,
        method: 'GET',
        responseType: 'blob',
      }
    )
      .then(res => {
        const blob = res.data.slice(0, res.data.size, "video/*")
        if(vid) {
          vid.src = URL.createObjectURL(blob);
        }
    });

  };

  useEffect(() => {
    let vid = document.getElementById("myVideo") as HTMLVideoElement;
    if( vid ) addListenerMulti(
      vid, 
      'abort canplay canplaythrough durationchange emptied encrypted ended error interruptbegin interruptend loadeddata loadedmetadata loadstart mozaudioavailable pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting', 
      function(e: any){
        if(e.type === 'ended'){
          window.parent.postMessage({
            event: 'ended',
            // дополнительные параметры события
          }, '*');
        };
      }
    );
  }, [])

  useEffect(() => {
    let vid = document.getElementById("myVideo") as HTMLVideoElement;
    if( vid && data ) {
      if(detectIphone()) return;
      else handleVideoUpload(data.filename, vid)
    }
  }, [data])

  return (
    <div className="col-12" style={{height: 'calc(100vh - 50px)'}}>
      <video
        id="myVideo"
        autoPlay 
        playsInline
        controls
        src={data ? data.urlVideo : ''}
        width='100%'
        height='100%'
      />
    </div>
  );
}

export default VideoNamePage;