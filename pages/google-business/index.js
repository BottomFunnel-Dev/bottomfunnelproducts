import { GoogleBusinessMessageBanner } from "../../components/GoogleBusinessMessage/GoogleBusinessMessageBanner/GoogleBusinessMessageBanner";
import { GoogleBusinessMessageCustomer } from "../../components/GoogleBusinessMessage/GoogleBusinessMessageCustomer/GoogleBusinessMessageCustomer";
import { GoogleBusinessMessageDemo } from "../../components/GoogleBusinessMessage/GoogleBusinessMessageDemo/GoogleBusinessMessageDemo";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
export default function guideToShopfy() {
    return (
        <div>
            <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
  <GoogleBusinessMessageBanner/>
  <GoogleBusinessMessageCustomer/>
  <GoogleBusinessMessageDemo/>
  <ProductsFooter/>
        </div>
    )
}