import React from "react";
import {BusinessAnalysisBanner} from "../../components/BusinessAnalysis/BusinessAnalysisBanner";
import {BusinessAnalysisLowerBanner} from "../../components/BusinessAnalysis/BusinessAnalysisLowerBanner";
import {BusinessChallenge} from "../../components/BusinessAnalysis/BusinessChallenge";
import {BusinessFramework} from "../../components/BusinessAnalysis/BusinessFramework";


import {TextDropdown} from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import {SeoblogSection} from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";


export default function BusinessAnalysis() {


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
            <BusinessAnalysisBanner/>
            <BusinessChallenge/>
            <BusinessFramework/>
            <BusinessAnalysisLowerBanner/> {/* Other react required components  */}
            <StoriesSection/>
            <OndemandSection/> {/* <PortFolio />  */}
            <PlanProject/>
            <SeoblogSection/>
            <Revamping/>
            <TextDropdown/>
            <ContectForm/>
            <MainFooter/>

        </div>
    );
};
