import { LineChatBanner } from "../../components/LineChat/LineChatBanner/LineChatBanner";
import { LineChatCompany } from "../../components/LineChat/LineChatCompany/LineChatCompany";
import { LineChatLineUp } from "../../components/LineChat/LineChatLineUp/LineChatLineUp";
import { LineChatMore } from "../../components/LineChat/LineChatMore/LineChatMore";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function LineChat() {
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
            <LineChatBanner />
            <LineChatCompany />
            <LineChatLineUp />
            <LineChatMore />
            <ProductsFooter />

        </div>
    )
}