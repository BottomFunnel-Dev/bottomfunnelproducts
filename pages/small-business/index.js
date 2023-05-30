import { SmallBusinessBanner } from "../../components/SmallBusiness/SmallBusinessBanner/SmallBusinessBanner";
import { SmallBusinessFreshDesk } from "../../components/SmallBusiness/SmallBusinessFreshDesk/SmallBusinessFreshDesk";
import { SmallBusinessManagement } from "../../components/SmallBusiness/SmallBusinessManagement/SmallBusinessManagement";
import { SmallBusinessSupport } from "../../components/SmallBusiness/SmallBusinessSupport/SmallBusinessSupport";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function SmallBusinees() {
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

      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />

      <SmallBusinessBanner />
      <SmallBusinessSupport />
      <SmallBusinessManagement />
      <SmallBusinessFreshDesk />
      <ProductsFooter />
    </div>
  );
}
