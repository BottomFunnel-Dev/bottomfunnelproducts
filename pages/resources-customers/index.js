import Navbar from "../../components/Navbar/Navbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { ResourcesCasestudiesBanner } from "../../components/ResourcesCasestudies/ResourcesCasestudiesBanner/ResourcesCasestudiesBanner";
import { ResourcesCasestudiesCTE } from "../../components/ResourcesCasestudies/ResourcesCasestudiesCTE/ResourcesCasestudiesCTE";
import { ResourcesCasestudiesSupport } from "../../components/ResourcesCasestudies/ResourcesCasestudiesSupport/ResourcesCasestudiesSupport";
import { ResourcescasestudiesStories } from "../../components/ResourcesCasestudies/ResourcescasestudiesStories/ResourcescasestudiesStories";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function ResourcesCasestudies(){
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


<ResourcesCasestudiesBanner/>
<ResourcescasestudiesStories/>
<ResourcesCasestudiesCTE/>
<ResourcesCasestudiesSupport/>

<Testimonial/>
<TrustedBy/>
<ReadyStarted/>
<LifeBottomFunnel/>

</div>
)
}