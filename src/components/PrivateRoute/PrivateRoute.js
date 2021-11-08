import { ROUTES } from "config/constants";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.user.email);
  let isContentAvailable = Boolean(user);

  return (
    <Route
      {...rest}
      render={() =>
        isContentAvailable ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.notFound,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
