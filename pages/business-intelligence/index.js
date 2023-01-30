import React from "react";

import { BIBanner } from "../../components/BIPages/BIBanner/BIBanner";
import { BIPartner } from "../../components/BIPages/BIPartner/BIPartner";
import { BISolutions } from "../../components/BIPages/BISolutions/BISolutions";
import { BIWhyBF } from "../../components/BIPages/BIWhyBF/BIWhyBF";
import { BIAnalytics } from "../../components/BIPages/BIAnalytics/BIAnalytics";
import { BISlider } from "../../components/BIPages/BISlider/BISlider";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function  BusinessIntelligence() {
  return (
    <div>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <BIBanner />
      <BIPartner />
      <BISolutions />
      <BIWhyBF />
      <BIAnalytics />
      <BISlider />
      <CustomWebForm />
      
      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject /> 
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
