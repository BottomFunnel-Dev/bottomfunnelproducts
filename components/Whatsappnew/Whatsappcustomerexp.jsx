import Image from 'next/image'
import React from 'react'
import styles from "./Whatsappcustomerexp.module.css"


export const Whatsappcustomerexp = () => {
  return (
    <div className={styles.whatsappcustomerexpmainboxes}>
    <h2>Elevate your customer experience with personalized engagement</h2>
<p>
Reach your global audience and maximize their engagement on the
world's most popular messaging app with whatsApp Campaigns.
Launch automated campaigns based on your audience's behavior,
send transactional messages, and engage in relevant 
conversations by delivering the right messages at the right time.
</p>
<div className={styles.whatsappbotsscreenforimg}>

<Image
          src={"/Images/whatsapp/components/Drivebetter.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />
</div>
    </div>
  )
}
