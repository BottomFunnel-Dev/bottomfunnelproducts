import { EmailCampaignBanner } from "../../components/EmailCampaign/EmailCampaignBanner/EmailCampaignBanner";
import { EmailCampaignDelever } from "../../components/EmailCampaign/EmailCampaignDelever/EmailCampaignDelever";
import { EmailCampaignExplore } from "../../components/EmailCampaign/EmailCampaignExplore/EmailCampaignExplore";
import { EmailCampaignLearn } from "../../components/EmailCampaign/EmailCampaignLearn/EmailCampaignLearn";
import { EmailCampaignTrail } from "../../components/EmailCampaign/EmailCampaignTrail/EmailCampaignTrail";

export default function EmailCampaign() {
    return (
        <div>
            <EmailCampaignBanner />
            <EmailCampaignDelever/>
            <EmailCampaignExplore/>
            <EmailCampaignLearn/>
            <EmailCampaignTrail/>
        </div>
    )
}