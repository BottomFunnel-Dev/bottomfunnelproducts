import React from 'react'
import { Colaborationbuilding } from '../../components/Collaboration/Colaborationbuilding'
import { Colaborationexperience } from '../../components/Collaboration/Colaborationexperience'
import { Collaborationbanner } from '../../components/Collaboration/Collaborationbanner'
import { Collaborationdata } from '../../components/Collaboration/Collaborationdata'
import { Collaborationlowerbanner } from '../../components/Collaboration/Collaborationlowerbanner'
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
    <Colaborationexperience />
    <Collaborationdata />
<Collaborationlowerbanner />


    </div>
  )
}
