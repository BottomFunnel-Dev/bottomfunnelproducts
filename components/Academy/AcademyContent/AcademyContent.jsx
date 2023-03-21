import React from 'react'
import styles from "./AcademyContent.module.css"
import Image from 'next/image'

export default function AcademyContent () {
  return (
    <div className={styles.academyContentMainDiv}>
        <h2>Explore Bottom Funnel Academy Content</h2>
        <div className={styles.academyContentData}>
            <div className={styles.academyContentDiv}>
                <div className={styles.academyContentDivImage}>
                 <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/academy/Group1.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                    />
                </div>
                <h2>Courses</h2>
                <p>Get trained on skills you need to excel in your career</p>
                <button>Enroll Now</button>
            </div>

            <div className={styles.academyContentDiv}>
                <div className={styles.academyContentDivImage}>
                 <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/academy/Group2.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                    />
                </div>
                <h2>Certifications</h2>
                <p>Become a Bottom Funnel Certified product <br/>expert</p>
                <button>Enroll Now</button>
            </div>
        </div>
    </div>
  )
}