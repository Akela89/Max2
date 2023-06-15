import React from "react";
import classes from '../components/loader.module.css'

const Loader = () => {
    return (
      <div className={classes.loader}>
        <div className={classes.loaderIndic}></div>
        <h2 className={classes.textLoader}>Загрузка ...</h2>
      </div>
    );
  }
  
  export default Loader