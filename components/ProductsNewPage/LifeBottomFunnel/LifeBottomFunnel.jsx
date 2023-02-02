import React from 'react';
import styles from "./LifeBottomFunnel.module.css";

const LifeBottomFunnel = () => {
    return (
        <div className={styles.lifeMainOuterDiv}>
            <div className={styles.lifeHeadingMainDiv}>
                <p>
                    Welcome to Bottom Funnel
                </p>

                <h1>
                    Work the way that works for you
                </h1>
            </div>

            <div className={styles.lifeImageMainDiv}>
                <div className={styles.lifeImageInnerDiv}>
                    <div className={styles.lifeImageDiv}>
                        <img src="/Images/ProductsPage/Footer/LifeImage1.png" alt='image'/>
                    </div>

                    <div className={styles.lifeImageDiv}>
                        <img src='/Images/ProductsPage/Footer/LifeImage2.png' alt='image'/>
                    </div>

                    <div className={styles.lifeImageDiv}>
                        <img src='/Images/ProductsPage/Footer/LifeImage3.png' alt='image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifeBottomFunnel;