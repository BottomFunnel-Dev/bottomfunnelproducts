import React from "react";
import styles from "./SimplifiedTicketting.module.css";

export const SimplifiedTicketting = () => {
  return (
    <div className={styles.simplifiedTickettingContainer}>
      <hr />
      <div>
        <div className={styles.simplifiedTickettingContent}>
          <h1>We've Simplified Ticketing For You!</h1>
          <p>
            Customer Issues from any Channels can be Converted into tickets.This
            Way none of Your Customers converstion slip through cracks.
          </p>
        </div>
        <div className={styles.simplifiedTickettingImage}>
          <img
            src="https://d3op2l77j7wnti.cloudfront.net/Images/ticketingPhotos/Tickets-4.webp"
            alt="simplifiedTicketting"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
