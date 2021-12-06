import { ROUTES } from "config/constants";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const isContentAvailable = useSelector((state) => Boolean(state.user.email));

  return (
    <Route
      {...rest}
      render={() =>
        isContentAvailable ? children : <Redirect to={ROUTES.signIn} />
      }
    />
  );
};

export default PrivateRoute;
