import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";
import LifeBottomFunnel from "../../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../../../components/ProductsNewPage/Testimonial/Testimonial";
import { Smbbanner } from "../../../../components/SMB/Smbbanner";
import { Smbcustomerservice } from "../../../../components/SMB/Smbcustomerservice";
import { Smbfooter } from "../../../../components/SMB/Smbfooter";
import TrustedBy from "../../../../components/TrustedByProductsPage/TrustedBy";
import { DeskFooter } from "../../../../components/DeskFooter/DeskFooter";

export default function SMB() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />

      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />

      <Smbbanner />
      <Smbcustomerservice />
      <Smbfooter />

      <TrustedBy />
      <Testimonial />
      <ReadyStarted />
      <LifeBottomFunnel />
      <DeskFooter/>
      {/* <ProductsFooter /> */}
    </div>
  );
}
