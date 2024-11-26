import React, { useState } from "react";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useMediaQuery } from "react-responsive";
import { useGetVideosQuery } from "app/services/video";
import ActionsColumn from "components/table/action.column";
import { PreviewVideo } from "./preview.video";
import DetailsVideoWin from "./details.video.win";

const imageBody = (rowData: any) => {

  return (
    <div className="flex align-items-center">
      <PreviewVideo thumbNail={rowData.thumbNail} />
      
      <div className="flex flex-column pl-2">
        <span> <strong>{rowData.name}</strong> </span>
        <span> <i>{rowData.title}</i> </span>
      </div>
    </div>
  );
}

export const TableVideos: React.FC = () => {
  const { data, isLoading } = useGetVideosQuery()
  const [ visible, setVisible ] = useState(false)
  const [ currentId, setCurrentId ] = useState<string | null>(null) 
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const handleShow = (id: string) => { 
    setCurrentId(id)
    setVisible(true) 
  }

  let menu = (item: any) => [
    {
      label: 'Детали видео', 
      icon: 'pi pi-fw pi-cog', 
      command:()=> handleShow(item.id) 
    }
  ]

  const action = (rowData: any) => <ActionsColumn menuItems={menu(rowData)} element={rowData} />

  return (
    <>
      <DataTable value={data} 
        scrollable={!isMobile} scrollHeight={!isMobile ? "calc(100dvh - 228px)" : ""} breakpoint="768px" 
        className="table-mobile-rows" stripedRows loading={isLoading}
      >
        <Column header="Наименование" body={imageBody} sortable sortField="name"></Column>
        <Column header="Дата создания" field="createdAt" sortable sortField="createdAt"></Column>
        <Column body={action} style={{ width: '5rem' }}></Column>
      </DataTable>

      {currentId && (
        <DetailsVideoWin id={currentId} visible={visible} close={() => {
          setVisible(false)
          setCurrentId(null) 
        }} />
      )}
      
    </>
  );
}

export default TableVideos;