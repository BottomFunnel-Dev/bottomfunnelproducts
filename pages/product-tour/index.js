import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ProductTourBanner } from "../../components/ProductTour/ProductTourBanner/ProductTourBanner";


export default function ProductTour() {
  return (

    <>
      <div style={{ color: "#393939" }}>
        <Navbar
          productMount={{
            navMount: true,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />

        <ProductTourBanner/>
       
      </div>
    </>
  );
}
