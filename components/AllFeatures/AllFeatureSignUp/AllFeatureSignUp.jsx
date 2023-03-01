import React from "react";
import styles from "./AllFeatureSignUp.module.css";
import Image from "next/image";

export const AllFeatureSignUp = () => {
  return (
    <div className={styles.allFeatureSignUp}>
        <h1>Sign Up for Bottom Funnel</h1>
        <p>Start your 21 day free trial. No credit card required</p>
        <button>Start a free demo</button>
    </div>
  );
};
