import React from "react";
import styles from "./BulkEmailBanner.module.css";
const BulkEmailBanner = () => {
  return (
    <div className={styles.bulkEmailBannerMainDiv}>
      <div className={styles.bulkEmailBannerImgDiv}>
        <div className={styles.bulkEmailBannerImgContentDiv}>
          <h1>Improve Customer Engagement with Personalized Bulk Emails</h1>
          <p>
            Craft personalized emails with email templates and track metrics to
            understand performance
          </p>
          <button>Sign-up for free</button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default BulkEmailBanner;
