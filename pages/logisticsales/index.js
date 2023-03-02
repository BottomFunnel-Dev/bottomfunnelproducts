
     {/* <CRMLogistics/> */}

import React from "react";
import { CRMLogistics } from "../../components/LogisticSales/CRMLogistics/CRMLogistics";
import { DigitalTransformation } from "../../components/LogisticSales/DigitalTransformation/DigitalTransformation";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";

export default function logisticsales() {
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

       <CRMLogistics/>
       <DigitalTransformation/>
      </div>
    </>
  );
}
