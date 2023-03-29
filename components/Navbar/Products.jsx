import React, { useState } from "react";
import prods from "./products.module.css";
import Link from "next/link";
import { product1, product2, product3, product4 } from "../../Data/Navbar";
export const Products = ({ productHoverIn, productHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={() => productHoverIn()}
      onMouseLeave={() => productHoverOut()}
      className={prods.productVisible}
      style={{ top: scroll || productMount.navMount ? "70px" : "100px" }}
    >
      <div className={prods.productDropdownSection}>
        <div className={prods.productDropdownContent}>
          <h5
            className={prods.noStyleMain}
            onClick={() => {
              productHoverOut();
            }}
            style={{ color: "#ef4c23", marginBottom: "10px" }}
          >
            SAAS
          </h5>

          <div className={prods.listItems} style={{ width: "100%" }}>
            {product1.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  productHoverOut();
                }}
                className={`${prods.productimageIconDivSection} ${prods.hoveringDiv}`}
                style={{
                  "--i": item.productHover,
                }}
              >
                <div>
                  <img className={prods.productLogoImages} src={item.navIcons} alt="image" />
                </div>

                <Link
                  onClick={productHoverOut}
                  href={item.path}
                  className={prods.productSaasRow}
                >
                  <p style={{ fontWeight: "700", fontSize: "13px" }}>
                    {item.dropContent}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: "500" }}>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={prods.productDropdownContentTwo}>
          <div className={prods.listItems} style={{ width: "100%", margin: "13% 0" }} >
            {product2.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  productHoverOut();
                }}
                className={`${prods.productimageIconDivSection} ${prods.hoveringDiv}`}
                style={{
                  height: "60px",
                  width: "100%",
                  marginTop: "-4%",
                  marginRight: "5%",
                  "--i": item.productHover,
                }}
              >
                <div>
                  <img
                    className={prods.productLogoImagesSecond}
                    src={item.navIcons}
                    alt="image"
                  />
                </div>

                <Link
                  onClick={productHoverOut}
                  href={item.path}
                  className={prods.productSaasRow}
                style={{ width: "100%", marginLeft: "4%", marginTop: "0%"}}
                >
                  <p style={{ fontWeight: "500", fontSize: "14px",marginLeft:"-4%" }}>
                    {item.dropContent}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: "500",marginLeft:"-4%"  }}>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
          
          <Link href="/allproducts" onClick={productHoverOut} style={{ textDecoration: "none" }} >
            <p className={prods.viewAllButton}> View All Products </p>
          </Link>
        </div>

      </div>
    </div>
  );
};
