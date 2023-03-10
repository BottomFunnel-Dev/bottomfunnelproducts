
import React from "react";
import styles from "./InsuranceSoftware.module.css"

export const InsuranceSoftware = () => {
    return (
        <div className={styles.InsuranceSoftwareParent}>
            <h4>Why the insurance industry requires intelligent, digital-first customer service software?</h4>
            <div className={styles.InsuranceSoftwareParentOnlyChild}>
                <div>
                    <div>
                       <h1>22%</h1> </div>
                    <p>Of insurers have launched
                        personalized, real-time
                        digital, or mobile service</p>
                </div>
                <div>
                    <div><h1>55%</h1></div>
                    <p>Of customers don’t trust their
                        insurance company to
                        collect and use 'alternate
                        data' such as driving
                        behavior, or intersections on
                        social media.</p>
                </div>
                <div>
                    <div><h1>79%
                        </h1></div>
                    <p>
                        Of consumers worldwide say
                        they will use a digital channel
                        for insurance interactions
                        over the next few years.
                    </p>
                </div>
            </div>
        </div>
    )
}