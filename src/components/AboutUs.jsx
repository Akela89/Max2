import React from 'react';
import classes from '../modules/AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={classes.AboutUsWrapper}>
      <h1 className={classes.AboutUsTitle}>About us</h1>
      <p className={classes.AboutUsText}>Welcome to the community of space lovers.</p>
    </div>
  );
};
export default AboutUs;
