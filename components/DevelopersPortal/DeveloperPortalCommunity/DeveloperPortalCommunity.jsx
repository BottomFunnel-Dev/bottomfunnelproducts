import React from 'react'
import styles from "./DeveloperPortalCommunity.module.css"
import Image from "next/image";

export const DeveloperPortalCommunity = () => {
  return (
     
    <div className={styles.developerPortalCommunityMainDiv}>
       <div className={styles.developerPortalCommunityBox}>
           <h2>Community</h2>
           <div className={styles.developerPortalCommunityImage}>
                <Image
                    src={"/Images/developerPortal/Group7.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
           </div>
           <div className={styles.developerPortalCommunityText}>
              <h2>Join BottomFunnel Developer community</h2>
              <p>Interact learn and share idea with other developers get support from the community members</p>
           </div>
           <input type="text" placeholder='Enter your email address' className={styles.developerPortalCommunityInput}/>
           <button>Subscribe</button>
       </div>
    </div>

  )
}
