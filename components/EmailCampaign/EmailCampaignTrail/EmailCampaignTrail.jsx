import React from "react";
import styles from "./EmailCampaignTrail.module.css";
import Image from "next/image";
export const EmailCampaignTrail = () => {
    return (
        <div className={styles.emailCampaignTrailParent}>
            <h2>build enagaging Emailm & SMS Camapaigns with Frshmarketer</h2>
            <p>
                Start your 21-day free trail.No credit card required
            </p>
            <button>
                SIGN UP
            </button>
        </div>
    )
}