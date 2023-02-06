import { TextDropdown } from "../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../components/CommonComponents/PlanProject/PlanProject";
import Revamping from "../components/CommonComponents/revamping/Revamping";
import { SeoblogSection } from "../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../components/CommonComponents/StoriesSection/StoriesSection";
import CompanyLogo from "../components/CompanyLogos/CompanyLogo";
import ContectForm from "../components/ContectForm/ContectForm";
import TrustedBy from "../components/TrustedByProductsPage/TrustedBy";

import Navbar from "../components/Navbar/Navbar";
import { ProductsNewPageBanner } from "../components/ProductsNewPage/ProductsNewPageBanner/ProductsNewPageBanner";
import MultipleProducts from "../components/ProductsNewPage/MultipleProducts/MultipleProducts";
import { TalentNetwork } from "../components/ProductsNewPage/TalentNetwork/TalentNetwork";
import { SimpleAndEasy } from "../components/ProductsNewPage/SimpleAndEasy/SimpleAndEasy";
import { TalentProfiles } from "../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import { ProductsFooter } from "../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import LifeBottomFunnel from "../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import Head from "next/head";
import { GetStarted } from "../components/ProductsNewPage/GetStarted/GetStarted";
import { CustomerRate } from "../components/ProductsNewPage/CustomerRate/CustomerRate";
import Hiretalent from "../components/ProductsNewPage/hireComopnent/Hiretalent";
import Testimonial from "../components/ProductsNewPage/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Explore Brainstrome SAAS Products and Customer Employee Experience Software | Bottom Funnel</title>
        <meta
          name="description"
          content="Design your product home page the right way and 
          empower your team with the right tools to make it easy 
          for them to sell, market, and interact with your 
          customers. With our help, you'll soon be delighting 
          your customers like never before!"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />

        <ProductsNewPageBanner />
        {/* <MultipleProducts /> */}
        <CustomerRate/>
        <Hiretalent/>
        {/* <TalentNetwork /> */}
        <SimpleAndEasy />
        <GetStarted />
        <TalentProfiles />
        {/* <ReadyStarted /> */}

        {/* Other react required components  */}
        {/* <StoriesSection /> */}
        <Testimonial/>
        <TrustedBy />
        <LifeBottomFunnel />
        <ProductsFooter />
      </main>
    </>
  );
}
