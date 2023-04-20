import React from 'react'
import styles from "./MultiCurrency_MultiLanguageAd.module.css"
import BulkEmailFlexBoxRhtImg from '../../BulkEmail/BulkEmailFlexBoxRhtImg/BulkEmailFlexBoxRhtImg'
import BulkEmailFlexBoxLftImg from '../../BulkEmail/BulkEmailFlexBoxLftImg/BulkEmailFlexBoxLftImg'
const MultiCurrency_MultiLanguageAd = () => {
  return (
    <div>
    <div className={styles.MultiCurrency_MultiLanguageAdImgDiv}>
    <div className={styles.MultiCurrency_MultiLanguageAdContentDiv}>
          <h2>Operate your business from any region</h2>
          <p>
          As your business grows and expands, you need to tailor your CRM to adapt to your unique needs. Bottom Funnel sales helps businesses to function across different regions with multi-currency and multi-language support. Users can manage transactions easier in the local currency and customize the CRM to speak their language.
          </p>
        </div>
    </div>

      <BulkEmailFlexBoxRhtImg
        src={"/Images/Multi-currency&Multi-language/Group100000677325.png"}
        title={"Manage global transactions in the local currency"}
        desc={
          "Choose from 150+ currencies to suit your business deal. Leverage the power of automation to monitor currency exchange rates, and view your deal values in the local currency."
        }
      />
      <BulkEmailFlexBoxLftImg src={"/Images/Multi-currency&Multi-language/Group1000006774ff.png"} title={"Translate language your CRM into any"} desc={"TPersonalize Freshsales to view and manage data in the language of your choice. Choose from over 10 languages to send emails, track metrics, analyse reports, and more."}/>
      
    </div>
  )
}

export default MultiCurrency_MultiLanguageAd
