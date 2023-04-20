import React from 'react'
import TopImageFlexBox from '../../MultipleSalesPipeline/TopImageFlexBox/TopImageFlexBox'
import { multiCurrencyinfoCardFirstRow, multiCurrencyinfoCardSecondRow } from '../../../Data/MultiCurrency_MultiLanguageInfo'

const MultiCurrency_MultiLanguageInfo = () => {
  return (
    <div>
       <h3 style={{textAlign:"center",marginBottom:"2rem"}}>What can you do with multi-currency and multi-language support?</h3>
        <TopImageFlexBox data={multiCurrencyinfoCardFirstRow}/>
        <TopImageFlexBox data={multiCurrencyinfoCardSecondRow}/>
    </div>
  )
}

export default MultiCurrency_MultiLanguageInfo
