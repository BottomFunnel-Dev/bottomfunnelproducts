import { LandingFeature } from "../../components/Landing-Pages/Feature/LandingFeature";
import { LandingBanner } from "../../components/Landing-Pages/Banner/LandingBanner";
import { LandingTrafic } from "../../components/Landing-Pages/LandingTrafic/LandingTrafic";
import { LandingSolution } from "../../components/Landing-Pages/LandingSolution/Landingsolution";
import { AIPowered } from "../../components/Landing-Pages/AIPowered/AIPowered";
import { LandingBrand } from "../../components/Landing-Pages/LandingBrand/LandingBrand";

export default function landingPages() {
    return (
    <div>
  <LandingBanner/>
 <LandingFeature/>
 <LandingTrafic/>
 <LandingSolution/>
 <AIPowered/>
 <LandingBrand/>
    </div>
    );
}