import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import { SMSBanner } from "../../components/SMS/SMSBanner/SMSBanner";
import { SMSBots } from "../../components/SMS/SMSBots/SMSBots";
import { SMSCustomers } from "../../components/SMS/SMSCustomers/SMSCustomers";
import { SMSTrail } from "../../components/SMS/SMSTrail/SMSTrail";

export default function SMS() {
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
            <SMSBanner />
            <SMSCustomers />
            <SMSBots />
            <SMSTrail />
            <ProductsFooter />
        </div>
    )
}