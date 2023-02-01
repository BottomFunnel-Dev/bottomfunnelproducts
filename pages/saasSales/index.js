import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import { MakeYourDeal } from '../../components/SaaSHomePage/MakeYourDeal/MakeYourDeal'
import { SaaSAgency } from '../../components/SaaSHomePage/SaaSAgency/SaaSAgency'
import { SaaSBusiness } from '../../components/SaaSHomePage/SaaSBusiness/SaaSBusiness'
import { SaaSData } from '../../components/SaaSHomePage/SaaSData/SaaSData'
import { SaaSHomePageBanner } from '../../components/SaaSHomePage/SaaSHomePageBanner/SaaSHomePageBanner'
import { SaaSIndustry } from '../../components/SaaSHomePage/SaaSIndustry/SaaSIndustry'
import { SalesWorldwide } from '../../components/SaaSHomePage/SalesWorldwide/SalesWorldwide'
import { TrySalesCrm } from '../../components/SaaSHomePage/TrySalesCrm/TrySalesCrm'


export default function  SaaSHomePage() {
    return (
      <>

<div style={{ color: "#393939" }}>
 
 <Navbar
   productMount={{
     navMount: true,
   }}
   navredux={{
     color: "black",
     logo: false,
   }}
 />
   <SalesNavbar  navproductredux={{
       color: "black",
       logo: false,
     }}/>
     <SaaSHomePageBanner/>
       <SaaSIndustry/> 
       <SaaSBusiness/>
       <TrySalesCrm/>

       <SaaSData/>
       <SaaSAgency/>
       <SalesWorldwide/>
       <MakeYourDeal/>
        
  </div>
       
      </>
    )
  }

  
 