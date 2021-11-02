import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {
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
              pathname: "/note-list/sign-in",
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
