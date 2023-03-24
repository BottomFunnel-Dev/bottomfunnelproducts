
import React from "react";
import styles from "./BusinessTeamForrestor.module.css";

export const BusinessTeamForrestor = () => {
    return (
        <div className={styles.businessTeamForrestorParent}>
            <h2 className={styles.businessTeamForrestorParentHeading}>
                FORRESTER
            </h2>
            <h5 className={styles.businessTeamForrestorParentCintent}>
                Freashworks named a strong performer in the Forrester wave enterprise services management in @4 2021
            </h5>
            <button className={styles.businessTeamForrestorParentBtton}>
                READ THE REPORT
            </button>
        </div>
    )
}