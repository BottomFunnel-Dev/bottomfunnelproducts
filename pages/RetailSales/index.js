import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { MortarDead } from "../../components/RetailSales/MortarDead/MortarDead";
import { RetailSalesBanner } from "../../components/RetailSales/RetailSalesBanner/RetailSalesBanner";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";

export default function RetailSales() {
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

        <RetailSalesBanner />
        <MortarDead />

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
