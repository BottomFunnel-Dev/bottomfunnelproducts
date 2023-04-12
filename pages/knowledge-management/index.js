import { KnowledgeManagementBanner } from "../../components/KnowledgeManagement/KnowledgeManagementBanner/KnowledgeManagementBanner";
import { KnowledgeManagementPerks } from "../../components/KnowledgeManagement/KnowledgeManagementPerks/KnowledgeManagementPerks";
import { KnowledgeManagementEmpower } from "../../components/KnowledgeManagement/KnowledgeManagementEmpower/KnowledgeMangementEmpower";
import Navbar from "../../components/Navbar/Navbar";
import { ServiceNavbar } from "../../components/Navbar/ServiceNavbar/ServiceNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { ServiceFooter } from "../../components/ServiceFooter/ServiceFooter";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import { KnowledgeManagementFreeTrial } from "../../components/KnowledgeManagement/KnowledgeManagementFreeTrial/KnowledgeManagementFreeTrial";
export default function KnowledgeManagement() {
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

      <ServiceNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />
      <KnowledgeManagementBanner />
      <KnowledgeManagementEmpower />
      <KnowledgeManagementPerks />
      <KnowledgeManagementFreeTrial />
      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ServiceFooter />
    </div>
  );
}
