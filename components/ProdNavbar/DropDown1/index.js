import React from "react";
import deskstyle from "./DropDown1.module.css";
import Link from "next/link";

export default function DropDown1({ handleHover, scroll, productDesk }) {
  return (
    <div
      onMouseEnter={() => handleHover("dropDown1")}
      onMouseLeave={() => handleHover("")}
      className={deskstyle.productDeskMainDiv}
      style={{ top: scroll ? "55px" : "120px" }}
    >
      <div className={deskstyle.productDeskListItems} style={{ width: "100%" }}>
        {productDesk.map((item, i) => (
          <div
            key={i}
            onClick={() => handleHover("")}
            className={deskstyle.productDeskData}
          >
            <img src={item.navIcons} alt="Product logo" />
            <Link
              onClick={() => handleHover("")}
              style={{ width: "75%" }}
              href={item.path}
              className={deskstyle.productlinkP}
            >
              <h6>{item.dropContent}</h6>
              <p style={{ color: "black" }}>{item.productText1}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
