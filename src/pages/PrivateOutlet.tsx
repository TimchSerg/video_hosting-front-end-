import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import Main from './main';

export function PrivateOutlet() {
  const auth = useAppSelector( state => state.auth );
  const location = useLocation()
console.log(auth)
  return auth.isAuthenticated ? (
    <Main />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}