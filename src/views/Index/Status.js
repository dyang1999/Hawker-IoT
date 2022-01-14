import Nav from "../../components/Nav/Nav";
import React from "react";
import classes from "./Status.module.css";

const Status = () => {
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.row}>
          <div className={classes.seat} />
          <div className={classes.seat} />
        </div>
        <div className={classes.row}>
          <div className={classes.table} />
          <div className={classes.table} />
        </div>
        <div className={classes.row}>
          <div className={classes.seat} />
          <div className={classes.seat} />
        </div>
      </div>
    </div>
  );
};

export default Status;
