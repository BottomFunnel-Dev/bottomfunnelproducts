import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { SalesNavbar } from "../../components/Navbar/SalesNavbar/SalesNavbar";
import { NeoAdminAdministration } from "../../components/NeoAdminCenter/NeoAdminAdministration/NeoAdminAdministration";
import { NeoAdminBanner } from "../../components/NeoAdminCenter/NeoAdminBanner/NeoAdminBanner";
import { NeoAdminBilling } from "../../components/NeoAdminCenter/NeoAdminBilling/NeoAdminBilling";
import { NeoAdminEnterprise } from "../../components/NeoAdminCenter/NeoAdminEnterprise/NeoAdminEnterprise";

export default function NeoAdminCenter() {
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

        <SalesNavbar 
          navproductredux={{
            color: "black",
            logo: false,
          }}
        />

        <NeoAdminBanner/>
        <NeoAdminEnterprise/>
        <NeoAdminBilling/>
        <NeoAdminAdministration/>
        
      </div>
    </>
  );
}
