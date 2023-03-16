import React from "react";
import styles from "./AdditionalProduct.module.css";

export const AdditionalProduct = () => {
  const cardsData = [
    "Click-jacking prevention",
    "SHA 256 encoding",
    "JWT authentication for APIs",
    "Granular app management",
    "Data encryption at rest",
    "Cross-site mitigation",
  ];

  return (
    <div className={styles.additionalProductContainer}>
      <h1>
        Additional <span>Product</span> security features
      </h1>
      <div className={styles.securityadditionDiv}>
          <div className={styles.securityDataDiv}>
            <h3>Click-jacking prevention</h3>
            <h3>SHA 256 encoding</h3>
            <h3>JWT authentication for APIs</h3>
          </div>
          <div className={styles.securityDataDiv}>
            <h3>Granular app management</h3>
            <h3>Data encryption at rest</h3>
            <h3>Cross-site mitigation</h3>
          </div>
      </div>
    </div>
  );
};
