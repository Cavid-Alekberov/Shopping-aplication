import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={classes.imageBox}>
      <h1 className={classes.homeContent}>
        <Link to="all">Shop Now</Link>
        <span className={classes.sp1}>industrial design meets fashion.</span>
        <span className={classes.sp2}>atypical leather goods</span>
      </h1>
    </div>
  );
};
