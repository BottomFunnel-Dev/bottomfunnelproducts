import React from "react";
import styles from "./softwareandserviceitcollabration.module.css"
import Image from "next/image";
export const Softwareandserviceitcollabration = () => {
    return (

        <div className={styles.softwareandserviceitcollabrationParent}>


            <div className={styles.softwareandserviceitcollabrationone}>
                <Image
                    src={"/Images/softwareandserviceit/Group2.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "70%", height: "70%" }}

                />
            </div>


            <div className={styles.softwareandserviceitcollabrationtwo}>
                <h1>Simplify collaboration</h1>

                <p>Collaboration can get confusing, with endless email chains,
                    chat threads and gaps in context, communication and
                    ownership. Make it easy for customer service, engineering,
                    finance and sales teams to collaborate with context, right
                    within the helpdesk.
                </p>
                <ul>
                    <li> Resolve queries faster with contextual collaboration¯
                    </li>
                    <li> Share tasks across teams for increased efficienc
                    </li>
                    <li>  ­ring internal teams and third-party vendors into customer
                        service workflows </li>

                </ul>
            </div>

        </div>

    );
}