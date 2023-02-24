import React from 'react'
import { Messaginchannelbanner } from '../../components/Messaginchannel/Messaginchannelbanner'
import { Messagincommunication } from '../../components/Messaginchannel/Messagincommunication'
import { Messagingplatforms } from '../../components/Messaginchannel/Messagingplatforms'
import Navbar from '../../components/Navbar/Navbar'

export default function messaginchannel ()  {
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
    <Messaginchannelbanner />
    <Messagincommunication />
    <Messagingplatforms />
    
    </div>
  )
}
