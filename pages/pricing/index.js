import { PricingAddOns } from "../../components/Pricing/PricingAddOns/PricingAddOns";
import { PricingBanner } from "../../components/Pricing/PricingBanner/PricingBanner";
import { PricingQuestion } from "../../components/Pricing/PricingQuestion/PricingQuestion";
import { PricingStarted } from "../../components/Pricing/PricingStarted/PricingStarted";
import { PricingTrail } from "../../components/Pricing/PricingTrail/PricingTrail";

export default function Pricing() {
    return (
        <div>
            <PricingBanner />
            <PricingTrail/>
            <PricingAddOns/>
            <PricingQuestion/>
            <PricingStarted/>
           
        </div>
    );
}