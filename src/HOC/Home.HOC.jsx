import { Fragment } from "react";
import { Route } from "react-router-dom";

import HomeLayout from "../layouts/Home.layout";

const HomeLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <Route
        {...rest}
        component={(props) => (
          <HomeLayout>
            <Component {...props} />
          </HomeLayout>
        )}
      />
    </Fragment>
  );
};

export default HomeLayoutHOC;
