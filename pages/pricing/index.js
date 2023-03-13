import Navbar from "../../components/Navbar/Navbar";
import { PricingAddOns } from "../../components/Pricing/PricingAddOns/PricingAddOns";
import { PricingBanner } from "../../components/Pricing/PricingBanner/PricingBanner";
import { PricingQuestion } from "../../components/Pricing/PricingQuestion/PricingQuestion";
import { PricingStarted } from "../../components/Pricing/PricingStarted/PricingStarted";
import { PricingTrail } from "../../components/Pricing/PricingTrail/PricingTrail";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function Pricing() {
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

            <PricingBanner />
            <PricingTrail/>
            <PricingAddOns/>
            <PricingQuestion/>
            <PricingStarted/>
            
            <Testimonial />
            <TrustedBy />
            <ReadyStarted />
            <TalentProfiles />

            <LifeBottomFunnel />
            <ProductsFooter />
        </div>
    );
}