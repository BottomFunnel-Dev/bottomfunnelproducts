import { EmailCampaignBanner } from "../../components/EmailCampaign/EmailCampaignBanner/EmailCampaignBanner";
import { EmailCampaignDelever } from "../../components/EmailCampaign/EmailCampaignDelever/EmailCampaignDelever";
import { EmailCampaignExplore } from "../../components/EmailCampaign/EmailCampaignExplore/EmailCampaignExplore";
import { EmailCampaignLearn } from "../../components/EmailCampaign/EmailCampaignLearn/EmailCampaignLearn";
import { EmailCampaignTrail } from "../../components/EmailCampaign/EmailCampaignTrail/EmailCampaignTrail";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

export default function EmailCampaign() {
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
            <EmailCampaignBanner />
            <EmailCampaignDelever />
            <EmailCampaignExplore />
            <EmailCampaignLearn />
            <EmailCampaignTrail />
            <ProductsFooter />
        </div>
    )
}