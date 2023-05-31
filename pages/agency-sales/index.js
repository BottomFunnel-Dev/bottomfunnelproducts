import React from "react";
import { AgencyBanner } from "../../components/AgencyHomePage/AgencyBanner/AgencyBanner";
import { AgencyNeedCrm } from "../../components/AgencyHomePage/AgencyNeedCrm/AgencyNeedCrm";
import { AngencyCrm } from "../../components/AgencyHomePage/AngencyCrm/AngencyCrm";
import { AutomateTask } from "../../components/AgencyHomePage/AutomateTask/AutomateTask";
import { Discover } from "../../components/AgencyHomePage/Discover/Discover";
import { Performing } from "../../components/AgencyHomePage/Performing/Performing";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import { AgencySales } from "../../components/AgencyHomePage/AgencySales/AgencySales";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";

export default function AgencyHomePage() {
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

        <AgencyBanner />
        <AngencyCrm />
        <AgencyNeedCrm />
        <Discover />
        <AutomateTask />
        <Performing />
        <AgencySales />
        
        <Trial />
        <Testimonial />
        <TrustedBy />
        <ReadyStarted />
        <LifeBottomFunnel />
        {/* added footer of sales in place of product footer */}
        <SalesFooter />
      </div>
    </>
  );
}
