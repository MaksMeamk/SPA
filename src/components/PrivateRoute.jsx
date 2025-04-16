import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/authorization" replace />;
  } else return <Outlet />;
};

export default PrivateRoute;
