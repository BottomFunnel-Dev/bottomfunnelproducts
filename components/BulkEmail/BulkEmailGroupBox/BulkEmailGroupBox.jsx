import React from "react";
import styles from "./BulkEmailGroupBox.module.css";

const BulkEmailGroupBox = () => {
  return (
    <div className={styles.bulkEmailGroupBoxImgDiv}>
      <div className={styles.bulkEmailGroupBoxContentDiv}>
        <div>
          <img src="/Images/BulkEmail/Group1000006644.png" alt="logo" />
          <h5>Share updates</h5>
          <p>
            Keep your customers updated on new features, product. upgrades, and
            organization announcements.
          </p>
        </div>

        <div>
          <img src="/Images/BulkEmail/Group1000006645.png" alt="logo" />
          <h5>Re-awaken cold leads</h5>
          <p>
            Send campaigns to cold leads and reinitiate interest. Schedule bulk
            emails with personalized content to improve the chances of
            conversion
          </p>
        </div>

        <div>
          <img src="/Images/BulkEmail/Group1000006646.png" alt="logo" />
          <h5>Convert leads from emails</h5>
          <p>
            Automatically capture leads from emails, if the sender is not an
            existing lead or contact in Freshsales.
          </p>
        </div>

        <div>
          <img src="/Images/BulkEmail/Group1000006647.png" alt="logo" />
          <h5>Event follow-ups</h5>
          <p>
            Schedule and send follow up emails to event attendees. Track open
            and click rates to understand the extent of engagement
          </p>
        </div>
      </div>
    </div>
  );
};

export default BulkEmailGroupBox;
