import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import { ServiceCatalogueBanner } from "../../components/ServiceCatalogue/ServiceCatalogueBanner/ServiceCatalogueBanner";
import { ServiceCatalogueCustomers } from "../../components/ServiceCatalogue/ServiceCatalogueCustomers/ServiceCatalogueCustomers";

export default function ServiceCatalogue() {
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
            <ServiceCatalogueBanner />
            <ServiceCatalogueCustomers />
            <ProductsFooter />
        </div>
    )
}