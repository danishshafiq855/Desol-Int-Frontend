
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token') != undefined) {
          // Token found
          return <Component {...props} />;
        } else {
          <Redirect to='/login' />;
        }
      }}
    />
  );
};

export default PrivateRoute;
