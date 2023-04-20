import React from 'react'
import styles from "./TopBannerWithBgImgNdBtn.module.css"
const TopBannerWithBgImgNdBtn = ({title,desc,btntext,bgUrl}) => {
  return (
    <div className={styles.TopBannerWithBgImgNdBtnMainDiv}>
    <div style={{backgroundImage:`url(${bgUrl})`}} className={styles.TopBannerWithBgImgNdBtnImgDiv}>
      <div className={styles.TopBannerWithBgImgNdBtnImgContentDiv}>
        <h1>{title}</h1>
        <p>
          {desc}
        </p>
        <button>{btntext}</button>
      </div>
    </div>
  </div>
  )
}

export default TopBannerWithBgImgNdBtn
