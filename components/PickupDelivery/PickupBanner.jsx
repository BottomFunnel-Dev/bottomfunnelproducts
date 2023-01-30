import React from 'react';
import styles from "./pickupBanner.module.css";

export const PickupBanner = () => {
  return (
    <div className={styles.pickupbannermaiboxes}>
      <div className={styles.pickupbannersometextbox}>
        <h1>Set Up An Efficient Online Pickup & Delivery Business</h1>
        <p>
          We all know that managing a business is no easy task, especially
          when it grows and requires more attention. When you have to attend
          to every little detail of it, life gets hectic. And if there's
          shipping involved, things can get even more complicated.
        </p>
        <button className={styles.pickupbannerbutton}>Get Started </button>
      </div>
    </div>
  );
};
