import Image from 'next/image'
import React from 'react'
import styles from "./UnifiedUCRaction.module.css"


export const UnifiedUCRaction = () => {
    const unifieducrdata = [
        {
            img:"/Images/unified customer record/Components/Group 3322.webp",
        },

        {
            img:"/Images/unified customer record/Components/Group 3329.webp",
        },

        {
            img:"/Images/unified customer record/Components/Group 3327.webp",
        },

    ]
  return (
   <div className={styles.unifieducrmainboxes}>
   <h2>See UCR in action</h2>
   <div className={styles.ucractiondatamappingbox}>{unifieducrdata.map((e)=>{
    return (
        <div>
        <Image
          src={e.img}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" , padding:"10px" , objectFit:"contain"}}
        />
        
        </div>
    )
   })}</div>
   </div>
  )
}
