import React from 'react'
import styles from "./CRMedtech.module.css";
import Image from "next/image"

export const CRMedtech = () => {
  return (
    <>
    
    <div   className={styles.CRMedtechmaindiv}>
       <div className={styles.CRMedtechmaindivimage}>
       <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Educationsales/banner (7).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
       </div>
       <div className={styles.CRMedtechmaindivcontent}>
        <h1>Why do education technology organization need CRM?</h1>
        <p>As an EdTech company, you aim to make learning more accessible and erase the restrictions of old-school classrooms. But, to go beyond revolutionizing education, you cannot depend on spreadsheets and age-old CRMs that hold you back.

Wait, why not? </p>

<p>Every student who visits your website is looking for something different. Some may want to upgrade their professional skills, while some may want to enroll in courses as a hobby.</p>

Your sales reps should understand the difference to nurture and maintain good relationships so that the students come back to you for more courses.

<p>But, while your sales team is struggling to shift between spreadsheets, emails, phone, and a dozen other applications, prospective leads fall through the cracks.</p>
       </div>
        
    </div>
    
    </>
  )
}
