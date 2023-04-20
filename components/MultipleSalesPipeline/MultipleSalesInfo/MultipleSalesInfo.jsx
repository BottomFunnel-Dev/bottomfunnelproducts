import React from 'react'
import styles from "./MultipleSalesInfo.module.css"
import { infoCardFirstRow, infoCardSecondRow } from '../../../Data/MultipleSalesPipeline'
import TopImageFlexBox from '../TopImageFlexBox/TopImageFlexBox'

const MultipleSalesInfo = () => {
    
  return (
    <div >
      <h2 style={{textAlign:"center",marginBottom:"2rem"}}>Empower sales teams to work from anywhere and stay productive</h2>
        <TopImageFlexBox data={infoCardFirstRow}/>
        <TopImageFlexBox data={infoCardSecondRow}/>
        
    </div>
  )
}

export default MultipleSalesInfo
