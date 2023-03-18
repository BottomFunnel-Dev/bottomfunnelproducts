import React from 'react'
import styles from "./DeveloperPortalCommunity.module.css"
import Image from "next/image";

export const DeveloperPortalCommunity = () => {
  return (
     
    <div className={styles.developerPortalCommunityMainDiv}>
       <div className={styles.developerPortalCommunityBox}> 
           <h2>Community</h2>
           <div className={styles.developerPortalContainer}>
              <div className={styles.developerPortalCommunityText}>
                  <h2>Join BottomFunnel Developer community</h2>
                  <p>Interact learn and share idea with other developers get support from the community members</p>
                  <input type="text" placeholder='Enter your email address' className={styles.developerPortalCommunityInput}/>
                  <button>Subscribe</button>
              </div>
              <div className={styles.developerPortalCommunityImage}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group7.png"}
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

  )
}
