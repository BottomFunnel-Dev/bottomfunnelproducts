import React from 'react';
import styles from "./HireTalent.module.css";

export const HireTalent = () => {
    return (
        <div className={styles.HireTalent}>
            <div>
            <h1>Hire from india Largest Talent Network</h1>
            <p>Explore the 50,000+ strong top, pre-vetted talent. From India, for the world.</p>
            </div>
            <div className={styles.HireTalentimage}>
                <div>
                    <div>Click to know more</div>
                    <div>
                        <h5>Front-End Developers</h5>
                        <h5>-</h5>
                    </div>
                </div>

            </div>
            <div className={styles.HireTalentcolum}>
                <div className={styles.HireTalentcoluminner}>Front-end Developers</div>
                <div className={styles.HireTalentcoluminner}>Back-end Developers</div>
                <div className={styles.HireTalentcoluminner}>Product Designers</div>
                <div className={styles.HireTalentcoluminner}>Software Engineers</div>
                <div className={styles.HireTalentcoluminner}>SalesFroce Experts</div>
                <div className={styles.HireTalentcoluminner}>Digital Marketing </div>
                <div className={styles.HireTalentcoluminner}>Cross Platfrom Developers</div>
                <div className={styles.HireTalentcoluminner}>Native App developers</div>
            </div>
         
        </div>
    );
    };