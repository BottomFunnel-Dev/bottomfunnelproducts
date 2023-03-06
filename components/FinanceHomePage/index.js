import React from 'react'
import { Communication } from './Communication/Communication'
import { FinanceContaint } from './FinanceContaint/FinanceContaint'
import { FinanceHomePageBanner } from './FinanceHomePageBanner/FinanceHomePageBanner'
import { Financepragraf } from './Financepragraf/Financepragraf'
import { FinanceTask } from './FinanceTask/FinanceTask'


export default function FinanceHomePage() {
    return (
      <>
     <FinanceHomePageBanner/>
     <Financepragraf/>
     <FinanceContaint/>
     <FinanceTask/>
     <Communication/>
  

  
       
      </>
    )
  }

 
  