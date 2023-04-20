import React from "react";
import styles from "./AdWithBgImgNdHeadingNdDesc.module.css"
const AdWithBgImgNdHeadingNdDesc = ({ title, desc, bgUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgUrl})` }}
      className={styles.AdWithBgImgNdHeadingNdDescImgDiv}
    >
      <div className={styles.AdWithBgImgNdHeadingNdDescContentDiv}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AdWithBgImgNdHeadingNdDesc;
