import React, { useState } from "react";
import prods from "./platform.module.css";
import Link from "next/link";
import { product3, product4 } from "../../Data/Navbar";
export const Platform = ({
  platformHoverIn,
  platformHoverOut,
  scroll,
  productMount,
}) => {
  return (
    <div
      onMouseEnter={() => platformHoverIn()}
      onMouseLeave={() => platformHoverOut()}
      className={prods.platformVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "75px" }}
    >
      <div className={prods.platformDropdownSection}>
        <div className={prods.platformDropdownContent}>
          <h5
            className={prods.noStyleMain}
            style={{ marginLeft: "2%", color: "#ef4c23" }}
            onClick={() => {
              platformHoverOut();
            }}
          >
            Platforms
          </h5>

          <div style={{ marginTop: "6%" }} className={prods.listItems}>
            {product4.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  platformHoverOut();
                }}
                className={`${prods.platformimageIconDivSection} ${prods.saasHoveringData}`}
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
                  onClick={platformHoverOut}
                  href={item.path}
                  className={prods.linkP}
                  style={{
                    width: "70%",
                    color: "black",
                    fontSize: "14px",
                    marginLeft: "2%",
                    marginTop: "2%",
                    textDecoration: "none",
                  }}
                >
                  {/* <p style={{ marginTop: "0%", marginLeft: "10%" }}> */}
                  {item.dropContent}
                  {/* </p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>

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
            <img height="30px" src="/Images/Neo.png" />
            <Link href={"/neo-mainpage"}  style={{textDecoration:"none", color : "inherit"}}>
              <h5> Bottom Funnel Neo</h5>
            </Link>
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
            <img src="https://d3op2l77j7wnti.cloudfront.net/Images/navbar/product/knowmore.png" />
            <h5> Know more</h5>
          </div>
          <p>What's New?</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
};
