import React from 'react'
import styles from "./LineChatLineUp.module.css";
import Image from 'next/image';
export const LineChatLineUp = () => {
    const data = [{img:"/Images/LineChat/imageone.webp",hd:"Automate with bots",p:"Deploye your chatbots on LINE so tour customers can get instant responses to thier question 20*7. Engage and delight your customers by automateing resolution .With seamliss and contextual agent handovers,you can save time for both customers and agent ."},
    {img:"/Images/LineChat/imagetwo.webp",hd:"Provide effortless experiences",p:"Connect your LINE accounts and bring all your LINE conversation , including images and hyperlinks, into your Bottom funnel chat. Handle all your conversions from one place with 'Team inbox' View and prioritize conversation that neend immediate attention -let you customers know you're there for them."},
    {img:"/Images/LineChat/imagethree.webp",hd:"Keep it contextual",p:"Map every LINE account to the relevant Topic and Group inside Bottom Funnel chat so the conversations are routed to the right agents agents in your team. This way customers reaches your suppot for billing-related issues are utomating routed to the Bitting group."}]
    return (
        <div className={styles.lineupcustomerParent}>
            <h2>Messaging is the new way to interact with your customers</h2>
            {data.map((item) => {
                return(
                    <div className={styles.lineupcustomerParentfirstchild}>
                <div className={styles.lineupcustomerParentfirstchildImage}>
                    <Image
                        src={item.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.lineupcustomerParentfirstchildContent}>
                   <h2>{item.hd}</h2>
                   <p>{item.p}</p>
                </div>
            </div> 
                )
            })}
           



        </div>
    )
}