
import styles from "./JourneysWhy.module.css"
import Image from "next/image"

export const JourneysWhy = () => {
    return (
        <div className={styles.journeysWhyParent}>
            <div className={styles.journeysWhyHeading}>
                <h1>Why Journeys?</h1>
                <h6>Journeys are workflows to personilize angagement with your customers
                    and visitores their lifecycles
                </h6>
            </div>
            <div className={styles.journeysWhychild}>
                <div>
                    <div>
                        <Image
                            src={"/Images/Journeys/iconone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h3>Contextual customized conversation</h3>
                    <p>Proactively reach out to provide contextual customer service</p>
                </div>
                <div>
                    <div>
                        <Image
                            src={"/Images/Journeys/icontwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h3>Be where your customers are</h3>
                    <p>Enagage with your customes through chat or bots on emails, WhatsApps , SMS , or social media .</p>

                </div>
                <div>

                    <div>
                        <Image
                            src={"/Images/Journeys/iconthree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h3>personlized engagement</h3>
                    <p>Personalize their experience based on thier behavior and interactions</p>

                </div>
            </div>

        </div>
    )
}