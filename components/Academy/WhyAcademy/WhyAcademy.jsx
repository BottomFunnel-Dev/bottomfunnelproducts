import React from 'react'
import styles from "./WhyAcademy.module.css"
import Image from 'next/image'

export default function WhyAcademy () {
  return (
     <div className={styles.whyAcademyContentMainDiv}>
        <h2>Why Bottom Funnel Academy</h2>
        <div className={styles.whyAcademyContentData}>
            <div className={styles.whyAcademyContentDataDiv}>
                <div className={styles.whyAcademyContentDataImage}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/academy/Rectangle1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
                <h3>Improve Your Skills</h3>
                <p>Arm Yourself with knowledge and tools needed to ace day-to-day work and accelerate personal growth.</p>
            </div>
            <div className={styles.whyAcademyContentDataDiv}>
                <div className={styles.whyAcademyContentDataImage}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/academy/Rectangle2.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
                <h3>Get certified</h3>
                <p>Test your knowledge and skills to get certified.Show the world that you have what it takes to succeed.</p>
            </div>
            <div className={styles.whyAcademyContentDataDiv}>
                <div className={styles.whyAcademyContentDataImage}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/academy/Rectangle3.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
                <h3>Join the community</h3>
                <p>Connect with like-minded,customer focused professionals from across the globe.</p>
            </div>
        </div>
        <div className={styles.whyAcademyButtonDiv}>
            <button className={styles.whyAcademyButton1}>Enroll Now</button>
            <button className={styles.whyAcademyButton2}>Log In</button>
        </div>
     </div>
  )
}
