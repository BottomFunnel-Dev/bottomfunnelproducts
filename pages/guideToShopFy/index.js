import { GuideToShopFyBanner } from "../../components/GuideToShopFy/GuideToShopFyBanner/GuideToShopFyBanner";
import { GuideToShopFyConfigure } from "../../components/GuideToShopFy/GuideToShopFyConfigure/GuideToShopFyConfigure";
import { GuideToShopFyConnect } from "../../components/GuideToShopFy/GuideToShopFyConnect/GuideToShopFyConnect";

export default function guideToShopfy() {
    return (
        <div>
            <GuideToShopFyBanner/>
            <GuideToShopFyConnect/>
            <GuideToShopFyConfigure/>
        </div>
    );
}