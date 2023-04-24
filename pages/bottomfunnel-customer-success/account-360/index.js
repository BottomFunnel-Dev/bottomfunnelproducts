import { Account360degBanner } from "../../../components/Account360deg/Account360degBanner/Account360degBanner"
import { Account360degCTE } from "../../../components/Account360deg/Account360degCTE/Account360degCTE"
import { Account360degData } from "../../../components/Account360deg/Account360degData/Account360degData"
import { CustomerSuccess } from "../../../components/Navbar/CustomerSuccess/CustomerSuccess"

import Navbar from "../../../components/Navbar/Navbar"
import { ServiceNavbar } from "../../../components/Navbar/ServiceNavbar/ServiceNavbar"
import LifeBottomFunnel from "../../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel"
import ReadyStarted from "../../../components/ProductsNewPage/ReadyStarted/ReadyStarted"
import { TalentProfiles } from "../../../components/ProductsNewPage/TalentProfiles/TalentProfiles"
import Testimonial from "../../../components/ProductsNewPage/Testimonial/Testimonial"
import { ServiceFooter } from "../../../components/ServiceFooter/ServiceFooter"
import TrustedBy from "../../../components/TrustedByProductsPage/TrustedBy"

export default function Account360deg(){
return(
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
    
    <CustomerSuccess
      navproductredux={{
        color: "black",
        logo: false,
      }}
    />
      <Account360degBanner/>
      <Account360degData/>
      <Account360degCTE/>
      <Testimonial />
      <TrustedBy/>
      <ReadyStarted />
      <TalentProfiles/>
      <LifeBottomFunnel />
      <ServiceFooter />
    </div>
)
}