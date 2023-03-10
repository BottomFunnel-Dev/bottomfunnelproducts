import { CaseStudy } from "../../components/CustomerSpotlight/CaseStudy/CaseStudy";
import { CustomerSpotLightBanner } from "../../components/CustomerSpotlight/CustomerSpotlightBanner/CustomerSpotlightBanner";
import { CustomerSpotlightDemo } from "../../components/CustomerSpotlight/CustomerSpotlightDemo/CustomerSpotlightDemo";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function CustomerSpotlight() {
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

           <CustomerSpotLightBanner/>
           <CaseStudy/>
           <CustomerSpotlightDemo/>

           <Testimonial/>
           <TrustedBy/>

            <ReadyStarted/>
            <TalentProfiles/>
            <LifeBottomFunnel/>
            <ProductsFooter/>
        </div>
    )
}