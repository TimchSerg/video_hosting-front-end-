import React, { useEffect } from "react";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useMediaQuery } from "react-responsive";
import { useGetVideosQuery } from "app/services/video";
import ActionsColumn from "components/table/action.column";
import { PreviewVideo } from "./preview.video";

const imageBody = (rowData: any) => {

  return (
    <div className="flex align-items-center">
      <PreviewVideo thumbNail={rowData.thumbNail} />
      
      <div className="flex flex-column pl-2">
        <span> <strong>{rowData.title}</strong> </span>
      </div>
    </div>
  );
}

export const TableVideos: React.FC = (props: any) => {
  const { data, isLoading } = useGetVideosQuery()
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const handleShow = (id: string) => { console.log(id) }

  let menu = (item: any) => [
    {
      label: 'Детали видео', 
      icon: 'pi pi-fw pi-trash', 
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
        <Column header="Наименование" body={imageBody} ></Column>
        <Column header="Дата создания" field="createdAt" sortable sortField="createdAt"></Column>
        <Column body={action} style={{ maxWidth: '5rem' }}></Column>
      </DataTable>
    </>
  );
}

export default TableVideos;