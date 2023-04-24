import React from 'react'
import styles from "./ActiveGoals.module.css";

export const ActiveGoals = () => {
  return (
    <div className={styles.ActiveGoalsmaindiv}>
        <div className={styles.ActiveGoalsmaindivcontainer}>

            <div className={styles.ActiveGoalsmaindivcontain}>
                <h1>Take a data-driven approach to proactively help customers achieve their goals, faster.</h1>
                <p>You can't improve what you don't measure. Bottom Funnel Customer Success provides full visibility into customer health metrics with proactive workflow for onboardings,renewals, and beyonnd. Alert customer support teams before it's too late and protect your bittom line.</p>
            </div>
            <div className={styles.ActiveGoalsmaindivcards}>
                <div className={styles.ActiveGoalsmaindivcardsdiv}>
                    <div className={styles.ActiveGoalsmaindivcardsdivinner}>
                        <h5>Increase up-sells and expansions</h5>
                        <div>
                            <img src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customersuccesshomepagephotos/logo1.png" alt="image" />
                        </div>
                        <p>Automatically alert your team to opportunities and convert more trials,upsells,and cross-sells.</p>
                    </div>
                    <div className={styles.ActiveGoalsmaindivcardsdivinner}>
                        <h5>Increase up-sells and expansions</h5>
                        <div>
                            <img src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customersuccesshomepagephotos/logo2.png" alt="image" />
                        </div>
                        <p>Use data to intervene and engage with the right customers at the right time to achieve business outcomes for your customer and your team.</p>
                    </div>
                    <div className={styles.ActiveGoalsmaindivcardsdivinner}>
                        <h5>Reduce churn and improve renewal rates</h5>
                        <div>
                            <img src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customersuccesshomepagephotos/logo3.png" alt="image" />
                        </div>
                        <p>Understand why customers churn with early warnings and manage renewals successfully all in real time.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
