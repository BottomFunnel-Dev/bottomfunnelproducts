import React from "react";
import dropdown from "./dropdownRespSales.module.css";
import { useRouter } from "next/router";
import { ProductSolutions } from "../ProductsNavbar/ProductSolutions";
import { ProductResources } from "../ProductsNavbar/ProductResources";
import { ProductFeature } from "../ProductsNavbar/ProductFeature";
import { ProductDesk } from "../ProductsNavbar/ProductDesk";
import { SalesIndustries } from "../SalesNavbar/SalesIndustries";
import { SalesResources } from "../SalesNavbar/SalesResources";
import { SalesFeature } from "../SalesNavbar/SalesFeature";
import { SalesProduct } from "../SalesNavbar/SalesProduct";
export default function DropdownRespSales({
  saleProIn,
  saleProOut,
  saleResIn,
  saleResOut,
  saleIndIn,
  saleIndOut,
  saleFeaIn,
  saleFeaOut,
  scroll,
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
              Products
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <SalesProduct
              saleProIn={saleProIn}
              saleProOut={saleProOut}
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
            <SalesFeature
          saleFeaIn={saleFeaIn}
          saleFeaOut={saleFeaOut}
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
            Industries
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <SalesIndustries
          saleIndIn={saleIndIn}
          saleIndOut={saleIndOut}
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
            <SalesResources
              saleResIn={saleResIn}
              saleResOut={saleResOut}
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
