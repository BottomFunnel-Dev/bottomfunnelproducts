import React from 'react'
import styles from "./ConnectwithCustomer.module.css"
import Image from 'next/image'

export const ConnectwithCustomer = () => {
  const data = [{img:"/Images/facebookphotos/screen1.webp",hd:"Get start at a moment's notice",li1:"Connecting your Facebook page with your Bottomfunnel account is simple, instant, and safe",li2:"Route all messages from your Facebook pages to one bottomfunnel inbox",li3:"Read, respond, and manage your customer service from one place."},
 {img:"/Images/facebookphotos/screen2.webp",hd:"One Bottom funnel chat account for all your Facebook messages ",li1:"Make life easier by connecting all your Facebook pages to your bottomfunnel account.",li2:"Connect all your Facebook pages to your bottomfunnel account.",li3:"If you ever need to stop, you can quickly disconnect a page.Simply toggle it off"},
  {img:"/Images/facebookphotos/screen3.webp",hd:"Make the most of experts and bots on your team",li1:"Route your facebook messages from facebook to specific bottomfunnel chats groups",li2:"Improve deflection by deploying bots on your Facebook channel",li3:"Assign chats to agents or to bots based on the choice of the Facebook page"}]
  return (
    <div>
        <div className={styles.ConnectwithCustomermaindivheading}>
            <h2>Connect with Your Customers on Facebook Messenger</h2>
        </div>
          {data.map((item) => {
            return(
        <div className={styles.ConnectwithCustomermaindiv}>

            <div className={styles.ConnectwithCustomermaindivcontent}>
           <h4>{item.hd}</h4>
           <li>{item.li1}</li> 
           <li>{item.li2}</li> 
           <li>{item.li3}</li> 
           </div>

            <div className={styles.ConnectwithCustomermaindivcontentimage}>
            <Image
                  src={item.img}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  />
            </div>
        </div>
                  );
                })}
    </div>
  )
}
