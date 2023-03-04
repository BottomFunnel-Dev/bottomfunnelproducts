import { CaseStudy } from "../../components/CustomerSpotlight/CaseStudy/CaseStudy";
import { CustomerSpotLightBanner } from "../../components/CustomerSpotlight/CustomerSpotlightBanner/CustomerSpotlightBanner";
import { CustomerSpotlightDemo } from "../../components/CustomerSpotlight/CustomerSpotlightDemo/CustomerSpotlightDemo";

export default function CustomerSpotlight() {
    return (
        <div>
           <CustomerSpotLightBanner/>
           <CaseStudy/>
           <CustomerSpotlightDemo/>
        </div>
    )
}