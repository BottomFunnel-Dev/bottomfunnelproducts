import React from 'react'
import styles from "./EmailIntegrationCards.module.css";
import Image from 'next/image';

export const EmailIntegrationCards = () => {
  return (
    <div>
        <div className={styles.EmailIntegrationCards}>
         <div className={styles.EmailIntegrationCardsinner}>
             <div className={styles.EmailIntegrationCardsmainbox}>
                <div className={styles.EmailIntegrationCardsmaincontent}>
                  <h3>Stay focused on selling with the two-way email sync</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum sed voluptatibus explicabo. Voluptate adipisci odit magnam, voluptatem ex expedita, recusandae officia nulla corrupti nemo explicabo eligendi quia dolorum assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda et distinctio quidem atque pariatur, dolor corporis excepturi sapiente veritatis laborum? Optio modi ut adipisci quasi, tenetur dolore sequi suscipit.</p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={"/Images/EmailIntegrationphotos/screens1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>

             <div className={styles.EmailIntegrationCardsmainbox1}>
                <div className={styles.EmailIntegrationCardsmaincontent1}>
                  <h3>Run outbound campaigns from your CRM</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum sed voluptatibus explicabo. Voluptate adipisci odit magnam, voluptatem ex expedita, recusandae officia nulla corrupti nemo explicabo eligendi quia dolorum assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda et distinctio quidem atque pariatur, dolor corporis excepturi sapiente veritatis laborum? Optio modi ut adipisci quasi, tenetur dolore sequi suscipit.</p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={"/Images/EmailIntegrationphotos/screens2.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>

             <div className={styles.EmailIntegrationCardsmainbox}>
                <div className={styles.EmailIntegrationCardsmaincontent}>
                  <h3>Stay focused on selling with the two-way email sync</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum sed voluptatibus explicabo. Voluptate adipisci odit magnam, voluptatem ex expedita, recusandae officia nulla corrupti nemo explicabo eligendi quia dolorum assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda et distinctio quidem atque pariatur, dolor corporis excepturi sapiente veritatis laborum? Optio modi ut adipisci quasi, tenetur dolore sequi suscipit.</p>
                </div>
                <div className={styles.EmailIntegrationCardsimage}>
                    <div>
                    <Image
          src={"/Images/EmailIntegrationphotos/sreens3.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                    </div>

                </div>

             </div>
            </div>   

        </div>
    </div>
  )
}
