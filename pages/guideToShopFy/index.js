import { GuideToShopFyBanner } from "../../components/GuideToShopFy/GuideToShopFyBanner/GuideToShopFyBanner";
import { GuideToShopFybots } from "../../components/GuideToShopFy/GuideToShopFybots/GuideToShopFybots";
import { GuideToShopFyCannel } from "../../components/GuideToShopFy/GuideToShopFyCannel/GuideToShopFyCannel";
import { GuideToShopFyConfigure } from "../../components/GuideToShopFy/GuideToShopFyConfigure/GuideToShopFyConfigure";
import { GuideToShopFyConnect } from "../../components/GuideToShopFy/GuideToShopFyConnect/GuideToShopFyConnect";
import { GuideToShopFyCoversation } from "../../components/GuideToShopFy/GuideToShopFyConversation/GuideToShopFyConversation";
import { GuideToShopFyDemo } from "../../components/GuideToShopFy/GuideToShopFyDemo/GuideToShopFyDemo";
import { GuideToShopFyMarketing } from "../../components/GuideToShopFy/GuideToShopFyMarketing/GuideToShopFyMarketing";
import { GuideToShopFyQueries } from "../../components/GuideToShopFy/GuideToShopFyQueries/GuideToShopFyQueries";
import { GuideToShopFySegments } from "../../components/GuideToShopFy/GuideToShopFySegments/GuideToShopFySegments";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

const productData = {
    title: "Bottom Funnel Marketer",
    logo: "/Images/navbar/product/Market.png",
    width: "45%",
    list1: {
      title: "Features",
      more: { title: "View more features", path: "/" },
      position: { right: "35%" },
      products: [
        {
          dropContent: "Multichannel Engagement",
          path: "/",
        },
        {
          dropContent: "Email & SMS",
          path: "/",
        },
        {
          dropContent: "WhatsApp",
          path: "/whatsapp",
        },
        {
          dropContent: "Journeys",
          path: "/journey",
        },
        {
          dropContent: "Landing Pages",
          path: "/landing-pages",
        },
        {
          dropContent: "Shopify Integration",
          path: "/",
        },
      ],
    },
    list4: {
      title: "Resources",
      more: false,
      position: { right: "20%" },
      products: [
        {
          dropContent: "Product Tours",
          path: "/product-tour",
        },
        {
          dropContent: "Case Studies",
          path: "/",
        },
        {
          dropContent: "What's new",
          path: "/whatsnew",
        },
        {
          dropContent: "Guide to Shopify",
          path: "/guideToShopFy",
        },
      ],
    },
    pricing: "",
  };

export default function guideToShopfy() {
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

      <ProdNavbar data={productData} />

            <GuideToShopFyBanner/>
            <GuideToShopFyConnect/>
            <GuideToShopFyConfigure/>
            <GuideToShopFyCannel/>
            <GuideToShopFyCoversation/>
            <GuideToShopFySegments/>
            <GuideToShopFyMarketing/>
            <GuideToShopFyQueries/>
            <GuideToShopFybots/>
            <GuideToShopFyDemo/>

            <Testimonial/>
            <TrustedBy/>

            <ReadyStarted/>
            {/* <TalentProfiles/> */}
            <LifeBottomFunnel/>
            <ProductsFooter/>
        </div>
    );
}