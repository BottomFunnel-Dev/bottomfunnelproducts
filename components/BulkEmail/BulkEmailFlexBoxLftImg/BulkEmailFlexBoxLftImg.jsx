import React from 'react'
import styles from "./BulkEmailFlexBoxLftImg.module.css"
const BulkEmailFlexBoxLftImg = ({src,title,desc,height}) => {
  return (
    <div className={styles.bulkEmailFlexBoxLftImgMainDiv}>
      <div className={styles.bulkEmailFlexBoxLftImgPicDiv}>
      <img style={{height:`${height}`}} src={src} alt="image" />
      </div>
      <div className={styles.bulkEmailFlexBoxLftImgContentDiv}>
      <h3>{title}</h3>
       <p>{desc}</p>
      </div>
    </div>
  )
}

export default BulkEmailFlexBoxLftImg
