import * as React from 'react'
import { Field, Form } from 'react-final-form'
import { composeValidators, requiredValidator } from 'components/form/validators'
import { PasswordField, TextField } from 'components/form/fields'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom'
import { UserResponse } from 'app/services/auth';
import { useAppSelector } from 'app/hooks';
import { useDispatch } from 'react-redux';
import { login } from './slice';


export const Login = () => {
  const [formState] = React.useState<UserResponse>({
    login: '',
    password: '',
  })
  const auth = useAppSelector( state => state.auth );
  const dispatch = useDispatch();
  const navigate = useNavigate()

  React.useEffect(() => {
    if(auth.isAuthenticated) navigate('/video')
  }, [auth]) // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = (values: UserResponse) => {
    dispatch(login(values))
  }

  return (
    <div className="col-12 flex justify-content-center align-items-center" style={{height: '100dvh'}}>
      <div className="col-12 md:col-4 p-xl-3 p-0">
        <div className="col-12 p-0 flex justify-content-center flex-column align-items-center">
          <h3 className="m-2">Панель управления</h3>
        </div>

        <Form
          onSubmit={onSubmit}
          initialValues={formState}
          render={({ handleSubmit, submitting}) => (
            <form onSubmit={handleSubmit}>
              
              <div className="mt-1 mb-2">
                <Field
                  validate={composeValidators(requiredValidator)}
                  name="login"
                  label="Логин:"
                  render={TextField}
                />
              </div>

              <div className="mt-1 mb-2">
                <Field
                  validate={requiredValidator}
                  name="password"
                  label="Пароль:"
                  render={PasswordField}
                  settings={{
                    feedback: false,
                  }}
                />
              </div>

              <div className="mt-1">
                <Button className="btn btn-primary col-12"label="Авторизоваться" disabled={submitting} />
              </div>
            </form>
          )}
        />
      </div>
    </div>
  )
}

export default Login