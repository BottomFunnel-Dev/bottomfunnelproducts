import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ManagedserviceProviderBanner } from "../../components/ManagedserviceProvider/ManagedserviceProviderBanner/ManagedserviceProviderBanner";
import { ManagedserviceProviderDemo } from "../../components/ManagedserviceProvider/ManagedserviceProviderDemo/ManagedserviceProviderDemo";
import { ManagedserviceProviderFreind } from "../../components/ManagedserviceProvider/ManagedserviceProviderFreind/ManagedserviceProviderFreind";
import { ManagedserviceProviderHelpDesk } from "../../components/ManagedserviceProvider/ManagedserviceProviderHelpDesk/ManagedserviceProviderHelpDesk";
import { ManagedserviceProviderSupport } from "../../components/ManagedserviceProvider/ManagedserviceProviderSupport/ManagedserviceProviderSupport";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
export default function ManagedserviceProvider() {
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

            <ManagedserviceProviderBanner />
            <ManagedserviceProviderHelpDesk />
            <ManagedserviceProviderSupport />
            <ManagedserviceProviderFreind />
            <ManagedserviceProviderDemo />
        </div>
    );
}   