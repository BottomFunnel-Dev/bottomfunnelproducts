import { ChatBotsBanner } from "../../components/ChatBots/ChatBotsBanner/ChatBotsBanner";
import { ChatBotsCustomers } from "../../components/ChatBots/ChatBotsCustomers/ChatBotsCustomers";
import { ChatBotsspin } from "../../components/ChatBots/ChatBotsspin/ChatBotsspin";
import { ChatBotsSupport } from "../../components/ChatBots/ChatBotsSupport/ChatBotsSupport";
import { ChatBotstrail } from "../../components/ChatBots/ChatBotstrail/ChatBotstrail";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function ChatBots() {
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
            <ChatBotsBanner />
            <ChatBotsSupport/>
            <ChatBotsCustomers/>
            <ChatBotsspin/>
            <ChatBotstrail/>
            <ProductsFooter />
        </div>
    )
}