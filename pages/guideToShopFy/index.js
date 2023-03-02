import { GuideToShopFyBanner } from "../../components/GuideToShopFy/GuideToShopFyBanner/GuideToShopFyBanner";
import { GuideToShopFybots } from "../../components/GuideToShopFy/GuideToShopFybots/GuideToShopFybots";
import { GuideToShopFyCannel } from "../../components/GuideToShopFy/GuideToShopFyCannel/GuideToShopFyCannel";
import { GuideToShopFyConfigure } from "../../components/GuideToShopFy/GuideToShopFyConfigure/GuideToShopFyConfigure";
import { GuideToShopFyConnect } from "../../components/GuideToShopFy/GuideToShopFyConnect/GuideToShopFyConnect";
import { GuideToShopFyCoversation } from "../../components/GuideToShopFy/GuideToShopFyConversation/GuideToShopFyConversation";
import { GuideToShopFyDemo } from "../../components/GuideToShopFy/GuideToShopFyDemo/GuideToShopFyDemo";
import { GuideToShopFyMarketing } from "../../components/GuideToShopFy/GuideToShopFyMarketing/GuideToShopFyMarketing";
import { GuideToShopFyQueries } from "../../components/GuideToShopFy/GuideToShopFyQueries/GuideToShopFyQueries";
import { GuideToShopFySegments } from "../../components/GuideToShopFy/GuideToShopFySegments/GuideToShopFySegments";

export default function guideToShopfy() {
    return (
        <div>
            <GuideToShopFyBanner/>
            <GuideToShopFyConnect/>
            <GuideToShopFyConfigure/>
            <GuideToShopFyCannel/>
            <GuideToShopFyCoversation/>
            <GuideToShopFySegments/>
            <GuideToShopFyMarketing/>
            <GuideToShopFyQueries/>
            <GuideToShopFybots/>
            <GuideToShopFyDemo/>
        </div>
    );
}