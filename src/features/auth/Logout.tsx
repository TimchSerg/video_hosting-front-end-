import { useDispatch } from 'react-redux';
import { logout } from './slice';
import { Button } from 'primereact/button';


export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <Button 
      label="Выйти" 
      className="col-12" 
      style={{cursor: 'pointer'}}
      onClick={() => dispatch(logout())} 
    />
  )
}

export default Logout;