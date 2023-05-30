import React from "react";
import styles from "./CollaboratinTeamwork.module.css";

export const CollaboratinTeamwork = () => {
  return (
    <div className={styles.CollaboratinTeamworkContainer}>
      <hr />
      <div>
        <div className={styles.CollaboratinTeamworkContent}>
          <h1>We fuel teamwork and efficiency</h1>
          <p>
            Bottom funnel desk packs a suite of powerful collaboratin feature that can
            help teams work efficiently to provide better support experience for
            the customer.
          </p>
        </div>
        <div className={styles.CollaboratinTeamworkImage}>
          <img
            src="https://d3op2l77j7wnti.cloudfront.net/Images/collaborationPhotos/CollaboratinTeamwork.webp"
            alt="CollaboratinTeamwork.webp"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
