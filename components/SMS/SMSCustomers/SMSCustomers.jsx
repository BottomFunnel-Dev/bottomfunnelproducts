import React from 'react'
import styles from "./SMSCustomers.module.css";
import Image from 'next/image';
export const SMSCustomers = () => {
    return (
        <div className={styles.smscustomerParent}>
            <h2>Experience a reliable, easy, and scalable Messenger platform with SMS</h2>
            <div className={styles.smscustomerParentfirstchild}>

                <div className={styles.smscustomerParentfirstchildContent}>
                    <h3>
                        Enable conversational support with customers via SMS
                    </h3>
                    <p>With SMS on Bottom funnel chat, handling two way conversation is convenient and simple . SMS allows you to instantly send and recieve messages , making it easy for you deliver exceptional customer support.
                    With SMS on Bottom funnel chat, handling two way conversation is convenient and simple . SMS allows you to instantly send and recieve messages , making it easy for you deliver exceptional customer support. You can now :
                    </p>

                    <ul className={styles.smscustomerParentfirstchildList}>
                       <li>Connect with your customers globally, offer immediate customer service. Connect with your customers globally and improve resolution time by 2X. </li>
                       <li>
                        Provide personalized support and build suport and build enduring customer responsibility.
                       </li>
                    </ul>
                    
                </div>
                <div className={styles.smscustomerParentfirstchildImage}>
                    <Image
                        src={"/Images/sms/imageone.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>


            <div className={styles.smscustomerParentsecchild}>


                <div className={styles.smbcustomerParentsecchildImage}>
                    <Image
                        src={"/Images/sms/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.smscustomerParentsecchildContent}>
                    <h3>Enjoy hassle-free setup and uninterupted sevices for </h3>
                    <p> 
                        Setting up SMS on Bottom funnel chat is a breeze ! As SMS is natively available on all devices , Setting up SMS all 
                        you have to do is connect your SMS provider in Bottom funnel chat and import your phone numbers . As SMS is natively available on all devices , the easy-to-configure setup allows you to:
                    </p>
                    <ul className={styles.smscustomerParentfirstchildList}>
                        <li>
                            Enable conversational support with no code or third-party app integrations. Enable conversational support with no code. 
                        </li>
                        <li>
                            Always stay connected with custoner and delightful customer Experiences. Always stay connected with customer.
                        </li>
                    </ul>
                    
                </div>
            </div>




        </div>
    )
}