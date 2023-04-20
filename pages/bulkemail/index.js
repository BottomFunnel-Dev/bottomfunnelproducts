import BulkEmailBanner from "../../components/BulkEmail/BulkEmailBanner/BulkEmailBanner";
import BulkEmailGroupBox from "../../components/BulkEmail/BulkEmailGroupBox/BulkEmailGroupBox";
import BulkEmailInfo from "../../components/BulkEmail/BulkEmailInfo/BulkEmailInfo";
import BulkEmailSuiteBox from "../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox";
import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

const index = () => {
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
      <BulkEmailBanner />
      <div style={{backgroundColor:"rgba(241, 241, 241, 0.432)"}}>
      <BulkEmailInfo />
      <BulkEmailGroupBox />
      <BulkEmailSuiteBox />
      </div>
      

      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </div>
  );
};

export default index;
