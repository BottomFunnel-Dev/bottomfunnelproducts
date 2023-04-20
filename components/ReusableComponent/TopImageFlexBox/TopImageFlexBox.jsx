import React from 'react'
import styles from "./TopImageFlexBox.module.css"
const TopImageFlexBox = ({data}) => {
  return (
    <div className={styles.TopImageFlexBoxMainDiv}>
        {data?.map((el)=> <div>
          <img src={el.img} alt="logo" />
          <h5>{el.title}</h5>
          <p>
           {el.desc}
          </p>
        </div>)}
      
    </div>
  )
}

export default TopImageFlexBox
