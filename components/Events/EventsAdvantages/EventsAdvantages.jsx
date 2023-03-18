
import styles from "./EventsAdvantages.module.css"
import Image from "next/image";
export const EventsAdvantages = () => {
    return (
        <div className={styles.eventsAdvantagesParent}>
            <div className={styles.eventsAdvantagesHeading}>
                <h3>The Serverless and Eventbridge Advantages</h3>
                <hr />
            </div>
            <div className={styles.eventsAdvantagesContentDiv}>
                <div>
                    <div>
                        <Image
                            src={"/Images/Event/iconone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h3>Secure,Scalable,and reliable</h3>
                    <p>Reduce operatinal overhead with no servers manage.Pay for the events you public.</p>
                </div>
                <div>
                    <div>
                        <Image
                            src={"/Images/Event/icontwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h3>Forget Automate Complex workflows tabs </h3>
                    <p>Automate sprcific and critical taska allowing AWS lambada to respond to events </p>
                </div>
                <div>
                    <div>
                        <Image
                            src={"/Images/Event/iconthree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h3>More freedom to customers</h3>
                    <p>Views events in desired location and have them interact with other AWS services easily </p>
                </div>

            </div>
        </div>
    )
}