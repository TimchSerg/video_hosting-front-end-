import React, { useState } from "react";
import { useGetVideosQuery } from "app/services/video";
import { Button } from "primereact/button";
import AddVideoWin from "./add.video.win";

export const MenuVideos: React.FC = () => {
  const { refetch } = useGetVideosQuery()
  const [ visible, setVisible ] = useState(false);

  const handleAdd = () => { setVisible(true) }
  const handleRefresh = () => { refetch() }

  return (
    <>
      <div className="col-12 flex">
        <Button label="Добавить" onClick={handleAdd} severity="success" className="mr-1"/>
        <Button label="Обновить" onClick={handleRefresh} severity="secondary" className="ml-1"/>
      </div>

      <AddVideoWin visible={visible} close={() => setVisible(false)} />
    </>
  );
}

export default MenuVideos;