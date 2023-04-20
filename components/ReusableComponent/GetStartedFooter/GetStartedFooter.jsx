import React from 'react'
import styles from "./GetStartedFooter.module.css"
const GetStartedFooter = ({title,desc,btntext}) => {
  return (
    <div className={styles.GetStartedFooter_MainDiv}>
    <h4>{title}</h4>
    <h6>{desc}</h6>
    <button>{btntext}</button>
  </div>
  )
}

export default GetStartedFooter
