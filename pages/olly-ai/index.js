import Navbar from "../../components/Navbar/Navbar";
import OllyAiAdvantage from "../../components/OllyAi/OllyAiAdvantage/OllyAiAdvantage";
import OllyAiBanner from "../../components/OllyAi/OllyAiBanner/OllyAiBanner";
import OllyAiCTA from "../../components/OllyAi/OllyAiCTA/OllyAiCTA";
import OllyAiFeatures from "../../components/OllyAi/OllyAiFeatures/OllyAiFeatures";
import OllyAiTeams from "../../components/OllyAi/OllyAiTeams/OllyAiTeams";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function OllyAi() {
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
      <OllyAiBanner/>
      <OllyAiAdvantage/>
      <OllyAiTeams/>
      <OllyAiFeatures/>
      <OllyAiCTA/>
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
}
