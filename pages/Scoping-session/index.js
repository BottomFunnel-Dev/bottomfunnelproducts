import React from "react";
import {Footer} from "../../components/ScopingSessionPage/Footer";


import {Header} from "../../components/ScopingSessionPage/Header";
import {MiddleText} from "../../components/ScopingSessionPage/MiddleText";
import {MidImages} from "../../components/ScopingSessionPage/MidImages";
import {RoundIconsText} from "../../components/ScopingSessionPage/RoundIconsText";


import {TextDropdown} from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import {SeoblogSection} from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";


export default function Scoping() {

    return (
        <div>
            <Header/>
            <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
            <MiddleText/>
            <MidImages/>
            <RoundIconsText/>
            <Footer/> {/* Other react required components  */}
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
