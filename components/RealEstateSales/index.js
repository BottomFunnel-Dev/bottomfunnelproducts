import React from "react";
import Navbar from "../Navbar/Navbar";
import { SalesNavbar } from "../Navbar/SalesNavbar/SalesNavbar";
import { MakeYourDeal } from "../SalesPage/MakeYourDeal/MakeYourDeal";
import { SalesWorldwide } from "../SalesPage/SalesWorldwide/SalesWorldwide";
import { AccessData } from "./AccessData/AccessData";
import { EstateAgency } from "./EstateAgency/EstateAgency";
import { Productivity } from "./Productivity/Productivity";
import { RealEstateSalesBanner } from "./RealEstateSalesBanner/RealEstateSalesBanner";
import { TailorBusiness } from "./TailorBusiness/TailorBusiness";
import { TheSolution } from "./TheSolution/TheSolution";
import { WhatCanYouDo } from "./WhatCanYouDo/WhatCanYouDo";

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
        <SalesNavbar
          navproductredux={{
            color: "black",
            logo: false,
          }}
        />

        <RealEstateSalesBanner />
        <TheSolution />
        <WhatCanYouDo />
        <TailorBusiness />
        <Productivity />
        <AccessData />
        <EstateAgency />
        {/* <SalesWorldwide/>
        <MakeYourDeal/> */}
      </div>
    </>
  );
}
