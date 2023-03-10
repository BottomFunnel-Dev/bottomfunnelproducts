import { InsuranceBanner } from "../../components/Insurance/InsuranceBanner/InsuranceBanner";
import { InsuranceDemo } from "../../components/Insurance/InsuranceDemo/InsuranceDemo";
import { InsuranceRelationship } from "../../components/Insurance/InsuranceRelationship/InsuranceRelationship";
import { InsuranceRespond } from "../../components/Insurance/InsuranceRespond/InsuranceRespond";
import { InsuranceSoftware } from "../../components/Insurance/InsuranceSoftware/InsuranceSoftware";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";



export default function Insurance() {
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
            <InsuranceBanner />
            <InsuranceSoftware />
            <InsuranceRespond />
            <InsuranceRelationship />
            <InsuranceDemo />
            <ProductsFooter />
        </div>
    )
}