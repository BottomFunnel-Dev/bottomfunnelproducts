
import React from "react";
import styles from "./BusinessTeamcards.module.css";
import Image from "next/image";
export const BusinessTeamcards = () => {
    return (
        <div className={styles.businessTeamcardsParent}>

            
            <div className={styles.businessTeamcardsParentChild}>


                <div className={styles.businessTeamcardsParentChildCard}>
                    <div className={styles.businessTeamcardsParentChildImage}>
                        <h1 className={styles.logo}>
                            Travix
                        </h1>

                    </div>
                    <h5 className={styles.businessTeamcardsParentChildCardcontent}>
                        "For travish chat is no longer 'just another' channel. The goal is to ensure that by the end of the year, 50% of customer inquiriea take place through chat.
                        . that is massive culture change for our company , which had learned on manual proceses and a 'just give us a call ' - approach to service for many years."
                    </h5>
                    <div className={styles.businessTeamcardsParentChildCardContentdiv} >
                        <h6>
                            Kimblerly strickland
                        </h6>
                        <h6>
                            CC innovatrion Manager
                        </h6>
                        <h6>
                            Travix
                        </h6>
                    </div>
                </div>




                <div className={styles.businessTeamcardsParentChildCard}>
                    <div className={styles.businessTeamcardsParentChildImage}>
                        <Image
                            src={"/Images/BusinessTeam/logo.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />

                    </div>
                    <h5 className={styles.businessTeamcardsParentChildCardcontent}>
                        "
                        we're using freshChat to solve out customer's needs with precision, and in real-time . It has ensured our customers recieve prompt personalized experiences and has also brougth in operational efficeient that make assisted buying extremely scalable
                        "
                         </h5>
                    <div className={styles.businessTeamcardsParentChildCardContentdiv} >
                        <h6 >
                           rajesh Magow
                        </h6>
                        <h6>
                            Co-Founder and CEO
                        </h6>
                        <h6>
                            MakeMyTrip
                        </h6>
                    </div>
                </div>
            </div>


        </div>
    )
}