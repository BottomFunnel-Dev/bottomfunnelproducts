import { LandingFeature } from "../../components/Landing-Pages/Feature/LandingFeature";
import { LandingBanner } from "../../components/Landing-Pages/Banner/LandingBanner";
import { LandingTrafic } from "../../components/Landing-Pages/LandingTrafic/LandingTrafic";
import { LandingSolution } from "../../components/Landing-Pages/LandingSolution/LandingSolution";
import { AIPowered } from "../../components/Landing-Pages/AIPowered/AIPowered";
import { LandingBrand } from "../../components/Landing-Pages/LandingBrand/LandingBrand";
import { LandingCustomer } from "../../components/Landing-Pages/LandingCustomer/LandingCustomer";
import { LandingSales } from "../../components/Landing-Pages/LandingSales/LandingSales";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

const productData = {
  title: "Bottom Funnel Marketer",
  logo: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/navbar/product/Market.png",
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

export default function landingPages() {
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

      <LandingBanner />
      <LandingFeature />
      <LandingTrafic />
      <LandingSolution />
      <AIPowered />
      <LandingBrand />
      <LandingCustomer />
      <LandingSales />
      
      <Testimonial />
      <TrustedBy />
      <ReadyStarted />
      {/* <TalentProfiles/> */}
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
};
