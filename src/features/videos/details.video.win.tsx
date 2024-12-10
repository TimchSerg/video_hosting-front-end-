import React from "react";

import { Dialog } from "primereact/dialog";
import { Field, Form } from "react-final-form";
import { Button } from "primereact/button";
import { composeValidators, requiredValidator } from "components/form/validators";
import { TextAreaField, TextField } from "components/form/fields";
import { useGetVideoByIdQuery } from "app/services/video";
import { useDispatch } from "react-redux";
import { showNorr } from "features/norr/slice";

interface IProps {
  id: string;
  visible: boolean;
  close: () => void;
}

export const DetailsVideoWin: React.FC<IProps> = (props: IProps) => {
  const {id, visible, close} = props;
  const dispatch = useDispatch();
  const { data } = useGetVideoByIdQuery(id);

  const onSubmit = () => close()

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    dispatch(showNorr({severity: "info", message: 'Ссылка скопирована в буфер обмена!'}))
  }

  if(!id) return <></>

  return (
    <Dialog 
      header="Детальный просмотр" 
      visible={visible} 
      className="col-12 p-0 md:col-6"
      onHide={close}
    >
      <Form
        onSubmit={onSubmit}
        initialValues={data}
        render={({ handleSubmit, values }) => (
          
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
                  <Field
                    validate={composeValidators(requiredValidator)}
                    name="filename" label="Имя файла:" render={TextField}
                    icon="pi pi-clone"
                    onClickIcon={() => copyText(values.filename)}
                  />
                </div>

                <div className="col-12 p-1">
                  <Field
                    validate={composeValidators(requiredValidator)}
                    name="urlVideo" label="Ссылка на видео:" render={TextField}
                    icon="pi pi-clone"
                    onClickIcon={() => copyText(values.urlVideo)}
                  />
                </div>

                <div className="col-12 p-1">
                  <Field
                    validate={composeValidators(requiredValidator)}
                    name="thumbNail" label="Ссылка на превью:" render={TextField}
                    icon="pi pi-clone"
                    onClickIcon={() => copyText(values.thumbNail)}
                  />
                </div>

                <div className="col-12 p-1">
                  <Field
                    validate={composeValidators(requiredValidator)}
                    name="pic" label="Ссылка на изображение:" render={TextField}
                    icon="pi pi-clone"
                    onClickIcon={() => copyText(values.pic)}
                  />
                </div>

              </div>
            </div>
              
              <div className="col-12 p-0 flex flex-wrap mt-1 mb-2 justify-content-end">
                <div className="col-12 md:col-6 xl:col-3">
                  <Button label="Закрыть" className="col-12 p-button-raised p-button-success"/>
                </div>
              </div>
            </form>
        )}
      />
    </Dialog>
  );
}

export default DetailsVideoWin;
