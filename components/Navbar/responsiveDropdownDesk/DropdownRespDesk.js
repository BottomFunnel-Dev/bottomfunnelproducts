import React from "react";

import { WhoWeAre } from "../WhoWeAre";

import dropdown from "./dropdownRespDesk.module.css";
import { NavIndustries } from "../NavIndustries";
import { Products } from "../Products";
import { Platform } from "../Platform";
import { Resource } from "../Resource";
import { useRouter } from "next/router";
import { ProductSolutions } from "../ProductsNavbar/ProductSolutions";
import { ProductResources } from "../ProductsNavbar/ProductResources";
import { ProductFeature } from "../ProductsNavbar/ProductFeature";
import { ProductDesk } from "../ProductsNavbar/ProductDesk";
export default function DropdownRespDesk({
  solDeskIn,
  solDeskOut,
  solResIn,
  solResOut,
  solHoverIn,
  solHoverOut,
  solFeaIn,
  solFeaOut,
  scroll,
  productMount,
  productHoverIn,
  productHoverOut,
  platformHoverIn,
  platformHoverOut,
}) {
  const router = useRouter();
  return (
    <div className={dropdown.dropdown_css}>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Desk products
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ProductDesk
                solDeskIn={solDeskIn}
                solDeskOut={solDeskOut}
                scroll={scroll}
              />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <ProductFeature
            solFeaIn={solFeaIn}
            solFeaOut={solFeaOut}
            scroll={scroll}
            />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            Solutions
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ProductSolutions
                solHoverIn={solHoverIn}
                solHoverOut={solHoverOut}
                scroll={scroll}
              />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Resource
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <ProductResources
              solResIn={solResIn}
              solResOut={solResOut}
              scroll={scroll}
            />
            </div>
          </div>
        </div>
        
      </div>

      <div className={dropdown.otherNav}>
        <div onClick={() => router.push("/pricing")} > Pricing </div>
        <div onClick={() => router.push("/")} > Sign In </div>

        <button onClick={() => router.push("/allproducts")} >Free Trial</button>
      </div>
    </div>
  );
}
