import React, { useState } from "react";
import prods from "./platform.module.css";
import Link from "next/link";
import { product3, product4 } from "../../Data/Navbar";
export const Platform = ({ serHoverIn, serHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={() => serHoverIn()}
      onMouseLeave={() => serHoverOut()}
      className={prods.platformVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >
      <div className={prods.platformDropdownSection}>
    
        <div className={prods.platformDropdownContent}>
          <h5
            className={prods.noStyleMain}
            style={{ marginLeft: "2%", color: "#ef4c23" }}
            onClick={() => {
              // navigate(`web-development`);
              serHoverOut();
            }}
          >
            Platforms
          </h5>

          <div style={{marginTop:"6%"}} className={prods.listItems}>
            {product4.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  serHoverOut();
                }}
                className={`${prods.platformimageIconDivSection} ${prods.saasHoveringData}`}
                // style={{ marginTop: i == 0 ? "0" : "2%" }}
              >
                <div>
                  <img
                    className={prods.iconDivSection}
                    src={item.navIcons}
                    alt="image"
                    style={{ height: "30px" }}
                  />
                </div>

                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  className={prods.linkP}
                  style={{ width: "70%", color: "black", fontSize: "14px", }}
                >
                  {/* <p style={{ marginTop: "0%", marginLeft: "10%" }}> */}
                  {item.dropContent}
                  {/* </p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={prods.platformDropdownContent}>
          <h5
            className={prods.noStyleMain}
            onClick={() => {
              serHoverOut();
            }}
            style={{ color: "#ef4c23", paddingLeft: "35px" }}
          >
            Features
          </h5>

          <div className={prods.listItems} style={{ marginTop: "5%", marginLeft: "7%" }}>
            {product3.map((item, i) => (
              <div key={i} onClick={() => {
                  serHoverOut();
                }}
                className={prods.platformimageIconDivSection}
              >
                <Link
                  onClick={serHoverOut}
                  href={item.path}
                  style={{
                    margin: "5px",
                    fontSize: "14px",
                    color: "black",
                    padding: "0 10px",
                  }}
                >
                  {item.dropContent}
                </Link>
              </div>
            ))}
          </div>
        </div> */}

        <div className={prods.platformDropdownContent}>
          <div
            style={{
              marginTop: "1%",
              color: "#ef4c23",
              marginLeft: "0",
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
            }}
          >
            <img height="40px" src="/Images/navbar/product/Neo.png" />
            <h5> Bottom Funnel Neo</h5>

          </div>

          <p style={{ marginLeft: "5%" }}>
            Leverage a flexible, end-to-end, AI-powered enterprise platform tou
            unify customer experiences
          </p>
          <div
            style={{
              marginTop: "15%",
              color: "#ef4c23",
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
            }}
          >
            <img src="/Images/navbar/product/knowmore.png" />
            <h5> Know more</h5>
          </div>
          <p>What's New?</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
};
