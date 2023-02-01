// import React from "react";
// import { RealEstateBanner } from "../../components/RealEstate/RealEstateBanner";
// import { RealEstateNextBanner } from "../../components/RealEstate/RealEstateNextBanner";
// import { RealEstateSolution } from "../../components/RealEstate/RealEstateSolution";
// import { RealEstateCustomer } from "../../components/RealEstate/RealEstateCustomer";
// import { RealEstateAdminPannel } from "../../components/RealEstate/RealEstateAdminPannel";
// import { RealEstateDriver } from "../../components/RealEstate/RealEstateDriver";
// import { Realestatelowerbanner } from "../../components/RealEstate/Realestatelowerbanner";
// import { Realestatewhychoose } from "../../components/RealEstate/Realestatewhychoose";

// import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
// import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
// import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
// import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
// import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
// import Revamping from "../../components/revamping/Revamping";
// import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
// import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
// import Navbar from "../../components/Navbar/Navbar";
// import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";

// export default function RealEstate() {
//   return (
//     <div>
//       <Navbar
//         productMount={{
//           navMount: true,
//         }}
//         navredux={{
//           color: "black",
//           logo: false,
//         }}
//       />
//         <SalesNavbar  navproductredux={{
//             color: "black",
//             logo: false,
//           }}/>
//       <RealEstateBanner />
//       <RealEstateNextBanner />
//       <RealEstateSolution />
//       <RealEstateCustomer />
//       <RealEstateAdminPannel />
//       <RealEstateDriver />
//       <Realestatelowerbanner />
//       <Realestatewhychoose />

//       <StoriesSection />
//       <PlanProject />
//       <OndemandSection />
//       <SeoblogSection />
//       <Revamping />
//       <TextDropdown />
//       <ContectForm />
//       <MainFooter />
//     </div>
//   );
// }


import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar'
import { AccessData } from '../../components/RealEstateSales/AccessData/AccessData'
import { EstateAgency } from '../../components/RealEstateSales/EstateAgency/EstateAgency'
import { Productivity } from '../../components/RealEstateSales/Productivity/Productivity'
import { RealEstateSalesBanner } from '../../components/RealEstateSales/RealEstateSalesBanner/RealEstateSalesBanner'
import { TailorBusiness } from '../../components/RealEstateSales/TailorBusiness/TailorBusiness'
import { TheSolution } from '../../components/RealEstateSales/TheSolution/TheSolution'
import { WhatCanYouDo } from '../../components/RealEstateSales/WhatCanYouDo/WhatCanYouDo'
import { MakeYourDeal } from '../../components/SalesPage/MakeYourDeal/MakeYourDeal'
import { SalesWorldwide } from '../../components/SalesPage/SalesWorldwide/SalesWorldwide'


export default function RealEstateSales() {
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

        <RealEstateSalesBanner/>
        <TheSolution/>
        <WhatCanYouDo/>
        <TailorBusiness/>
        <Productivity/>
        <AccessData/>
        <EstateAgency/>
        <SalesWorldwide/>
        <MakeYourDeal/>
</div>
       
      </>
    )
  }
