import React from 'react'
import styles from "./SMBCustomers.module.css";
import Image from 'next/image';
export const SMBCustomers = () => {
    return (
        <div className={styles.smbcustomerParent}>
            <h1>Messaging is the new way to interact with your customers</h1>
            <div className={styles.smbcustomerParentfirstchild}>
                <div className={styles.smbcustomerParentfirstchildImage}>
                    <Image
                        src={"/Images/sbm/imageone.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.smbcustomerParentfirstchildContent}>
                    <h2>Serve customers proactively</h2>
                    <p>Let your customers know you're there by triggering the
                        right messages at the right time on different channes like web, mobile and whatsapp. Use images,GIFs and videos to creaete compelling messages and follow up with intelligent engagement to drive quike resolution
                        right messages at the right time on different channes like web, mobile and whatsapp. Use images,GIFs and videos to creaete compelling messages and follow up with intelligent engagement to drive quike resolution

                    </p>
                    <button>
                        Explore more &#8594;
                    </button>
                </div>
            </div>


            <div className={styles.smbcustomerParentsecchild}>

                <div className={styles.smbcustomerParentsecchildContent}>
                    <h2>Provide convenient customer services</h2>
                    <p> Leaverage integration with multiple channels like web, mobile, Whatsapp, Messenger, Apple Bussiness Chat call volumes and costts by giveng customers faster ways to get in touch with you.
                        Leaverage integration with multiple channels like web, mobile, Whatsapp, Messenger, Apple Bussiness Chat call volumes and costts by giveng customers faster ways to get in touch with you.
                    </p>
                    <button>
                        Explore more &#8594;
                    </button>
                </div>
                <div className={styles.smbcustomerParentsecchildImage}>
                    <Image
                        src={"/Images/sbm/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>



            <div className={styles.smbcustomerParentthirdchild}>
                <div className={styles.smbcustomerParentthirdchildImage}>
                    <Image
                        src={"/Images/sbm/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.smbcustomerParentthirdchildContent}>
                    <h2>Scale with smart self -service</h2>
                    <p>
                        Use our no-code builder to build and automate intricate decision trees. Guide your customers to a zero contact resolution,By helping them find right answers to thier question instantly.
                        Use our no-code builder to build and automate intricate decision trees. Guide your customers to a zero contact resolution,By helping them find right answers to thier question instantly.

                    </p>
                    <button>
                        Explore more &#8594;
                    </button>
                </div>
            </div>



            <div className={styles.smbcustomerParentforthchild}>

                <div className={styles.smbcustomerParentforthchildContent}>
                    <h2>Serve customers proactively </h2>
                    <p>
                        Provide the best possible agent experience with team inbox. Switch between multiple conversation, get visitor intel instantly ,use predefined  responses , connect with 3rd party tools on-demand and more .
                        Provide the best possible agent experience with team inbox. Switch between multiple conversation, get visitor intel instantly ,use predefined  responses , connect with 3rd party tools on-demand and more .

                    </p>
                    <button>
                        Explore more &#8594;
                    </button>
                </div>
                <div className={styles.smbcustomerParentforthchildImage}>
                    <Image
                        src={"/Images/sbm/imagefour.webp"}
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