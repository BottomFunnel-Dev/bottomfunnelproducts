import React from 'react';
import styles from "./CustomerRate.module.css";
import { FaStar } from "react-icons/fa";
export const CustomerRate = () => {
  return (
    <div className={styles.customerRateMainDiv}>
       <h1>Customer has Consistently rated around 4.7 / 5</h1>
       <div className={styles.customerRateDContainer}>
        <div className={styles.customerRatedata}>
            <div className={styles.customerStar}>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>
            <div className={styles.customerText}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis pariatur, quis harum inventore eos omnis..</p>
            </div>
            <div className={styles.customerRateImage}>
                <img src='/Images/productmainpageicons/appfutura.png'/>
            </div>
        </div>
        <div className={styles.customerRatedata}>
            <div className={styles.customerStar}>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>
            <div className={styles.customerText}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis pariatur, quis harum inventore eos omnis..</p>
            </div>
            <div className={styles.customerRateImage}>
                <img src='/Images/productmainpageicons/appfutura.png'/>
            </div>
        </div>
        <div className={styles.customerRatedata}>
            <div className={styles.customerStar}>
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>
            <div className={styles.customerText}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis pariatur, quis harum inventore eos omnis..</p>
            </div>
            <div className={styles.customerRateImage}>
                <img src='/Images/productmainpageicons/appfutura.png'/>
            </div>
        </div>
       </div>
    </div>
  );
};
