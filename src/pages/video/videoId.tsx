import { useGetVideoByIdQuery } from "app/services/video";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function addListenerMulti(el: any, s: any, fn: Function) {
  s.split(' ').forEach( (e:any) => el.addEventListener(e, fn, false));
}

export const VideoIdPage: React.FC = () => {
  const { id } = useParams()
  const { data } = useGetVideoByIdQuery(id ? id : '');
  

  const handleVideoUpload = (filename: string, vid: HTMLVideoElement) => {
    axios(
      {
        url: `/api/video/file/video/${filename}`,
        method: 'GET',
        responseType: 'blob',
      }
    )
      .then(res => {
        if(vid) {
          vid.src = URL.createObjectURL(res.data);
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
    console.log(vid, data)
    if( vid && data ) {
      handleVideoUpload(data.filename, vid)
    }
  }, [data])

  return (
    <div className="col-12" style={{height: 'calc(100vh - 50px)'}}>
      <video
        id="myVideo"
        src={""}
        width='100%'
        height='100%'
        controls
        autoPlay
      />
    </div>
  );
}

export default VideoIdPage;