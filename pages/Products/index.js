import React from "react";
import { ProductsNewPageBanner } from "../../components/ProductsNewPage/ProductsNewPageBanner/ProductsNewPageBanner";
import { SimpleAndEasy } from "../../components/ProductsNewPage/SimpleAndEasy/SimpleAndEasy";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import { TalentNetwork } from "../../components/ProductsNewPage/TalentNetwork/TalentNetwork";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

import Navbar from "../../components/Navbar/Navbar";

export default function Products() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />

      <ProductsNewPageBanner />
      <TalentNetwork />
      <SimpleAndEasy />
      <TalentProfiles />

      {/* Other react required components  */}
      <ProductsFooter />
    </div>
  );
}
