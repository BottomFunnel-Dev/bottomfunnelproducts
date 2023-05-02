import React from "react";
import styles from "./ChatCampaign.module.css";
export const ChatCampaign = () => {
    return (
        <div className={styles.ChatCampaignParent}>
            <h3> Email, SMS, WhatsApp, and Chat campaigns-automate customer enegagement with one solution </h3>

            <div className={styles.chatCampaignTextMainDiv}>
                <div className={styles.gridparent}>

                    <div>
                        <h3>Pre-built Journey to get started</h3>
                        <p>Choose from ready-to-use journets to grow your auience, boost sales, track orders, and more to engage with customer round-the-clock</p>
                    </div>

                    <div>
                        <h3>Recover abandoned carts in real-time</h3>
                        <p>Automate remaining shoppers to instantly complete purchase through email ,SMS, or WhatsaApp and get them back to your store </p>
                    </div>

                    <div>
                        <h3>Improve ecperience with feedback journeys</h3>
                        <p>Check in with customer on thier orders, get feedback and let them know you care to build long lasting reationships and deeper loyalty</p>
                    </div>
                </div>
                
               
            </div>
          
           
        </div>

    );
}