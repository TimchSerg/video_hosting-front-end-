import { useAppSelector } from "app/hooks";
import React from "react";

export const VideoPage: React.FC = (props: any) => {
  const norr = useAppSelector( state => state.norr );
  
  console.log(norr)

  return (
    <>
      Список видео
    </>
  );
}

export default VideoPage;