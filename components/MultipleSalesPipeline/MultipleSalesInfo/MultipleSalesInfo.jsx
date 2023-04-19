import React from 'react'
import styles from "./MultipleSalesInfo.module.css"
import { infoCardFirstRow, infoCardSecondRow } from '../../../Data/MultipleSalesPipeline'
import TopImageFlexBox from '../TopImageFlexBox/TopImageFlexBox'

const MultipleSalesInfo = () => {
    
  return (
    <div >
        <TopImageFlexBox data={infoCardFirstRow}/>
        <TopImageFlexBox data={infoCardSecondRow}/>
        
    </div>
  )
}

export default MultipleSalesInfo
