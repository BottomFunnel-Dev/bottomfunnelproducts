import React from "react";
import CloudTelephony from "../../components/CloudTelephony/index";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";

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
    </>
  );
}
