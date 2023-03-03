import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Smbbanner } from '../../components/SMB/Smbbanner'

export default function SMB  ()  {
  return (
    <div>
    <Navbar
    productMount={{
      navMount: false,
    }}
    navredux={{
      color: "black",
      logo: false,
    }}
  />

    <Smbbanner />
    
    
    
    </div>
  )
}
