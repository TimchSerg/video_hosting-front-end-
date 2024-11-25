import React from 'react';
import { FileUpload } from 'primereact/fileupload';

interface IProps {
  onSelectFIle: (event: any) => void;
}

const SingleUploadVideo = React.forwardRef<any, IProps>((props: any) => {
  const { onSelectFIle } = props

  const headerTemplate = (options:any) => {
    const { className, chooseButton } = options;

    return (
      <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
        {chooseButton}
      </div>
    );
  }
  
  const chooseOptions = 
    {icon: 'pi pi-fw pi-images', iconOnly: false, className: 'single-choose-btn p-button-rounded p-button-outlined', label: 'Загрузить'};
  const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

  return (
    <div className="galleria single-uploader">
      <FileUpload 
        name="video" 
        url="" 
        onUpload={()=>{}} 
        accept="video/*" 
        maxFileSize={20000000000} 
        customUpload 
        multiple={false}
        headerTemplate={headerTemplate}
        chooseOptions={chooseOptions} 
        cancelOptions={cancelOptions} 
        onSelect={ (e:any) => {
          e.originalEvent.preventDefault();
          if(e.files.length) onSelectFIle(e.files[0]);
        }} 
      />
    </div>
  );
});


export default SingleUploadVideo;