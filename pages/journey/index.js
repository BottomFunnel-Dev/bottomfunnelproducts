import { DeskFooter } from "../../components/DeskFooter/DeskFooter";
import { ChatCampaign } from "../../components/Journey/ChatCampaign/ChatCampaign";
import { JourneyBanner } from "../../components/Journey/JourneyBanner/JourneyBanner";
import { JourneyCustomerExperience } from "../../components/Journey/JourneyCustomerExperience/JourneyCustomerExperience";
import { JourneyPersonalized } from "../../components/Journey/JourneyPersonized/JourneyPersonalized";
import { JourneyTrial } from "../../components/Journey/JourneyTrial/JourneyTrial";
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
    logo: "https://d3op2l77j7wnti.cloudfront.net/Images/navbar/product/Market.png",
    width: "45%",
    list1: {
      title: "Features",
      more: { title: "View more features", path: "/404" },
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

export default function Journey() {
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

        <JourneyBanner />
        <ChatCampaign/>
        <JourneyPersonalized/>
        <JourneyCustomerExperience/>
        <JourneyTrial/>
        
        <Testimonial/>
        <TrustedBy/>

        <ReadyStarted/>
        {/* <TalentProfiles/> */}
        <LifeBottomFunnel/>
        <DeskFooter/>
        {/* <ProductsFooter />  */}
       </div>
        

    );
}