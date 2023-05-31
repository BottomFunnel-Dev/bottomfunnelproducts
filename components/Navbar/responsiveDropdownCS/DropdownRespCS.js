import React from "react";

import dropdown from "./dropdownRespCS.module.css";
import { useRouter } from "next/router";
import { CustomerSuccessFeature } from "../CustomerSuccess/CustomerSuccessFeature";
export default function DropdownRespCS({
  solFeaIn,
  solFeaOut,
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
              Features
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <CustomerSuccessFeature
              solFeaIn={solFeaIn}
              solFeaOut={solFeaOut}
              scroll={scroll}
            />
            </div>
          </div>
        </div>
        
      </div>

      <div className={dropdown.otherNav}>
        <div onClick={() => router.push("/")} > Integration </div>
        <div onClick={() => router.push("/")} > Sign In </div>
        <button onClick={() => router.push("/allproducts")} >Free Trial</button>
      </div>
    </div>
  );
}
