import Image from 'next/image'
import React from 'react'
import styles from "./SmbInsight.module.css"

export const SmbInsight = () => {
    
  return (
    <div className={styles.smbinsightmainboxes}>
    <h2>One SMB insight service solution for all your problems</h2>
    <div className={styles.smbinsightdatamapping}>
            <div className={styles.smbinsightdataindi}>
            <div className={styles.smbinsightindileftbox}>
            <div className={styles.smbinsightindiicon}>
            <Image
                src={"/Images/SMB/logoinsight.webp"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" , objectFit:"contain", padding:"5px"}}
                />

            </div>
            <h3>Get actionable insights</h3>
            <p>Track key metrics such as insight satisfaction score and average response time using customizable dashboards and reports to measure performance, increase accountability and make better decisions.</p>
            <h6>Utilize reports to support better {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
            </h6>
            
            </div>
            <div className={styles.smbinsightindirightbox}>
            <Image
                src={"/Images/SMB/Rectangle 10.webp"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" , objectFit:"contain", padding:"5px"}}
                />
            
            
            </div>            
            </div>
    </div>
    
    </div>
  )
}
