import React from "react";
import BankingAndFinanceBanner from "../../components/BankingAndFinance/BankingAndFinanceBanner/BankingAndFinanceBanner";
import BankingAndFinanceLandscape from "../../components/BankingAndFinance/BankingAndFinanceLandscape/BankingAndFinanceLandscape";
import BankingAndFinanceScale from "../../components/BankingAndFinance/BankingAndFinanceScale/BankingAndFinanceScale";
import Navbar from "../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import LifeBottomFunnel from "../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";
import ReadyStarted from "../../components/ProductsNewPage/ReadyStarted/ReadyStarted";
import Testimonial from "../../components/ProductsNewPage/Testimonial/Testimonial";
import TrustedBy from "../../components/TrustedByProductsPage/TrustedBy";


export default function BankingAndFinance() {
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
      
      <BankingAndFinanceBanner/>
      <BankingAndFinanceLandscape/>
      <BankingAndFinanceScale/>
      
      <Testimonial/>
      <TrustedBy/>
      <ReadyStarted/>
      <LifeBottomFunnel/>
      <ProductsFooter/>
    </div>
  );
}
