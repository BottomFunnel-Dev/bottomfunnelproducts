import React from 'react';
import styles from "./ReadyStarted.module.css";

const ReadyStarted = () => {
    return (
        <div className={styles.readyStartOuterDiv}>
            <div className={styles.readyStartedMainDiv}>
                <img style={{ width: "100%" }} src='/Images/ProductsPage/Footer/TextImage.png' alt='image' />
            </div>

            {/* <div className={styles.readyStartedButtonOuterDiv}>
                <button> Contact Sales </button>
            </div> */}
        </div>
    )
}

export default ReadyStarted;