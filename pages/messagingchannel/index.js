import React from 'react'
import { Messaginchannelbanner } from '../../components/Messaginchannel/Messaginchannelbanner'
import { Messagincommunication } from '../../components/Messaginchannel/Messagincommunication'
import { Messagingchannellowerbanner } from '../../components/Messaginchannel/Messagingchannellowerbanner'
import { Messagingplatforms } from '../../components/Messaginchannel/Messagingplatforms'
import Navbar from '../../components/Navbar/Navbar'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'



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
    <Messagingchannellowerbanner />
    <ProductsFooter/>
    
    </div>
  )
}
