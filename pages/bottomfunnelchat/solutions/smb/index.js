import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsFooter } from "../../../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import { SMBbanner } from "../../../../components/smbb/SMBbanner/SMBbanner";
import { SMBCustomers } from "../../../../components/smbb/SMBCustomers/SMBCustomers";
import { SMBMore } from "../../../../components/smbb/SMBMore/SMBMore";
import { SMBTrail } from "../../../../components/smbb/SMBTrail/SMBTrail";

export default function SMB() {
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
            <SMBbanner />
            <SMBCustomers />
            <SMBMore />
            <SMBTrail />
            <ProductsFooter />
        </div>
    )
}