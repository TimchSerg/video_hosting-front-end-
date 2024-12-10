import { useGetVideoByIdQuery } from "app/services/video";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Player, BigPlayButton } from 'video-react';

function addListenerMulti(el: any, s: any, fn: Function) {
  s.split(' ').forEach( (e:any) => el.addEventListener(e, fn, false));
}

export const VideoIdPage: React.FC = () => {
  const { id } = useParams()
  const { data } = useGetVideoByIdQuery(id ? id : '');
  let vid = document.getElementById("myVideo") as HTMLVideoElement;

  useEffect(() => {
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
  }, [vid])

  return (
    <div className="col-12" style={{height: 'calc(100vh - 50px)'}}>
      <video
        id="myVideo"
        src={data && data.urlVideo ? data.urlVideo : ''}
        width='100%'
        height='100%'
        controls
        autoPlay
      />
    </div>
  );
}

export default VideoIdPage;