import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
import { Field, Form } from "react-final-form";
import { Button } from "primereact/button";
import { composeValidators, requiredValidator } from "components/form/validators";
import { TextAreaField, TextField } from "components/form/fields";
import SingleUploadVideo from "components/upload/single.upload.video";
import { useCreateVideoMutation, useGetVideosQuery, useUploadMutation } from "app/services/video";

interface IProps {
  visible: boolean;
  close: () => void;
}

export const AddVideoWin: React.FC<IProps> = (props: IProps) => {
  const {visible, close} = props;
  const [ isLoading, setLoading ] = useState(false);
  const [ file, setFile ] = useState<string | null>(null);
  const { refetch } = useGetVideosQuery()
  const [ upload ] = useUploadMutation();
  const [ createVideo ] = useCreateVideoMutation();

  const onSubmit = (values: any) => {
    setLoading(true)
    upload({ file })
      .then( (response: any) => {
          return createVideo({
            name: values.name,
            title: values.title,
            urlVideo: response.data.urlVideo,
            thumbNail: response.data.thumbNail,
            pic: response.data.pic
          }) 
        }
      )
      .catch( err => console.log(err) )
      .finally( () => {
        setLoading(false)
        refetch()
        close()
      } )
  }

  return (
    <Dialog 
      header="Добавление видео" 
      visible={visible} 
      className="col-12 p-0 md:col-6"
      onHide={close}
    >
      <Form
        onSubmit={onSubmit}
        initialValues={null}
        render={({ handleSubmit }) => (
          
          <form onSubmit={handleSubmit}>
            <div className="col-12 p-0 flex flex-wrap">
              

              <div className="col-12 p-0">

                <div className="col-12 p-1">
                  <Field
                    validate={composeValidators(requiredValidator)}
                    name="name" label="Наименование:" render={TextField}
                  />
                </div>

                <div className="col-12 p-1">
                  <Field
                    validate={composeValidators(requiredValidator)}
                    name="title" label="Описание:" render={TextAreaField}
                  />
                </div>

                <div className="col-12 p-1">
                  <SingleUploadVideo onSelectFIle={setFile} />
                </div>

              </div>
            </div>
              
              <div className="col-12 p-0 flex flex-wrap mt-1 mb-2 justify-content-end">
                <div className="col-12 md:col-6 xl:col-3">
                  <Button label="Добавить" className="col-12 p-button-raised p-button-success " disabled={isLoading}/>
                </div>
              </div>
            </form>
        )}
      />
    </Dialog>
  );
}

export default AddVideoWin;
