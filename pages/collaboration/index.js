import React from 'react'
import { Colaborationbuilding } from '../../components/Collaboration/Colaborationbuilding'
import { Collaborationbanner } from '../../components/Collaboration/Collaborationbanner'
import Navbar from '../../components/Navbar/Navbar'

export default function collaboration  ()  {
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
    <Collaborationbanner />
    <Colaborationbuilding />


    
    </div>
  )
}
