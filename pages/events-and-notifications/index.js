import React from "react";
import { EventsAdvantages } from "../../components/Events/EventsAdvantages/EventsAdvantages";
import { EventsAmazon } from "../../components/Events/EventsAmazon/EventsAmazon";
import { EventsBanner } from "../../components/Events/EventsBanner/EventsBanner";
import { EventsScale } from "../../components/Events/EventsScale/EventsScale";
import { EventsTrail } from "../../components/Events/EventsTrail/EventsTrail";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

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
            <EventsAdvantages/>
            <EventsAmazon/>
            <EventsScale/>
            <EventsTrail/>
            <ProductsFooter />
        </div>
    )
}