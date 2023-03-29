import React from "react";

import { WhoWeAre } from "../WhoWeAre";

import dropdown from "./dropdownResp.module.css";
import { NavIndustries } from "../NavIndustries";
import { Products } from "../Products";
import { Platform } from "../Platform";
import { Resource } from "../Resource";
export default function DropdownResp({
  homeHoverIn,
  homeHoverOut,
  resHoverIn,
  resHoverOut,
  solHoverIn,
  solHoverOut,
  scroll,
  productMount,
  productHoverIn,
  productHoverOut,
  platformHoverIn,
  platformHoverOut,
}) {
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
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <WhoWeAre
                homeHoverIn={homeHoverIn}
                homeHoverOut={homeHoverOut}
                scroll={scroll}
                productMount={productMount}
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
              <NavIndustries
                solHoverIn={solHoverIn}
                solHoverOut={solHoverOut}
                scroll={scroll}
                productMount={productMount}
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
              Products
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Products
                productHoverIn={productHoverIn}
                productHoverOut={productHoverOut}
                scroll={scroll}
                productMount={productMount}
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
              Platform
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Platform
                platformHoverIn={platformHoverIn}
                platformHoverOut={platformHoverOut}
                scroll={scroll}
                productMount={productMount}
              />
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Resources
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Resource
                resHoverIn={resHoverIn}
                resHoverOut={resHoverOut}
                scroll={scroll}
                productMount={productMount}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={dropdown.otherNav}>
        <div>Pricing</div>
        <div>Support</div>

        <button>Free Trial</button>
        <button>Services</button>
      </div>
    </div>
  );
}
