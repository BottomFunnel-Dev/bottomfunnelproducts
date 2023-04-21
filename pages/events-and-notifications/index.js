import React from "react";
import { EventsAdvantages } from "../../components/Events/EventsAdvantages/EventsAdvantages";
import { EventsAmazon } from "../../components/Events/EventsAmazon/EventsAmazon";
import { EventsBanner } from "../../components/Events/EventsBanner/EventsBanner";
import { EventsScale } from "../../components/Events/EventsScale/EventsScale";
import { EventsTrail } from "../../components/Events/EventsTrail/EventsTrail";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";

export default function events() {
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
      <EventsBanner />
      <EventsAdvantages />
      <EventsAmazon />
      <EventsScale />
      <EventsTrail />
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
  );
}
