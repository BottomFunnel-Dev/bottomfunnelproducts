import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import { Softwareandserviceitbanner } from "../../components/softwareandserviceit/softwareandserviceitbanner/softwareandserviceitbanner";
import { Softwareandserviceitchatbots } from "../../components/softwareandserviceit/softwareandserviceitchatbots/softwareandserviceitchatbots";
import { Softwareandserviceitcollabration } from "../../components/softwareandserviceit/softwareandserviceitcollabration/softwareandserviceitcollabration";
import { Softwareandserviceitcommunication } from "../../components/softwareandserviceit/softwareandserviceitcommunication/softwareandserviceitcommunication";
import { Softwareandserviceitimprove } from "../../components/softwareandserviceit/softwareandserviceitimprove/softwareandserviceitimprove";
import { Softwareandserviceitknowledge } from "../../components/Softwareandserviceit/Softwareandserviceitknowledge/softwareandserviceitknowledge";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";

export default function SuitePage() {
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
      
      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />
          <Softwareandserviceitbanner/>
          <Softwareandserviceitcommunication/>
          <Softwareandserviceitknowledge/>
          <Softwareandserviceitchatbots/>
          <Softwareandserviceitcollabration/>
          <Softwareandserviceitimprove/>
      
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
        </div>
    )
}