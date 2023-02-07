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
      <div>
        {cardsData.map((elem) => (
          <span key={elem}>{elem}</span>
        ))}
      </div>
    </div>
  );
};
