import { AllIntegrationBanner } from "../../components/AllIntegration/AllIntegrationBanner/AllIntegrationBanner";
import { AllIntegrationTrail } from "../../components/AllIntegration/AllIntegrationTrail/AllIntegrationTrail";
import { AllIntegrationWay } from "../../components/AllIntegration/AllIntegrationWay/AllIntegrationWay";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function AllIntegration() {
    return (
        <div>
             <Navbar
          productMount={{
            navMount: true,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}/>
            <AllIntegrationBanner />
            <AllIntegrationWay/>
            <AllIntegrationTrail/>
            <ProductsFooter />
        </div>
    )
}