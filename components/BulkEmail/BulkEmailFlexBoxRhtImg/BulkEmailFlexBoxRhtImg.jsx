import React from 'react'
import styles from "./BulkEmailFlexBoxRhtImg.module.css"
const BulkEmailFlexBoxRhtImg = ({src,title,desc}) => {
  return (
    <div className={styles.bulkEmailFlexBoxRhtImgMainDiv}>
      <div className={styles.bulkEmailFlexBoxRhtImgContentDiv}>
       <h3>{title}</h3>
       <p>{desc}</p>
      </div>
      <div className={styles.bulkEmailFlexBoxRhtImgPicDiv}>
        <img src={src} alt="image" />
      </div>
    </div>
  )
}

export default BulkEmailFlexBoxRhtImg
