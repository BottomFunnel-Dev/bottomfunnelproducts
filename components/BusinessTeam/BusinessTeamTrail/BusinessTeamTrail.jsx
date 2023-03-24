
import React from "react";
import styles from "./BusinessTeamTrail.module.css";
import Image from "next/image";
export const BusinessTeamTrail = () => {
    return (
        <div className={styles.businessTeamTrailParent}>
            <h2>
                Achieve elevated employee delight with  Freshservices
            </h2>
            <p>
                Try fresh for free free ask a personilized demo, or chat with us . Your  jurney to be future -ready is a click away.
            </p>
            <button className={styles.businessTeamTrailParentbutton}>SIGN UP FOR FREE</button>
        </div>
    )
}