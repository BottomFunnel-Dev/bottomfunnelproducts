import React from 'react'
import styles from "./MultiSalesPipelineFooter.module.css"
const MultiSalesPipelineFooter = ({title,desc,btntext}) => {
  return (
    <div className={styles.MultiSalesPipelineFooter_MainDiv}>
      <h4>{title}</h4>
      <h6>{desc}</h6>
      <button>{btntext}</button>
    </div>
  )
}

export default MultiSalesPipelineFooter
