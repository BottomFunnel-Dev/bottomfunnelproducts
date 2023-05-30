import React from 'react';
import styles from "./NeoMainpageServices.module.css";
import Image from 'next/image';

export const NeoMainpageServices=()=>{
    const cards =[
        {
            img:"/Images/NeoMainpage/icon1.png",
            hd: "Marketplace",
            par:"Personalize your customer experience by masking your virtual phone number with your personal number while making a call.",
            s:"Marketplace"
        },
        {
            img:"/Images/NeoMainpage/icon2.png",
            hd:"Conversations",
            par:"Create and link IVR menus to your virtual phone numbers to direct callers to the right department.",
            s:"Messaging"
        },
        {
            img:"/Images/NeoMainpage/icon3.png",
            hd:"Custom Objects",
            par:"A single virtual phone number can be shared by your entire phone team in Bottom funnel desk Contact Center, no more hassle of multiple phone numbers!",
            s:"Custom Objects"
        },
        {
            img:"/Images/NeoMainpage/icon4.png",
            hd:"Analytics",
            par:"Create custom business hours for each of your phone numbers, send after hour calls to voicemail, another team or even to your mobile phone.",
            s:"Analytics"
        },
        {
            img:"/Images/NeoMainpage/icon5.png",
            hd:"Integrations",
            par:"Create warm and welcoming greeting messages for your callers and elevate their phone experience.",
            s:"Integration"
        },
        {
            img:"/Images/NeoMainpage/icon6.png",
            hd:"Administration",
            par:"Forward calls that you receive in your virtual phone number to your mobile and take calls even when you are not in office!",
            s:"Neo Admin Centre"
        },
        {
            img:"/Images/NeoMainpage/icon7.png",
            hd:"Developer Experience",
            par:"Create custom business hours for each of your phone numbers, send after hour calls to voicemail, another team or even to your mobile phone.",
            s:"Developer Portal"
        },
        {
            img:"/Images/NeoMainpage/icon8.png",
            hd:"Unified Data",
            par:"Create warm and welcoming greeting messages for your callers and elevate their phone experience.",
            s:"Unified Customer record"
        },
        {
            img:"/Images/NeoMainpage/icon8.png",
            hd:"Unified Data",
            par:"Create warm and welcoming greeting messages for your callers and elevate their phone experience.",
            s:"Unified Customer record"
        }
      
    ]
return(
    <div className={styles.NeoMainpageServicesMain}>
<div className={styles.NeoMainpageServicessection}>
{cards.map((item) => {
            return (
<div className={styles.NeoMainpageServicesdiv}>
    <div className={styles.NeoMainpageServicesimages}>
    <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                   </div>
                   <div className={styles.NeoMainpageServicesContent}>
                <h2>{item.hd}</h2>
                <p>{item.par}</p>
                <a href="#">{item.s}</a>
                </div>
               
               
                
    </div>
            );})}
</div>

</div>
)}