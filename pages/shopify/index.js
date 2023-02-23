import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Shopifybanner } from '../../components/Shopify/Shopifybanner/Shopifybanner'
import { Shopifyframes } from '../../components/Shopify/ShopifyFrames/Shopifyframes'
import { ShopifyIntigration } from '../../components/Shopify/ShopifyIntigration/ShopifyIntigration'

export default function Shopify  () {
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
    <Shopifybanner />
    <ShopifyIntigration />
    <Shopifyframes />
    </div>
  )
}
