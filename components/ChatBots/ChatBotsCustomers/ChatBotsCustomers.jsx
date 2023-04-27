import React from "react";
import styles from "./ChatBotsCustomers.module.css";
import Image from "next/image";
export const ChatBotsCustomers = () => {
    const Chatbotd = [{img:"/Images/ChatBots/imageone.webp",hd:"Delight, not just deflect",p:"Build bots that can detect intent, define its conversations using the powerful no-code builder. Setup flows to guide your customers through a step-by-step troubleshooting process to fully resolve their concerns. Build bots that can detect intent, define its conversations using the powerful no-code builder. Setup flows to guide your customers through a step-by-step troubleshooting process to full resolve their concerns."},
    {img:"/Images/ChatBots/imagetwo.webp",hd:"All your apps, in the mix",p:"Set up APIs for your bot to trigger while inconversation with customers. Your bot can fetch and push data to any of your 3rd party applications and internal systems to improve resolution rates.Set up APIs for your bot to trigger while inconversation with customers. Your bot can fetch and push data to any of your 3rd party applications and internal systems to improve resolution rates."},
    {img:"/Images/ChatBots/imagethree.webp",hd:"Make your bot polyglot",p:" Upload scripts of your bot conversations in any language so your bot can speak in your customers preferred language!Upload scripts of your bot conversations in any language so your bot can speak in your customers preferred language!"},
    {img:"/Images/ChatBots/imagefour.webp",hd:"Retain your brand's identity",p:"Own the look and feel of your chatbot widget so it reflects your brand values. Customize the shape, color, size, and everything about your widget with our simple CSS editor.Own the look and feel of your chatbot widget so it reflects your brand values. Customize the shape, color, size, and everything about your widget with our simple CSS editor"}]
    

    return (
        <div className={styles.chatbotscustomersparent}>
            <h2 className={styles.hfontwiegth}>Turn customer frowns upside down :)
            </h2>
            <p>Build a bot to answer customer questions. Build one to execute actions based on triggers.

                Build one to auto-update customer data. Or build a bot that can do all of this!</p>
               {Chatbotd.map((item) => {
                return(
<div className={styles.chatbotscustomersparentfirstchild}>
                <div className={styles.chatbotcustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>{item.hd}
                    </h2>
                    <p>
                       {item.p}

                    </p>
                </div>
                <div className={styles.chatbotcustoemrsimage}>
                    <Image
                        src={item.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>
                )
               })}
            


            {/* <div className={styles.chatbotscustomersparentfirstchild}>
                <div className={styles.chatbotcustoemrsimage}>
                    <Image
                        src={"/Images/ChatBots/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.chatbotcustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>All your apps, in the mix
                    </h2>
                    <p>
                        Set up APIs for your bot to trigger while inconversation with customers. Your bot can fetch
                        and push data to any of your 3rd party
                        applications and internal systems to improve
                        resolution rates.Set up APIs for your bot to trigger while inconversation with customers. Your bot can fetch
                        and push data to any of your 3rd party
                        applications and internal systems to improve
                        resolution rates.

                    </p>
                </div>


            </div>




            <div className={styles.chatbotscustomersparentfirstchild}>
                <div className={styles.chatbotcustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>Make your bot polyglot
                    </h2>
                    <p>
                        Upload scripts of your bot conversations in any
                        language so your bot can speak in your customers
                        preferred language!Upload scripts of your bot conversations in any
                        language so your bot can speak in your customers
                        preferred language!



                    </p>
                </div>
                <div className={styles.chatbotcustoemrsimage}>
                    <Image
                        src={"/Images/ChatBots/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>



            <div className={styles.chatbotscustomersparentfirstchild}>
                <div className={styles.chatbotcustoemrsimage}>
                    <Image
                        src={"/Images/ChatBots/imagefour.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.chatbotcustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>Retain your brand s identity
                    </h2>
                    <p>
                        Own the look and feel of your chatbot widget so
                        it reflects your brand values. Customize the
                        shape, color, size, and everything about your
                        widget with our simple CSS editor.Own the look and feel of your chatbot widget so
                        it reflects your brand values. Customize the
                        shape, color, size, and everything about your
                        widget with our simple CSS editor

                    </p>
                </div>

            </div> */}

        </div>
    )
}