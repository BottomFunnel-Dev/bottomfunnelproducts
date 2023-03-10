import React from "react";
import { AllIndustriesBanner } from "../../components/AllIndustries/AllIndustriesBanner";
import { AllindustrycustomerDelight } from "../../components/AllIndustries/AllindustrycustomerDelight";
import { Allindustryfooter } from "../../components/AllIndustries/Allindustryfooter";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function Allindustry() {
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

      <AllIndustriesBanner />
      <AllindustrycustomerDelight />
      <Allindustryfooter />
    </div>
  );
}
