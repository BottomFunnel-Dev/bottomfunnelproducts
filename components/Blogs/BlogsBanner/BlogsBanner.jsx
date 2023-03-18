import React from 'react'
import styles from "./BlogsBanner.module.css"
import Image from 'next/image'

export default function BlogsBanner () {
  return (
    <div className={styles.blogsBanner}>

        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/blogs/banner.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <div className={styles.blogsHeading}>
            <p>Thought, Leadership, insights and stories from Bottom Funnel</p>
        </div>
    </div>
  )
}
