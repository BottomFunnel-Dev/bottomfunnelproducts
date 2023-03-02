import styles from "./GuideToShopFyConversation.module.css"
import Image from "next/image"

export const GuideToShopFyCoversation = () => {
    return (
        <div className={styles.GuideToShopFyCoversationparent}>
            <div className={styles.GuideToShopFyCoversationparentfirstchild}>

                <h1>Manage Your Conversation</h1>
                <p>Bring all your customer conversation from across different channels to one place.</p>
                <div className={styles.GuideToShopFyCoversationfirstChilddiv}>
                    <div>

                        <h1>View conversation in one place with Agent inbox </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon18.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />

                    </div>

                    <p>With the agent inbox , Uou get context into customer purhcase history ,thier privious conversation ,itmes in cart , adn more to resove quesries faster</p>

                </div>

            </div>
            <div className={styles.GuideToShopFyCoversationparentsecchild}>



                <div className={styles.GuideToShopFyCoversationparentsecchildfirstdiv}>
                    <h1>Launch multichannel journey</h1>
                    <p>Set up Journey witheasy-to-use playbooks and triggers campaigns across channels-emails ,Whatsapp ,SMS and chat</p>
                </div>
                <div className={styles.GuideToShopFyCoversationparentsecchildsecdiv}>
                    <div>
                        <div>

                            <h1>Create your journey from scratch </h1>
                            <Image
                                src={"/Images/GuideToShopFy/icon19.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "15%", height: "15%" }}

                            />
                        </div>

                        <p>Connect your whatsapp business account to engage with buyer via whatsapp . Create message Templete on facebook to trigger whatsapp on facebook to trigger whatsapp notification .Set up chatbots to run chat flows on whatsapp</p>

                    </div>
                    <div>
                        <div>

                            <h1>Choose from pre -built shopify playbooks</h1>
                            <Image
                                src={"/Images/GuideToShopFy/icon20.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "15%", height: "15%" }}

                            />
                        </div>

                        <p>get satrted with journey using shopify -specific playbooks to run comapaign and follow up action for comman use cases like order confirmation ,cart abandonment ,post -purchase feedback , and more</p>

                    </div>

                </div>



            </div>

        </div>
    )
}