import MenuVideos from "features/videos/menu.videos";
import TableVideos from "features/videos/table.videos";
import React from "react";

export const VideoPage: React.FC = (props: any) => {
  // const norr = useAppSelector( state => state.norr );

  return (
    <div className="col-12">
      <MenuVideos />
      <TableVideos />
    </div>
  );
}

export default VideoPage;