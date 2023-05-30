import React from "react";
import { Trial } from "../../components/AnalyticsofFeature/Trial/Trial";
import CloudTelephony from "../../components/CloudTelephony/index";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { SalesFooter } from "../../components/SalesFooter/SalesFooter";

export default function CloudTelephonyPage() {
  return (
    <>
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
      <CloudTelephony />
      <TrustedBy />
      <Trial />
      <Testimonial />

      <LifeBottomFunnel />
      {/* added footer of sales in place of product footer */}
      <SalesFooter />
    </>
  );
}
