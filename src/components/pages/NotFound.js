import React, { Link, Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1>NOT FOUND</h1>
      <p className="lead">The page you are looking for does not exist</p>
      <a href="/" className="btn btn-light">
        Back to Search
      </a>
    </Fragment>
  );
};

export default NotFound;
