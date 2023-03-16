import { MarketPlaceBanner } from "../../components/MarketPlace/MarketPlaceBanner/MarketPlaceBanner";
import { MarketPlaceCollections } from "../../components/MarketPlace/MarketPlaceCollections/MarketPlaceCollections";
import { MarketPlaceFeature } from "../../components/MarketPlace/MarketPlaceFeature/MarketPlaceFeature";
import { MarketPlaceNewly } from "../../components/MarketPlace/MarketPlaceNewly/MarketPlaceNewly";
import { MarketPlacePopular } from "../../components/MarketPlace/MarketPlacePopular/MarketPlacePopular";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function MarketPlace() {
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

      <MarketPlaceBanner />
      <MarketPlaceFeature />
      <MarketPlacePopular />
      <MarketPlaceNewly />
      <MarketPlaceCollections />

      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
};
