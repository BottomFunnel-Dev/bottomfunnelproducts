import React from "react";
import styles from "./WorkLifeBalance.module.css";

export const WorkLifeBalance = () => {
  const cardsData = [
    "Flexible Work Arrangements",
    " Time Off ",
    " Employee Wellness ",
    " Family-Friendly Policies ",
    " Culture of Respect ",
    " Technology Support ",
    "Management Support",
  ];
  return (
    <div className={styles.WorkLifeBalancemain}>
      <div className={styles.WorkLifeBalanceheading}>
        <div>
          <h1>Work</h1>
          <div></div>
          <h1>Life</h1>
        </div>
        <h1>Balance</h1>
      </div>
      <p>
      Looking for a company that values work-life balance? Explore opportunities with our organization and achieve a fulfilling career and personal life.
      </p>
      <div className={styles.WorkLifeBalancecards}>
        {cardsData.map((elem, idx) => {
          return (
            <div>
              <h1>{idx + 1}</h1>
              <h2>{elem}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
