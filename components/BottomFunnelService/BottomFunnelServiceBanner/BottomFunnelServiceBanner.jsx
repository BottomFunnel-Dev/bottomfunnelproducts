import React from 'react'
import styles from "./BottomFunnelServiceBanner.module.css"
import Image from 'next/image'

export const BottomFunnelServiceBanner = () => {
  return (
    <div>
    <div className={styles.BottomFunnelServiceBannermaindiv}>
      <div className={styles.BottomFunnelServiceouterdiv}>
    <div className={styles.BottomFunnelServiceBannerinnerdiv}>
       
    
    <h1>Bottom Funnel Customer service Software</h1>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum vitae reprehenderit neque eos doloribus molestias? Temporibus vel ut eum rerum, earum animi repellat nulla sequi et facere aliquam distinctio magnam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, pariatur beatae sunt eligendi a dolores obcaecati similique quae. Molestiae architecto, illo maxime mollitia laborum deleniti placeat doloremque ex reiciendis doloribus.</p>
    
    <button className={styles.BottomFunnelServicebutton}>Start Free Demo</button>
    </div>
    <div className={styles.BottomFunnelServiceBannerimage}>
    <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/bannerphotos.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />  
    </div>
    </div>

    
    </div>
    <div className={styles.BottomFunnelServiceBannernextdiv}>
      <h2>"The customer experience is everything".</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam velit deleniti odio optio quae aliquid quidem error? Id quo, magnam mollitia expedita explicabo vero omnis aperiam fugiat ad eaque?</p>
    </div>
    </div>
  )
}
