import TrustedBy from "../components/TrustedByProductsPage/TrustedBy";

import Navbar from "../components/Navbar/Navbar";
import { ProductsNewPageBanner } from "../components/ProductsNewPage/ProductsNewPageBanner/ProductsNewPageBanner";
import { SimpleAndEasy } from "../components/ProductsNewPage/SimpleAndEasy/SimpleAndEasy";
import { TalentProfiles } from "../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import { ProductsFooter } from "../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import LifeBottomFunnel from "../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import Head from "next/head";
import { CustomerRate } from "../components/ProductsNewPage/CustomerRate/CustomerRate";
import Hiretalent from "../components/ProductsNewPage/hireComopnent/Hiretalent";
import Testimonial from "../components/ProductsNewPage/Testimonial/Testimonial";
import ReadyStarted from "../components/ProductsNewPage/ReadyStarted/ReadyStarted";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Home page | Bottom Funnel Company</title>
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
        <CustomerRate />
        <Hiretalent />
        <SimpleAndEasy />

        <Testimonial />
        <TrustedBy />
        <ReadyStarted />
        <TalentProfiles />

        <LifeBottomFunnel />
        <ProductsFooter />
      </main>
    </>
  );
}
