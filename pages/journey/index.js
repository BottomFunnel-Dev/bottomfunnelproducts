import { ChatCampaign } from "../../components/Journey/ChatCampaign/ChatCampaign";
import { JourneyBanner } from "../../components/Journey/JourneyBanner/JourneyBanner";
import { JourneyCustomerExperience } from "../../components/Journey/JourneyCustomerExperience/JourneyCustomerExperience";
import { JourneyPersonalized } from "../../components/Journey/JourneyPersonized/JourneyPersonalized";
import { JourneyTrial } from "../../components/Journey/JourneyTrial/JourneyTrial";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";



export default function Journey() {
    return (
       <div><JourneyBanner />
       <ChatCampaign/>
        <JourneyPersonalized/>
        <JourneyCustomerExperience/>
        <JourneyTrial/>
        <ProductsFooter/> 
       </div>
        

    );
}