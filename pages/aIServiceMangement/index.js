import React from 'react'
import { AIScreens } from '../../components/AIServiceMangement/AIScreens/AIScreens'
import { AIServiceMangementBanner } from '../../components/AIServiceMangement/AIServiceMangementBanner/AIServiceMangementBanner'
import { EmpowerAI } from '../../components/AIServiceMangement/EmpowerAI/EmpowerAI'

export default function whatsAppChat  ()  {
    return (
    <div>
        
        <AIServiceMangementBanner/>
        <EmpowerAI/>
        <AIScreens/>
    </div>
  )
}
