
import styles from "./JourneysChat.module.css"
import Image from "next/image"

export const JourneysChat = () => {
    return (
        <div className={styles.journeysChatPerent}>
            <div className={styles.journeysChatheading}>
                <h2>Be customer-first with Bottom Funnel Chat</h2>
                <p>your customer want your business to be more accessible thanever.Let them know you're there for them</p>
            </div>
            <div className={styles.journeysChatdivone}>
                <div className={styles.journeysChatdivoneImage}>
                    <Image
                        src={"/Images/Journeys/imageone.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.journeysChatdivonecontent}>
                    <h2>
                        Create messages that resonate with your customers
                    </h2>
                    <p>
                        Increase customer engagement on your websites,mobile app,email, SMS , or Whatsapp with compelling messages,images ,GIFs,Mobile app,email,SMS ,or whatsApp with compelling messages, images ,gifs, adn vides.
                    </p>
                </div>


            </div>


            <div className={styles.journeysChatdivtwo}>

                <div className={styles.journeysChatdivtwocontent}>
                    <h2>
                        get started with jouneys on just a click                    </h2>
                    <p>
                        Get a headstart with readt-to-use , customerizable templete.Offers a personized experience with just a click.
                    </p>
                </div>
                <div className={styles.journeysChatdivtwoImage}>
                    <Image
                        src={"/Images/Journeys/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>


            </div>
        </div>
    )
}