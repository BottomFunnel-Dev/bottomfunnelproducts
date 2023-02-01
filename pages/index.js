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
export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Bottom funnel service</title>
        <meta name="description" content="Bottom funnel services" />
      </Head> */}

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />

      <ProductsNewPageBanner />
      <MultipleProducts />
      <TalentNetwork />
      <SimpleAndEasy />
      <TalentProfiles />

      {/* Other react required components  */}
      <StoriesSection />
      <TrustedBy/>
      {/* <OndemandSection /> */}
      {/* <PortFolio />  */}
      {/* <PlanProject /> */}
      {/* <SeoblogSection /> */}
      {/* <Revamping /> */}
      {/* <TextDropdown /> */}
      <ContectForm />
      <ProductsFooter />
    </>
  );
}
