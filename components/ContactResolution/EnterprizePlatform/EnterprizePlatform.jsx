import React from 'react'
import styles from "./EnterprizePlatform.module.css"
import Image from 'next/image'

export const EnterprizePlatform = () => {
  return (
    <div>
        <div className={styles.EnterprizePlatformdiv}>
            <h2>
            Built on Neo, the enterprise platform tuned for scaling
            </h2>
            <p>Meet your expanding customer needs with the open and flexible Freshworks Platform. Access rich APIs for custom integrations, automated workflows, smart analytics, ecosystem partner solutions, and hundreds of Marketplace Apps. 

</p>
<button className={styles.EnterprizePlatformdivbutton}>Learn More</button>
        </div>
        {/* <div  className={styles.EnterprizePlatformcarddiv}>
            <h2>Businesses use Freshchat to wow their customers</h2>
            <div className={styles.EnterprizePlatformcarddivinner}>
                <div className={styles.EnterprizePlatformcarddivinnerbox}>
                    <div className={styles.EnterprizePlatformcarddivinnerboximage}>
                    <Image
                        src={"/Images/contactresolutionphotos/Rectangle 1067611.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                    <p>Klarna delights its 80M customers with rapid resolutions. </p>
                    <button>Read More</button>
                </div>
            </div>
        </div> */}
    </div>
  )
}
