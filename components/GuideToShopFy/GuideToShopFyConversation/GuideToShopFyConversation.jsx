import styles from "./GuideToShopFyConversation.module.css"
import Image from "next/image"

export const GuideToShopFyCoversation = () => {
    return (
        <div className={styles.GuideToShopFyCoversationparent}>




                <div className={styles.GuideToShopFyCoversationparentsecchildfirstdiv}>
                    <h3>Launch multichannel journey</h3>
                    <p>Set up Journey witheasy-to-use playbooks and triggers campaigns across channels-emails ,Whatsapp ,SMS and chat</p>
                </div>
                <div className={styles.GuideToShopFyCoversationparentsecchildsecdiv}>
                    <div>
                        <div>

                            <Image
                                src={"https://d3op2l77j7wnti.cloudfront.net/Images/GuideToShopFy/icon19.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "20%", height: "20%" }}

                            />
                            
                            <h5>Create your journey from scratch </h5>
                        </div>

                        <p>Connect your whatsapp business account to engage with buyer via whatsapp . Create message Templete on facebook to trigger whatsapp on facebook to trigger whatsapp notification .Set up chatbots to run chat flows on whatsapp</p>

                    </div>
                    <div>
                        <div>

                          
                            <Image
                                src={"https://d3op2l77j7wnti.cloudfront.net/Images/GuideToShopFy/icon20.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "20%", height: "20%" }}

                            />
                              <h5>Choose from pre -built shopify playbooks</h5>
                        </div>

                        <p>get satrted with journey using shopify -specific playbooks to run comapaign and follow up action for comman use cases like order confirmation ,cart abandonment ,post -purchase feedback , and more</p>

                    </div>

                </div>

              

        </div>
    )
}