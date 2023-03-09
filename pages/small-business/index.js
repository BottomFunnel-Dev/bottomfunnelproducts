import { SmallBusinessBanner } from "../../components/SmallBusiness/SmallBusinessBanner/SmallBusinessBanner";
import { SmallBusinessFreshDesk } from "../../components/SmallBusiness/SmallBusinessFreshDesk/SmallBusinessFreshDesk";
import { SmallBusinessManagement } from "../../components/SmallBusiness/SmallBusinessManagement/SmallBusinessManagement";
import { SmallBusinessSupport } from "../../components/SmallBusiness/SmallBusinessSupport/SmallBusinessSupport";


export default function SmallBusinees() {
    return (
        <div>
 <SmallBusinessBanner/>
 <SmallBusinessSupport/>
 <SmallBusinessManagement/>
 <SmallBusinessFreshDesk/>
        </div>
    );
}