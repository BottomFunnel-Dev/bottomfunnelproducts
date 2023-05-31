import React from "react";
import styles from "./ChatBotsCustomers.module.css";
import Image from "next/image";
export const ChatBotsCustomers = () => {
    const Chatbotd = [{img:"/Images/ChatBots/imageone.webp",hd:"Serve! Not ignore",p:"Go beyond deflecting customer queries and embrace the opportunity to delight your customers. Our AI chatbot solutions provide personalized, efficient, and proactive support, ensuring customer satisfaction and building long-term relationships with your audience."},
    {img:"/Images/ChatBots/imagetwo.webp",hd:"Everything in one place",p:"Simplify your digital experience with our AI chatbot. Access all your favorite apps seamlessly in one place, saving time and effort. Our chatbot integrates with various applications, providing a unified and efficient platform for managing your tasks, communications, and more. Streamline your app usage and enhance productivity with ease."},
    {img:"/Images/ChatBots/imagethree.webp",hd:"Transform your support into the polyglot",p:"Break language barriers and reach a global audience with our polyglot AI chatbot. Speak your customers' language effortlessly, as our chatbot supports multiple languages, ensuring effective communication and engagement. From English to Spanish, French to Mandarin, our bot is equipped to deliver personalized experiences in the language your customers prefer, driving better interactions and customer satisfaction."},
    {img:"/Images/ChatBots/imagefour.webp",hd:"Capture a caring brand identity",p:"Maintain your brand identity with our AI chatbot solution. We understand the importance of consistency and personalization, which is why our chatbot can be fully customized to reflect your brand's unique voice, tone, and aesthetics. From the conversation style to the visual elements, our chatbot seamlessly integrates with your brand, enhancing customer recognition and trust."}]
    

    return (
        <div className={styles.chatbotscustomersparent}>
            <h2 className={styles.hfontwiegth}>Elevate Customer Satisfaction with AI Chatbots
            </h2>
            <p>Enhance customer satisfaction through personalized interactions and quick problem resolution with our AI chatbot solutions.</p>
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