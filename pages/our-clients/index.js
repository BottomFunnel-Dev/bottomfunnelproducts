import React from "react";

import { ClientBanner } from "../../components/OurClient/ClientBanner/ClientBanner";
import { ClientSlider } from "../../components/OurClient/ClientSlider/ClientSlider";
import { OurClientbrand } from "../../components/OurClient/OurClientbrand/OurClientbrand";

import {
  branddata,
  startupdata,
  enterprisedata,
  imageData,
} from "../../Data/OurClient";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function OurClients() {
  return (
    <div>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <ClientBanner />
      <ClientSlider data={imageData} />
      <OurClientbrand data={branddata} />
      <OurClientbrand data={startupdata} />
      <OurClientbrand data={enterprisedata} />

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
}
