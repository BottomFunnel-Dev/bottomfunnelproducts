import React from 'react'
import styles from "./DeveloperPortalRegister.module.css"
import Image from "next/image";

export const DeveloperPortalRegister = () => {
  return (
     
     <div className={styles.developerPortalRegisterContainer}>
        <div className={styles.developerPortalRegImage}>
            <Image
                src={"/Images/developerPortal/Group11.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
            />
            <div className={styles.developerPortalRegText}>
                <p>Want to learn more on the Bottom Funnel Paid Apps Programs?</p>
                <h2>Register for an exclusive webinar on Our Website.</h2>
                <button>Register Now</button>
            </div>
        </div>
     </div>

  )
}
