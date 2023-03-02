import { LandingFeature } from "../../components/Landing-Pages/Feature/LandingFeature";
import { LandingBanner } from "../../components/Landing-Pages/Banner/LandingBanner";
import { LandingTrafic } from "../../components/Landing-Pages/LandingTrafic/LandingTrafic";
import { LandingSolution } from "../../components/Landing-Pages/LandingSolution/Landingsolution";
import { AIPowered } from "../../components/Landing-Pages/AIPowered/AIPowered";
import { LandingBrand } from "../../components/Landing-Pages/LandingBrand/LandingBrand";
import { LandingCustomer } from "../../components/Landing-Pages/LandingCustomer/LandingCustomer";
import { LandingSales } from "../../components/Landing-Pages/LandingSales/LandingSales";
import Navbar from "../../components/Navbar/Navbar";
import { ProdNavbar } from "../../components/ProdNavbar";

const productData = {
  title: "Bottom Funnel Marketer",
  logo: "/Images/navbar/product/Market.png",
  width: "45%",
  list1: {
    title: "Features",
    more: { title: "View more features", path: "/404" },
    position: { right: "35%" },
    products: [
      {
        dropContent: "Multichannel Engagement",
        path: "/404",
      },
      {
        dropContent: "Email & SMS",
        path: "/404",
      },
      {
        dropContent: "WhatsApp",
        path: "/404",
      },
      {
        dropContent: "Journeys",
        path: "/404",
      },
      {
        dropContent: "Landing Pages",
        path: "/landing-pages",
      },
      {
        dropContent: "Shopify Integration",
        path: "/404",
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
        path: "/404",
      },
      {
        dropContent: "Case Studies",
        path: "/404",
      },
      {
        dropContent: "What's new",
        path: "/404",
      },
      {
        dropContent: "Guide to Shopify",
        path: "/404",
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

      <LandingBanner/>
      <LandingFeature/>
      <LandingTrafic/>
      <LandingSolution/>
      <AIPowered/>
      <LandingBrand/>
      <LandingCustomer/>
      <LandingSales/>
    </div>
    );
}