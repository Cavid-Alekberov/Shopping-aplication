import React from "react";
import classes from "./Error.module.scss";

export const Error = () => {
  return (
    <div className={classes.errorPages}>
      <h1>Pages not found</h1>
      <h3>An error occured</h3>
    </div>
  );
};
