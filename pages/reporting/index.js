import Navbar from "../../components/Navbar/Navbar";
import { ServiceNavbar } from "../../components/Navbar/ServiceNavbar/ServiceNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { ReportingBanner } from "../../components/Reporting/ReportingBanner/ReportingBanner";
import { ReportingFeatures } from "../../components/Reporting/ReportingFeatures/ReportingFeatures";
import { ReportingPerk } from "../../components/Reporting/ReportingPerk/ReportingPerk";
import { ServiceFooter } from "../../components/ServiceFooter/ServiceFooter";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";


export default function Reporting(){
    return(
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
    
        <ServiceNavbar
          navproductredux={{
          color: "black",
          logo: false,
        }}
      />
    <ReportingBanner/>
    <ReportingFeatures/>
    <ReportingPerk/>
    <Testimonial />
      <TrustedBy/>
     
      
      <ReadyStarted />
      <TalentProfiles/>
      <LifeBottomFunnel />
      <ServiceFooter />
</div>
    )
}