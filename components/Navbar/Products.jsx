import React, { useState } from "react";
import prods from "./products.module.css";
import Link from "next/link";
import { product1, product2, product3, product4 } from "../../Data/Navbar";
export const Products = ({ serHoverIn, serHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={() => serHoverIn()}
      onMouseLeave={() => serHoverOut()}
      className={prods.productVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >
      <div className={prods.productDropdownSection}>
        <div className={prods.productDropdownContent}>
          <h5
            className={prods.noStyleMain}
            onClick={() => {
              // navigate(`web-development`);
              serHoverOut();
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
                  // navigate(`/${item.path}`);
                  serHoverOut();
                }}
                className={`${prods.productimageIconDivSection} ${prods.hoveringDiv}`}
                style={{
                  "--i": item.productHover,
                }}
              >
                <div>
                  <img
                    className={prods.productLogoImages}
                    src={item.navIcons}
                    alt="image"
                    // style={{ width: "90px", height: "60px" }}
                  />
                </div>

                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  className={prods.productSaasRow}
                  // style={{ width: "100%", marginLeft: "10%", marginTop: "0%" }}
                >
                  <p style={{ fontWeight: "700", fontSize: "13px" }}>
                    {item.dropContent}
                  </p>
                  <p style={{ fontSize: "10px", fontWeight: "500" }}>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className={prods.productDropdownContent}>
          <div
            className={prods.listItems}
            style={{ width: "100%", margin: "13% 0" }}
          >
            {product2.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  serHoverOut();
                }}
                className={`${prods.productimageIconDivSection} ${prods.hoveringDiv}`}
                style={{
                  height: "60px",
                  width: "100%",
                  marginTop: "0%",
                  "--i": item.productHover,
                }}
              >
                <div>
                  <img
                    // className={prods.productLogoImages}
                    src={item.navIcons}
                    alt=""
                    // style={{ width: "90px", height: "60px" }}
                  />
                </div>
                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  className={prods.productSaasRow}
                  // style={{ width: "100%", marginLeft: "10%", marginTop: "0%"}}
                >
                  <p style={{ fontWeight: "500", fontSize: "14px" }}>
                    {item.dropContent}
                  </p>
                  <p style={{ fontSize: "11px" }}>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="newProductPage"
            onClick={serHoverOut}
            style={{ textDecoration: "none" }}
          >
            <p className={prods.viewAllButton}>View All Products</p>
          </Link>
        </div>

      </div>
    </div>
  );
};
