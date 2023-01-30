import About from "../components/AboutSection/About";
import Awards from "../components/AwardSection/Awards";
import { TextDropdown } from "../components/CommonComponents/faqSection/Faqs";
import MainFooter from "../components/CommonComponents/FooterSection/MainFooter";
import Industries from "../components/CommonComponents/industries/Industries";
import OndemandSection from "../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../components/CommonComponents/PlanProject/PlanProject";
import PortFolio from "../components/CommonComponents/PortFolioSection/PortFolio";
import Revamping from "../components/CommonComponents/revamping/Revamping";
import { SeoblogSection } from "../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../components/CommonComponents/StoriesSection/StoriesSection";
import CompanyLogo from "../components/CompanyLogos/CompanyLogo";
import { Companystats } from "../components/CompanyStats/Companystats";
import ContectForm from "../components/ContectForm/ContectForm";
import { BannerFull } from "../components/mainSection/BannerFull";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import { Head } from "next/document";
import { ProductsNewPageBanner } from "../components/ProductsNewPage/ProductsNewPageBanner/ProductsNewPageBanner";
import MultipleProducts from "../components/ProductsNewPage/MultipleProducts/MultipleProducts";
import { TalentNetwork } from "../components/ProductsNewPage/TalentNetwork/TalentNetwork";
import { SimpleAndEasy } from "../components/ProductsNewPage/SimpleAndEasy/SimpleAndEasy";
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

<ProductsNewPageBanner/>
<MultipleProducts/>
<TalentNetwork/>
<SimpleAndEasy/>
    
    </>
  );
}
