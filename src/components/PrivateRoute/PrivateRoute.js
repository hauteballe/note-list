import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {
  const user = useSelector((state) => state.user);
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
              pathname: "/notes/sign-in",
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
