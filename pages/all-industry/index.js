import React from "react";
import { AllIndustriesBanner } from "../../components/AllIndustries/AllIndustriesBanner";
import { AllindustrycustomerDelight } from "../../components/AllIndustries/AllindustrycustomerDelight";
import { Allindustryfooter } from "../../components/AllIndustries/Allindustryfooter";

export default function Allindustry() {
  return (
    <div>
      <AllIndustriesBanner />
      <AllindustrycustomerDelight />
      <Allindustryfooter />
    </div>
  );
}
