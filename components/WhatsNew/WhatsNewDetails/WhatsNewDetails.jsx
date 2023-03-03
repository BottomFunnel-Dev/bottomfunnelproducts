import React from 'react'
import styles from "./WhatsNewDetails.module.css"

export default function WhatsNewDetails () {
    const monthdetails=[
        {
            month:"December",
            not:"NEW",
            title:"Shopify historical sync",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"November",
            not:"NEW",
            title:"Revenue Attribution",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"October",
            not:"NEW",
            title:"Social media campaigns",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"September",
            not:"NEW",
            title:"Online status for contacts",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"August",
            not:"NEW",
            title:"Channel rechability",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"July",
            not:"NEW",
            title:"Record Types",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"June",
            not:"NEW",
            title:"Account based segmentation",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"May",
            not:"NEW",
            title:"Social media campaigns",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"April",
            not:"NEW",
            title:"Shopify Integration",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"March",
            not:"NEW",
            title:"Whatsapp Campaigns",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"February",
            not:"NEW",
            title:"Unified Bot Builder",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
        {
            month:"January",
            not:"NEW",
            title:"Customer 360",
            para:"Bottomfunnel Marketers for shopify users can now sync all historical data from shopify to contextually engage with customers ",
        },
       
    ]
  return (
    <div className={styles.WhatsNewDetailsMain}>
        {monthdetails.map(({month, not, title, para, idx})=>{
            return (
        <div key={idx} className={styles.WhatsNewDetailsdiv}>
            
            <div className={styles.WhatsNewDetailsmnth}>
                <ul>
                    <li>{month}</li>
                </ul>
            </div>
            <div className={styles.WhatsNewDetailstext}>
                <div className={styles.notify}><p>{not}</p></div>
                <h5>{title}</h5>
                <p>{para}</p>
            </div>
        </div>
        );
      })}  
    </div>
  )
}
