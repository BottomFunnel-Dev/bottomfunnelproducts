import React from "react";


import styles from "./UXDesignPage.module.css";

// ----- React main sub componients -----

import { UXDesignEmotions } from "../../components/UXDesignPage/UXDesignEmotions/UXDesignEmotions";
import { UXDesignMidBanner } from "../../components/UXDesignPage/UXDesignMidBanner/UXDesignMidBanner";
import { UXDesignServices } from "../../components/UXDesignPage/UXDesignServices/UXDesignServices";
import { UXDesingBanner } from "../../components/UXDesignPage/UXDesingBanner/UXDesingBanner";
import { UXDesignWhyBF } from "../../components/UXDesignPage/UXDesignWhyBF/UXDesignWhyBF";

import {TextDropdown} from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import {SeoblogSection} from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function UXDesignPage  ()  {


  return (
    <div className={styles.UXDesignPagecontainer}>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <UXDesingBanner />
      <UXDesignEmotions />
      <UXDesignServices />
      <UXDesignWhyBF />
      <UXDesignMidBanner />

      {/* Other react required components  */}
      <StoriesSection/>
      <OndemandSection/> 
      {/* <PortFolio />  */}
      <PlanProject/>
      <SeoblogSection/>
      <Revamping/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>
    </div>
  );
};
